"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3727],{86529:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var o=t(85893),s=t(11151);const a={custom_edit_url:"https://github.com/microsoft/autogen/edit/main/website/docs/tutorial/introduction.ipynb",source_notebook:"/website/docs/tutorial/introduction.ipynb",title:"Introduction to AutoGen"},i="Introduction to AutoGen",r={id:"tutorial/introduction",title:"Introduction to AutoGen",description:"Open In Colab",source:"@site/docs/tutorial/introduction.mdx",sourceDirName:"tutorial",slug:"/tutorial/introduction",permalink:"/autogen/docs/tutorial/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/tutorial/introduction.ipynb",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/microsoft/autogen/edit/main/website/docs/tutorial/introduction.ipynb",source_notebook:"/website/docs/tutorial/introduction.ipynb",title:"Introduction to AutoGen"},sidebar:"docsSidebar",previous:{title:"Getting Started",permalink:"/autogen/docs/Getting-Started"},next:{title:"Terminating Conversations Between Agents",permalink:"/autogen/docs/tutorial/termination"}},c={},l=[{value:"Why AutoGen?",id:"why-autogen",level:2},{value:"Installation",id:"installation",level:2},{value:"Agents",id:"agents",level:2},{value:"Roles and Conversations",id:"roles-and-conversations",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"introduction-to-autogen",children:"Introduction to AutoGen"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://colab.research.google.com/github/microsoft/autogen/blob/main/website/docs/tutorial/introduction.ipynb",children:(0,o.jsx)(n.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,o.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/website/docs/tutorial/introduction.ipynb",children:(0,o.jsx)(n.img,{src:"https://img.shields.io/badge/Open%20on%20GitHub-grey?logo=github",alt:"Open on GitHub"})})]}),"\n",(0,o.jsxs)(n.p,{children:["Welcome! AutoGen is an open-source framework that leverages multiple\n",(0,o.jsx)(n.em,{children:"agents"})," to enable complex workflows. This tutorial introduces basic\nconcepts and building blocks of AutoGen."]}),"\n",(0,o.jsx)(n.h2,{id:"why-autogen",children:"Why AutoGen?"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"The whole is greater than the sum of its parts."}),(0,o.jsx)("br",{})," -",(0,o.jsx)(n.strong,{children:"Aristotle"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"While there are many definitions of agents, in AutoGen, an agent is an\nentity that can send messages, receive messages and generate reply using\nmodels, tools, human inputs or a mixture of them. This abstraction not\nonly allows agents to model real-world and abstract entities, such as\npeople and algorithms, but it also simplifies implementation of complex\nworkflows as collaboration among agents."}),"\n",(0,o.jsx)(n.p,{children:"Further, AutoGen is extensible and composable: you can extend a simple\nagent with customizable components and create workflows that can combine\nthese agents and power a more sophisticated agent, resulting in\nimplementations that are modular and easy to maintain."}),"\n",(0,o.jsx)(n.p,{children:"Most importantly, AutoGen is developed by a vibrant community of\nresearchers and engineers. It incorporates the latest research in\nmulti-agent systems and has been used in many real-world applications,\nincluding agent platform, advertising, AI employees, blog/article\nwriting, blockchain, calculate burned areas by wildfires, customer\nsupport, cybersecurity, data analytics, debate, education, finance,\ngaming, legal consultation, research, robotics, sales/marketing, social\nsimulation, software engineering, software security, supply chain,\nt-shirt design,\xa0training data generation, Youtube\xa0service\u2026"}),"\n",(0,o.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsxs)(n.p,{children:["The simplest way to install AutoGen is from pip:\n",(0,o.jsx)(n.code,{children:"pip install pyautogen"}),". Find more options in\n",(0,o.jsx)(n.a,{href:"../../docs/installation/",children:"Installation"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"agents",children:"Agents"}),"\n",(0,o.jsx)(n.p,{children:"In AutoGen, an agent is an entity that can send and receive messages to\nand from other agents in its environment. An agent can be powered by\nmodels (such as a large language model like GPT-4), code executors (such\nas an IPython kernel), human, or a combination of these and other\npluggable and customizable components."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"ConversableAgent",src:t(28692).Z+""})}),"\n",(0,o.jsxs)(n.p,{children:["An example of such agents is the built-in ",(0,o.jsx)(n.code,{children:"ConversableAgent"})," which\nsupports the following components:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"A list of LLMs"}),"\n",(0,o.jsx)(n.li,{children:"A code executor"}),"\n",(0,o.jsx)(n.li,{children:"A function and tool executor"}),"\n",(0,o.jsx)(n.li,{children:"A component for keeping human-in-the-loop"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"You can switch each component on or off and customize it to suit the\nneed of your application. You even can add additional components to the\nagent\u2019s capabilities."}),"\n",(0,o.jsxs)(n.p,{children:["LLMs, for example, enable agents to converse in natural languages and\ntransform between structured and unstructured text. The following\nexample shows a ",(0,o.jsx)(n.code,{children:"ConversableAgent"})," with a GPT-4 LLM switched on and\nother components switched off:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'import os\nfrom autogen import ConversableAgent\n\nagent = ConversableAgent(\n    "chatbot",\n    llm_config={"config_list": [{"model": "gpt-4", "api_key": os.environ.get("OPENAI_API_KEY")}]},\n    code_execution_config=False,  # Turn off code execution, by default it is off.\n    function_map=None,  # No registered functions, by default it is None.\n    human_input_mode="NEVER",  # Never ask for human input.\n)\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"llm_config"})," argument contains a list of configurations for the\nLLMs. See ",(0,o.jsx)(n.a,{href:"../../docs/topics/llm_configuration",children:"LLM Configuration"})," for\nmore details."]}),"\n",(0,o.jsxs)(n.p,{children:["You can ask this agent to generate a response to a question using the\n",(0,o.jsx)(n.code,{children:"generate_reply"})," method:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'reply = agent.generate_reply(messages=[{"content": "Tell me a joke.", "role": "user"}])\nprint(reply)\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"Sure, here's one for you:\n\nWhy don't scientists trust atoms? \n\nBecause they make up everything!\n"})}),"\n",(0,o.jsx)(n.h2,{id:"roles-and-conversations",children:"Roles and Conversations"}),"\n",(0,o.jsxs)(n.p,{children:["In AutoGen, you can assign roles to agents and have them participate in\nconversations or chat with each other. A conversation is a sequence of\nmessages exchanged between agents. You can then use these conversations\nto make progress on a task. For example, in the example below, we assign\ndifferent roles to two agents by setting their ",(0,o.jsx)(n.code,{children:"system_message"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'cathy = ConversableAgent(\n    "cathy",\n    system_message="Your name is Cathy and you are a part of a duo of comedians.",\n    llm_config={"config_list": [{"model": "gpt-4", "temperature": 0.9, "api_key": os.environ.get("OPENAI_API_KEY")}]},\n    human_input_mode="NEVER",  # Never ask for human input.\n)\n\njoe = ConversableAgent(\n    "joe",\n    system_message="Your name is Joe and you are a part of a duo of comedians.",\n    llm_config={"config_list": [{"model": "gpt-4", "temperature": 0.7, "api_key": os.environ.get("OPENAI_API_KEY")}]},\n    human_input_mode="NEVER",  # Never ask for human input.\n)\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Now that we have two comedian agents, we can ask them to start a comedy\nshow. This can be done using the ",(0,o.jsx)(n.code,{children:"initiate_chat"})," method. We set the\n",(0,o.jsx)(n.code,{children:"max_turns"})," to 2 to keep the conversation short."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'result = joe.initiate_chat(cathy, message="Tell me a joke.", max_turns=2)\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"joe (to cathy):\n\nTell me a joke.\n\n--------------------------------------------------------------------------------\ncathy (to joe):\n\nSure, here's a classic one for you:\n\nWhy don't scientists trust atoms?\n\nBecause they make up everything!\n\n--------------------------------------------------------------------------------\njoe (to cathy):\n\nThat's a great one, Joe! Here's my turn:\n\nWhy don't some fish play piano?\n\nBecause you can't tuna fish!\n\n--------------------------------------------------------------------------------\ncathy (to joe):\n\nHaha, good one, Cathy! I have another:\n\nWhy was the math book sad?\n\nBecause it had too many problems!\n\n--------------------------------------------------------------------------------\n"})}),"\n",(0,o.jsx)(n.p,{children:"The comedians are bouncing off each other!"}),"\n",(0,o.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,o.jsxs)(n.p,{children:["In this chapter, we introduced the concept of agents, roles and\nconversations in AutoGen. For simplicity, we only used LLMs and created\nfully autonomous agents (",(0,o.jsx)(n.code,{children:"human_input_mode"})," was set to ",(0,o.jsx)(n.code,{children:"NEVER"}),"). In the\nnext chapter, we will show how you can control when to ",(0,o.jsx)(n.em,{children:"terminate"})," a\nconversation between autonomous agents."]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28692:(e,n,t)=>{t.d(n,{Z:()=>o});const o="data:image/png;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6ODhlZjRiMDg1M2IxNzVjMDJjZGIwMjk5OTdhNzMxYzM5NmViOTFlZDVmOWU1ZGM2NzFjYjI0MDMxNjkxMThmOQpzaXplIDMwNjUwCg=="},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var o=t(67294);const s={},a=o.createContext(s);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);