const Links1 = 'python-notes'
const Links2 = 'python-ai'
const Links3 = 'python-framework'
const Links4 = 'python-projects'

const isHighlighted = 'python-ai'

const pythonData = {
    pythonNote: [
        {
            id: 1,
            section: 'Introduction to Python AI',
            title: "AI modules",
            note: [
                {
                    text1: `
<b>NumPy</b>	Numerical computations =>  matrix operations (backbone for ML)
<b>Pandas</b>	Data analysis and manipulation
<b>Matplotlib</b> / Seaborn	Data visualization
<b>Scikit-learn</b>	Machine learning (classification =>  regression =>  clustering)
<b>TensorFlow</b> / PyTorch	Deep learning (neural networks =>  training models)
<b>OpenCV</b>	Computer vision (image and video processing)
<b>NLTK</b> / spaCy	Natural Language Processing (text analysis =>  tokenization)
transformers (by Hugging Face)	Pre-trained AI models like BERT =>  GPT

Start that 30-day Python problem-solving plan?

Start building real projects:
    Flask API
    Small AI using scikit-learn or transformers
    Web scraper with requests + BeautifulSoup
`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "LangChain Fundamentals",
            note: [
                {
                    text1: `<b>LangChain Fundamentals</b>

                Since you're learning LLM fundamentals + prompting first, LangChain is the next layer that helps you build real LLM applications.
                Think of it like this:
                LLM → LangChain → AI Application

                For example:
                User
                ↓
                Prompt
                ↓
                LangChain
                ↓
                LLM (OpenAI / Llama / Gemini / Claude)
                ↓
                Response`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "What is LangChain?",
            note: [
                {
                    text1: `LangChain is a Python framework for building applications powered by LLMs.                
                <b>An LLM by itself can answer questions</b>:
                response = llm.invoke("What is Python?")

                <b>But real applications usually need more</b>:
                Prompt templates
                Conversation memory
                Calling APIs
                Reading documents
                Searching databases
                Using tools
                RAG
                Structured outputs
                Agents
                Multiple LLM calls

                LangChain provides components to connect these things together.
                
                2. Core LangChain concepts

I recommend learning these in this order:

Level 1 — Foundation
Models
Prompts
Messages
Output Parsers / Structured Output
LCEL — LangChain Expression Language

Example:

Prompt → LLM → Output
<b>Level 2 — Building applications</b>
Chains
Runnable
RunnableSequence
RunnableParallel
Conversation / Message History

Example:

User Question
      ↓
Prompt Template
      ↓
LLM
      ↓
Parser
      ↓
Final Answer
Level 3 — Data + RAG
Document Loaders
Document
Text Splitters
Embeddings
Vector Stores
Retrievers
RAG

This is extremely important for AI developer jobs.

Example:

PDF
 ↓
Document Loader
 ↓
Text Splitter
 ↓
Embeddings
 ↓
Vector Database
 ↓
Retriever
 ↓
LLM
 ↓
Answer
Level 4 — Tools and Agents
Tools
Tool Calling
Agents
Agentic workflows

Example:

User
 ↓
Agent
 ├── Calculator
 ├── Web Search
 ├── Database
 └── API
       ↓
      LLM
       ↓
    Response
<b>3. The most important LangChain concepts</b>

If you're preparing for an AI/LLM developer role, concentrate especially on:

Topic	Importance
LLM / Chat Models	⭐⭐⭐⭐⭐
Prompt Templates	⭐⭐⭐⭐⭐
Messages	⭐⭐⭐⭐
Structured Output	⭐⭐⭐⭐⭐
Runnables / LCEL	⭐⭐⭐⭐⭐
Chains	⭐⭐⭐⭐⭐
Document Loaders	⭐⭐⭐⭐
Text Splitters	⭐⭐⭐⭐
Embeddings	⭐⭐⭐⭐⭐
Vector Stores	⭐⭐⭐⭐⭐
Retrievers	⭐⭐⭐⭐⭐
RAG	⭐⭐⭐⭐⭐
Tools	⭐⭐⭐⭐⭐
Agents	⭐⭐⭐⭐⭐
Memory / Message History	⭐⭐⭐⭐


`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: "LangChain",
            title: "LangChain is a popular open-source framework designed to simplify the creation of applications using large language models (LLMs). It provides a standard interface for connecting LLMs to external data sources, APIs, memory systems, and computational tools.",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "LangChain Messages",
            note: [
                {
                    text1: `A message tells the LLM who is speaking and what they are saying.
                    <b>Instead of simply sending</b>:
                    In LangChain, Messages are the standardized data structures used to represent inputs and outputs in chat-based language models. Instead of passing plain strings back and forth, LangChain uses message objects to encapsulate the role of the speaker and the content of the message, mirroring how chat APIs (like OpenAI or Anthropic) structure conversations.

                    Messages are structured inputs and outputs used to communicate with chat models. They represent different roles such as system, human, AI, and tool. <b>SystemMessage</b> provides instructions, <b>HumanMessage</b> represents user input, <b>AIMessage</b> represents the model response, and <b>ToolMessage</b> represents tool execution results.

"Explain Python"
<b>LangChain can send structured messages</b>:
System → You are a Python teacher.
Human  → Explain Python.
AI     → Python is a programming language...

<b>SystemMessage</b>	Sets the behavior, persona, or instructions for the AI.	
<b>HumanMessage</b>	Represents input or a question coming from the user.
<b>AIMessage</b>	Represents the response generated by the AI model.
<b>ToolMessage</b>	Contains the result or output of a tool/function executed by an agent.	
<b>ChatMessage</b>	A flexible message type where the role can be specified manually.`,
                    code1: `// --------You can instantiate these message classes directly and pass them into a chat model using the .invoke() method. 
                    from langchain_core.messages import AIMessage, HumanMessage, SystemMessage
from langchain_openai import ChatOpenAI

// # Initialize the chat model
model = ChatOpenAI(model="gpt-4o-mini")

// # Construct a list of messages representing a conversation history
messages = [
    SystemMessage(
        content="You are a sarcastic IT support technician."
    ),
    HumanMessage(content="My computer won't turn on."),
    AIMessage(
        content="Have you tried plugging it into an electrical outlet? Just a wild guess."
    ),
    HumanMessage(content="Haha, very funny. Now seriously, the light is completely dead."),
]

# Send the message history to the model
response = model.invoke(messages)

print(type(response))  # Output: <class 'langchain_core.messages.ai.AIMessage'>
print(response.content)

// ----------- 2. SystemMessage
// A SystemMessage tells the model how it should behave.
// Example:

from langchain_core.messages import SystemMessage
message = SystemMessage(
    content="You are an expert Python teacher."
)

// Think of it as:

// System:
// You are an expert Python teacher.
// Then the model should respond as a Python teacher.
// Another example
SystemMessage(
    content="Answer every question in simple English."
)

// This is similar to the system instructions concept you learned in LLM fundamentals.

// -----------  3. HumanMessage
// This represents the user's question or request.
from langchain_core.messages import HumanMessage

message = HumanMessage(
    content="What is list comprehension?"
)

Conceptually:
Human:
What is list comprehension?

// -----------  4. AIMessage
// This represents the response generated by the model.
// You normally don't manually create this when calling the model.
// For example:
response = model.invoke(messages)
// The response might be:
AIMessage(
    content="List comprehension is a concise way..."
)

// You can access the actual text with:
print(response.content)

// -----------  5. Putting them together -------------
// This is where messages become useful.
from langchain_core.messages import (
    SystemMessage,
    HumanMessage
)

messages = [
    SystemMessage(
        content="You are an expert Python teacher."
    ),
    HumanMessage(
        content="Explain list comprehension."
    )
]

response = model.invoke(messages)
print(response.content)

// The flow is:
SystemMessage
      ↓
"You are an expert Python teacher"
      ↓
HumanMessage
      ↓
"Explain list comprehension"
      ↓
     Model
      ↓
  AIMessage
      ↓
response.content


// -----------  6. Why not just use strings? ---------
// You might wonder:
model.invoke("Explain Python")

// Why do we need messages?
// Because real applications need different roles.
// For example:

// System:
// You are a Java expert.

Human:
What is a Spring Boot Bean?

AI:
A Bean is an object managed by Spring...

Human:
Give me an example.

AI:
Here is an example...

// The model can distinguish:---------
// instructions
// user questions
// previous AI responses
// This is essential for chat applications.

// -----------  7. Conversation example
// Imagine a chatbot.
// First request:

messages = [
    SystemMessage(
        content="You are a Python teacher."
    ),
    HumanMessage(
        content="What is Python?"
    )
]

response = model.invoke(messages)

// Suppose the AI responds:--
// Python is a high-level programming language...
// Now the user asks:--
// What are its advantages?
// We can maintain the conversation:

messages = [
    SystemMessage(
        content="You are a Python teacher."
    ),

    HumanMessage(
        content="What is Python?"
    ),

    AIMessage(
        content="Python is a high-level programming language..."
    ),

    HumanMessage(
        content="What are its advantages?"
    )
]

// Then:
response = model.invoke(messages)
// The model has the conversation context.
`
                }
            ]
        },
        {
            id: 1,
            title: "LangChain Prompt Templates",
            note: [
                {
                    text1: `Prompt Templates in LangChain are standardized, reusable blueprints for creating prompts. Instead of hardcoding static strings into your LLM calls, templates allow you to use placeholders ({variable}) that are dynamically populated with runtime data. This ensures formatting consistency, cleaner code, and modular application design.  
                    
                    <b>1. Main Types of Prompt Templates</b>
LangChain provides different classes depending on the architecture of the model you are targeting:
<b>PromptTemplate</b>: Used for basic text completion/string-based models. It takes a single text block with variables.
<b>ChatPromptTemplate</b>: Used for modern chat-based models (like GPT-4o, Claude, or Gemini). It structures prompts as a sequence of role-tagged messages (system, human, ai).  
<b>MessagesPlaceholder</b>: Used within chat templates to dynamically inject a whole list of chat history or external messages.  `,
                    code1: ``
                }
            ]
        },
                {
            id: 1,
            title: "what are problem-solving skills",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: "LLM Fundamentals",
            title: "what are problem-solving skills",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: "Prompt Engineering",
            title: "what are problem-solving skills",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: "LangChain Fundamentals",
            title: "what are problem-solving skills",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: "LCEL / Runnables",
            title: "what are problem-solving skills",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: "RAG",
            title: "what are problem-solving skills",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: "Vector Databases",
            title: "what are problem-solving skills",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: "Tool Calling",
            title: "what are problem-solving skills",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: "Agents",
            title: "what are problem-solving skills",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: "LangGraph",
            title: "what are problem-solving skills",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: "Build Projects",
            title: "what are problem-solving skills",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },



    ]
}