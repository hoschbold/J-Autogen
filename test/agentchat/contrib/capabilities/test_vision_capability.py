from unittest.mock import MagicMock, patch

import pytest

from autogen.agentchat.conversable_agent import ConversableAgent

try:
    from autogen.agentchat.contrib.capabilities.vision_capability import VisionCapability
except ImportError:
    skip_test = True
else:
    skip_test = False


@pytest.fixture
def lmm_config():
    return {
        "config_list": [{"model": "gpt-4-vision-preview", "api_key": "sk-my_key"}],
        "temperature": 0.5,
        "max_tokens": 300,
    }


@pytest.fixture
def vision_capability(lmm_config):
    return VisionCapability(lmm_config, custom_caption_func=None)


@pytest.fixture
def conversable_agent():
    return ConversableAgent(name="conversable agent", llm_config=False)


@pytest.mark.skipif(
    skip_test,
    reason="do not run if dependency is not installed or requested to skip",
)
def test_add_to_conversable_agent(vision_capability, conversable_agent):
    vision_capability.add_to_agent(conversable_agent)
    assert hasattr(conversable_agent, "process_last_received_message")


@pytest.mark.skipif(
    skip_test,
    reason="do not run if dependency is not installed or requested to skip",
)
@patch("autogen.oai.client.OpenAIWrapper")
@pytest.mark.skipif(
    skip_test,
    reason="do not run if dependency is not installed or requested to skip",
)
def test_process_last_received_message_text(mock_lmm_client, vision_capability):
    mock_lmm_client.create.return_value = MagicMock(choices=[MagicMock(message=MagicMock(content="A description"))])
    content = "Test message without image"
    processed_content = vision_capability.process_last_received_message(content)
    assert processed_content == content


@patch("autogen.agentchat.contrib.img_utils.get_image_data", return_value="base64_image_data")
@patch(
    "autogen.agentchat.contrib.img_utils.convert_base64_to_data_uri",
    return_value="data:image/png;base64,base64_image_data",
)
@patch(
    "autogen.agentchat.contrib.capabilities.vision_capability.VisionCapability._get_image_caption",
    return_value="A sample image caption.",
)
@pytest.mark.skipif(
    skip_test,
    reason="do not run if dependency is not installed or requested to skip",
)
def test_process_last_received_message_with_image(
    mock_get_caption, mock_convert_base64, mock_get_image_data, vision_capability
):
    content = [{"type": "image_url", "image_url": {"url": "notebook/viz_gc.png"}}]
    expected_caption = (
        "<img notebook/viz_gc.png> in case you can not see, the caption of this image is: A sample image caption.\n"
    )
    processed_content = vision_capability.process_last_received_message(content)
    assert processed_content == expected_caption


####### Test the Custom Caption Func


@pytest.fixture
def custom_caption_func():
    """Fixture to provide a sample custom caption function."""

    def caption_func(image_url: str) -> str:
        # This is a simplistic example. Replace with the actual logic.
        return f"An image description. The image is from {image_url}."

    return caption_func


class TestCustomCaptionFunc:
    def test_custom_caption_func_with_valid_url(self, custom_caption_func):
        """Test custom caption function with a valid image URL."""
        image_url = "notebook/viz_gc.png"
        expected_caption = f"An image description. The image is from {image_url}."
        assert custom_caption_func(image_url) == expected_caption, "Caption does not match expected output."

    @patch("autogen.agentchat.contrib.capabilities.vision_capability.VisionCapability._get_image_caption")
    def test_process_last_received_message_with_custom_func(
        self, mock_get_image_caption, lmm_config, custom_caption_func
    ):
        """Test processing a message containing an image URL with a custom caption function."""
        mock_get_image_caption.return_value = "Mocked caption in this test from LMM Client."
        vision_capability = VisionCapability(lmm_config, custom_caption_func=custom_caption_func)

        image_url = "notebook/viz_gc.png"
        content = [{"type": "image_url", "image_url": {"url": image_url}}]
        expected_output = mock_get_image_caption.return_value + f" An image description. The image is from {image_url}."
        processed_content = vision_capability.process_last_received_message(content)
        assert expected_output in processed_content, "Processed content does not contain the expected caption."
