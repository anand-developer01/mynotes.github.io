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



    Vector Databases
⬜ Retrieval
⬜ Transformers
⬜ Attention
⬜ PyTorch
⬜ Neural Networks
⬜ Fine-tuning
⬜ LoRA / QLoRA
⬜ LLM Agents
⬜ LLM Evaluation
⬜ Inference & Quantization
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
            title: "LangChain",
            note: [
                {
                    text1: `LangChain is a popular open-source framework designed to simplify the creation of applications using large language models (LLMs). It provides a standard interface for connecting LLMs to external data sources, APIs, memory systems, and computational tools.`,
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
            title: "Output Parsers",
            note: [
                {
                    text1: `In LangChain, an <b>Output Parser</b> is a specialized helper class designed to take the raw text string returned by a Large Language Model (LLM) and transform it into a structured, type-safe data format (such as JSON, Pydantic objects, or lists) that your application code can actually use.
                    
                    Because LLMs fundamentally only know how to generate strings of text, output parsers bridge the gap between unstructured AI responses and rigid backend logic (like APIs, databases, or UI components).
                    <b> How LangChain Output Parsers Work </b>
                    
                    A typical output parser in LangChain performs two main jobs:
    <b>Instructions (get_format_instructions())</b>: The parser provides prompt instructions that tell the LLM how it needs to format its output (e.g., "Return a JSON object with keys 'name' and 'age'"). LangChain automatically injects these into your prompt template.

    <b>Parsing (parse())</b>: Once the LLM responds, the parser takes that raw string, strips out any unwanted markdown (like json), validates the structure, and converts it into a Python/JS object.
    
    <b>Common LangChain Output Parsers</b>
    <b>StrOutputParser</b>: The simplest parser. It strips away LangChain's wrapper message objects (AIMessage) and just returns the raw string content.
    <b>JsonOutputParser / JsonOutputKeyToolsParser</b>: Parses the LLM's response into a Python dictionary or JSON object.
    <b>CommaSeparatedListOutputParser</b>: Takes a comma-separated string from an LLM and converts it directly into a list/array.
    <b>PydanticOutputParser</b>: Highly popular for backend development. You define a data schema using a Pydantic model, and the parser ensures the LLM's output strictly matches that schema (including data types like integers, strings, or booleans). If the LLM fails, it throws a validation error.
    <b>OutputFixingParser</b>: A clever wrapper that catches parsing errors and makes a second LLM call to automatically fix the malformed JSON or schema mistake.
    
    <b>Why Use LangChain Output Parsers?</b>
    <b>Reliability</b>: They reduce the likelihood of downstream application crashes caused by unexpected text formatting from the AI.
    <b>Developer Ergonomics</b>: Instead of writing complex Regular Expressions (regex) or manual JSON.parse blocks with try-catch handlers, LangChain standardizes error-handling and formatting instructions.
    
    The flow is:
<span style="color:#ac4561"> User Input
    ↓
Prompt Template
    ↓
LLM
    ↓
Output Parser
    ↓
Structured Output
</span>
<b>Why do we need an Output Parser?</b>
An LLM normally returns text.
For example:
LLM Response:
The user's name is Anand and his age is 36.

But your application may need structured data:
{
  "name": "Anand",
  "age": 36
}

An <b>Output Parser</b> helps convert the model's response into a format your application can work with.
In <b>LangChain</b>
There are different approaches, including:
-> <b>StrOutputParser</b> → returns plain text
-> Structured output → returns data matching a defined schema
-> JSON-oriented parsing → useful when you need JSON data

For example:

<span style="color:#ac4561"> Prompt
   ↓
LLM
   ↓
StrOutputParser
   ↓
"Hello Anand!"
</span>
Or:
<span style="color:#ac4561"> Prompt
   ↓
LLM
   ↓
Structured Output
   ↓
{
   name: "Anand",
   age: 36
}</span>
`,
                    code1: `// --------------- Ex : 1  Prompt → LLM → Output Parser -----------
                    from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_ollama import ChatOllama

# 1. Create the LLM
llm = ChatOllama(
    model="llama3.2",
    temperature=0
)

# 2. Create prompt template
prompt = ChatPromptTemplate.from_template(
    "Explain {topic} in one simple sentence."
)

# 3. Create output parser
parser = StrOutputParser()

# 4. Create the chain
chain = prompt | llm | parser

# 5. Invoke the chain
result = chain.invoke({
    "topic": "RAG"
})

print(result)

`
                }
            ]
        },
        {
            id: 1,
            title: "Runnables & LCEL",
            note: [
                {
                    text1: `<b>LCEL (LangChain Expression Language)</b> is a declarative way to build complex, production-grade LLM applications by "piping" smaller components together.  
                    <b>1. What is a Runnable?</b>
A Runnable is a standardized interface implemented by almost every component in LangChain (prompts, LLMs, output parsers, retrievers, and custom functions).

<b>Takes an input → does some processing → produces an output</b>

Because they all share the exact same protocol, they can seamlessly talk to one another. Every Runnable exposes a standard set of execution methods:  
<b>.invoke(input)</b>: Processes a single input and returns a single output.  
<b>.stream(input)</b>: Streams output back chunk-by-chunk (great for responsive UI UX).
<b>.batch(inputs)</b>: Processes a list of inputs concurrently to optimize performance.
Async equivalents (ainvoke, astream, abatch) for high-concurrency backend environments.

<b>The | Pipe Operator</b>
LangChain lets us connect Runnables using:
|
For example:
chain = prompt | model | parser
Think of it as:
<span style="color:#ac4561"> prompt
   ↓
model
   ↓
parser
</span>
The output of one component automatically becomes the input of the next.`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "LangChain Agents",
            note: [
                {
                    text1: `<b>LangChain Agents</b> are AI systems powered by Large Language Models (LLMs) that use the model as a reasoning engine to determine an application's control flow. Instead of following a rigid, hardcoded sequence of steps, an agent dynamically plans, reasons, and loops through actions (such as calling external tools or APIs) until a user's goal is met.
                    
                    <b>Core Concepts</b>
                    <b>The LLM as the Brain</b>: The model processes the user input, evaluates the current state, and decides what action to take next.  
                    <b>Tools</b>: Functions, APIs, or computational modules (e.g., a calculator, a SQL database query tool, a web search API, or a file system utility) that extend the LLM's capabilities beyond its training data.  
                    <b>The Agent Loop</b>: The core mechanism where the agent executes a continuous cycle: <b>Reason -> Act -> Observe -> Repeat</b> until the task is complete.  

                    <b>Modern Architecture (langchain & langgraph)</b>
                    In the modern LangChain ecosystem, agents are built on top of robust execution runtimes (frequently leveraging <b>LangGraph</b>) to handle state persistence, multi-step planning, and complex control flows seamlessly:  

                    1) <b>Pre-built Patterns (create_agent)</b>: LangChain provides streamlined interfaces like create_agent to spin up standard ReAct (Reason + Act) agents with minimal boilerplate code.

                    2) <b>Middleware & Customization</b>: You can easily inject middleware or hooks to alter agent behavior—such as adding human-in-the-loop approval steps, managing conversation memory, or filtering sensitive data.

                    3) <b>Ecosystem Integration</b>: LangChain offers over 1,000 modular integrations for chat models, vector stores, and custom tools, ensuring you aren't locked into a single model provider.

                    <b>Chain = follows a fixed sequence</b>
                    to
                    <b>Agent = decides what action/tool to use</b>

                    <b>What is an AI Agent?</b>
An AI Agent is an LLM that can decide what action to take to accomplish a goal.
A normal LLM does:<span style="color:#ac4561">User → LLM → Answer</span>
An Agent does:<span style="color:#ac4561">User
  ↓
LLM (Reason/Decide)
  ↓
Choose a Tool
  ↓
Execute Tool
  ↓
Observe Result
  ↓
LLM
  ↓
Final Answer</span>

<b>Simple example</b>
You ask:
"What is 25 × 40?"

An agent might decide:
<span style="color:#ac4561">User question
     ↓
Agent
     ↓
"I need a calculator"
     ↓
Calculator Tool
     ↓
1000
     ↓
Agent
     ↓
"25 × 40 = 1000"
</span>
The important part is that the agent decides which tool to use.
                    `,
                    code1: `//agent syntax is roughly:

from langchain.agents import create_agent

// Then:
agent = create_agent(
    model=model,
    tools=tools,
    system_prompt="You are a helpful assistant."
)

// And invoke it:
response = agent.invoke({
    "messages": [
        {"role": "user", "content": "What is 25 * 40?"}
    ]
})
    
// ---------------
// Complete basic structure
from langchain.agents import create_agent
from langchain_ollama import ChatOllama

model = ChatOllama(
    model="llama3.2"
)

def calculator(a: int, b: int) -> int:
    return a * b

tools = [calculator]

agent = create_agent(
    model=model,
    tools=tools,
    system_prompt="You are a helpful assistant."
)

response = agent.invoke({
    "messages": [
        {"role": "user", "content": "Calculate 25 * 40"}
    ]
})

print(response["messages"][-1].content)`
                }
            ]
        },
        {
            id: 1,
            section: "LLM Fundamentals",
            title: "LLM Fundamentals",
            note: [
                {
                    text1: `An LLM (Large Language Model) is a type of artificial intelligence built using deep learning architectures—specifically the Transformer architecture—that is trained on vast amounts of text data to understand, summarize, generate, and predict new text.

Through this extensive training, LLMs learn grammar, facts about the world, reasoning patterns, and programming languages, allowing them to converse with humans in natural language and perform complex cognitive tasks.

An LLM is a neural network with a huge number of learned parameters that processes tokens and predicts the next token based on the context.

Examples:
GPT
Claude
Gemini
Llama
Mistral
Qwen

An LLM predicts what token should come next based on the context it has received.
For example:
<b>The capital of India is</b>
The model might predict:
<b>Delhi</b>

Another example:
<b>I am going to drink a cup of</b>
The model might predict:
<b>coffee</b>
It doesn't simply store a database of sentences and retrieve them.
It has learned patterns in language from training.


<b>2. Why is it called "Large"?</b>
There are two important meanings.
Large training data
LLMs are trained using enormous amounts of text.
For example:
Books
Web pages
Articles
Documentation
Code
Wikipedia
Conversations

Large number of parameters
An LLM contains millions, billions, or even hundreds of billions of numerical values called parameters.

For example:
Llama 8B
means approximately:
8 billion parameters
Similarly:-
70B
means approximately:-
70 billion parameters

<b>3. The basic LLM process</b>
At a very high level:
              Your prompt
                   ↓
              Tokenization
                   ↓
                 Tokens
                   ↓
             Neural Network
                   ↓
          Probability of tokens
                   ↓
          Select next token
                   ↓
            Generate output

For example:
Prompt:
"Java is a"
The model might calculate something conceptually like:

language    → 45%
programming → 30%
platform    → 10%
coffee      → 0.01%
...

It then selects a token according to its generation strategy.
It generates another token, then uses the updated context to predict the next one.
So generation happens approximately like:
Java is a
       ↓
Java is a programming
       ↓
Java is a programming language
       ↓
Java is a programming language used

<b>How LLMs Work</b>
At their core, LLMs are statistical prediction engines. Given a sequence of text (a prompt), the model's primary job is to predict the most likely next word (or token) based on probability distributions learned during training.
    <b>Tokens</b>: LLMs do not read whole words; they break text down into chunks called tokens (which can be words, parts of words, or punctuation marks).
    <b>Parameters</b>: These are the internal variables (weights and biases) of the neural network adjusted during training. Larger models contain billions or even hundreds of billions of parameters, allowing them to capture nuanced patterns in data.

    <b>Training Phases</b>:
        <b>Pre-training</b>: The model consumes massive datasets (books, articles, codebases, websites) to learn language structure and general knowledge.
        <b>Fine-Tuning (Alignment)</b>: The model is trained using techniques like Supervised Fine-Tuning (SFT) and Reinforcement Learning from Human Feedback (RLHF) to behave safely, follow instructions accurately, and act as a helpful assistant rather than just a text predictor.
                    
                    `,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "What is a token?",
            note: [
                {
                    text1: `An LLM doesn't directly process normal human words.
In an LLM, tokens are the small pieces of text that the model actually processes.
It processes tokens.
A token can be:
-> a whole word
-> part of a word
-> punctuation
-> sometimes whitespace or other pieces

For example:--
<i>I love programming</i>
might be broken conceptually into:
I
love
program
ming

For example:--
<i>I love AI</i>
might be broken roughly into:
I → token
love → token
AI → token
The exact tokenization depends on the model.
So:
<b>Text
 ↓
Tokens
 ↓
Numbers
 ↓
Neural network</b>
This is why you will frequently hear:
"This model has a 128K context window."
That means it can process roughly 128,000 tokens of context, not necessarily 128,000 words.
It is not exactly 128K words.
For English, a rough rule is:
1 token ≈ ¾ of an English word
So:
1,000 tokens ≈ 750 words
`,
                    code1: ``,
                    img: `../assets/images/ai/token.png`
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
            title: "What is RAG (Retrieval-Augmented Generation)?",
            note: [
                {
                    text1: `RAG stands for <b>Retrieval-Augmented Generation</b>. It is an architectural pattern used in AI and LLM applications to fetch relevant external data and feed it into the model's prompt, allowing the LLM to answer questions accurately using specific, up-to-date, or private data it wasn't originally trained on.
                    
                    <b>What RAG does</b>
                    RAG combines two things:
                    <b>Retrieval + Generation</b>
                    <span style="color:#ac4561">
                    User Question
                        ↓
                    Retrieve relevant information
                        ↓
                    Your Documents / Database / Knowledge Base
                        ↓
                    Relevant text
                        ↓
                    LLM
                        ↓
                    Answer
                    </span>
                    For example:
You have:
company_policy.pdf
employee_handbook.pdf
leave_policy.pdf

User asks:
-> "How many casual leaves can I take?"
RAG searches your documents and finds:
-> "Employees are entitled to 12 casual leaves per year."
That information is then given to the LLM.
The LLM generates:
-> "According to the company leave policy, you are entitled to 12 casual leaves per year."

<b>>Where do vectors come in?</b>
This connects directly to what we discussed about vectors and embeddings.
The documents are first split into smaller pieces called chunks.
<span style="color:#ac4561">
PDF
 ↓
Chunks
 ↓
Embeddings
 ↓
Vectors
 ↓
Vector Database
</span>
For example:
<u>Chunk 1</u>:
"Employees are entitled to 12 casual leaves..."
<u>Chunk 2</u>:
"Employees can work remotely..."
<u>Chunk 3</u>:
"Medical insurance is provided..."

Each chunk is converted into an <b>embedding/vector</b>.
Then when the user asks:
-> "How many casual leaves do I get?"
The question is also converted into a vector.
The system performs similarity search to find the most relevant chunks.
<span style="color:#ac4561">
Question
   ↓
Embedding
   ↓
Vector similarity search
   ↓
Relevant chunks
   ↓
LLM
   ↓
Answer
</span>
<b>Why RAG is useful</b>
RAG is especially useful when your information is:
-> Private — company documents
-> Frequently changing — policies, prices, product information
-> Large — thousands of documents
-> Not known by the LLM — your own application's data

<b>A RAG system has roughly 6 important steps:</b>
<span style="color:#ac4561">
Documents
    ↓
1. Loading
    ↓
2. Chunking
    ↓
3. Embeddings
    ↓
4. Vector Database
    ↓
5. Retrieval
    ↓
6. LLM Generation
    ↓
Answer
</span>
<div style="font-family: monospace;
  white-space: pre;
  line-height: 1.4;
  max-width: 100%;
  overflow-x: auto;">
                         YOUR KNOWLEDGE
                               │
                 ┌─────────────┴─────────────┐
                 │                           │
              PDFs                       Database
              Docs                       Websites
                 │
                 ↓
              Chunking
                 ↓
             Embeddings
                 ↓
          ┌─────────────────┐
          │    Vector DB    │
          │                 │
          │  Chunks+Vectors │
          └────────┬────────┘
                   │
                   │ Retrieval
                   ↓
User → Question → Similarity Search
                         │
                         ↓
                  Relevant Chunks
                         │
                         ↓
                       LLM
                         │
                         ↓
                      Answer
</div>
`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "What is Chunking?",
            note: [
                {
                    text1: `Imagine you have a 100-page PDF.
We don't want to send the entire PDF to the LLM every time the user asks a question.
Instead, we split it into smaller pieces:

Then each chunk gets an embedding and is stored in a vector database.
When the user asks:
--> "How many casual leaves do employees get?"
RAG doesn't search the entire PDF.
It finds the chunks that are <b>semantically similar</b> to the question.
<span style="color:#ac4561">
Question
   ↓
Embedding
   ↓
Vector Search
   ↓
Most relevant chunks
   ↓
LLM
   ↓
Answer
</span>
<div style="font-family: monospace;
  white-space: pre;
  line-height: 1.4;
  max-width: 100%;
  overflow-x: auto;">
  Instead, we split it into smaller pieces:

  100-page PDF
     ↓
┌───────────────┐
│ Chunk 1       │
│ Introduction  │
└───────────────┘
┌───────────────┐
│ Chunk 2       │
│ Leave Policy  │
└───────────────┘
┌───────────────┐
│ Chunk 3       │
│ Insurance     │
└───────────────┘
        ...

So the connection between the concepts you've learned is:
                      RAG
               │
       ┌───────┴────────┐
       ↓                ↓
   Documents         User Query
       ↓                ↓
    Chunking         Embedding
       ↓                ↓
   Embeddings        Vector
       ↓                ↓
       └───────┬────────┘
               ↓
        Similarity Search
               ↓
        Relevant Chunks
               ↓
              LLM
               ↓
            Answer
</div>`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Chunking in RAG",
            note: [
                {
                    text1: `<b>Chunking</b> is the process of breaking a large document into <b>smaller pieces</b> (chunks) before creating embeddings and storing them in a vector database.
                    Chunking converts large documents into smaller meaningful pieces so RAG can retrieve the most relevant information instead of searching an entire document.

                    The basic RAG flow is:
                    <span style="color:#ac4561">
                    Documents
                    ↓
                    Chunking
                    ↓
                    Embeddings
                    ↓
                    Vector Database
                    ↓
                    User Question
                    ↓
                    Similarity Search
                    ↓
                    Relevant Chunks
                    ↓
                    LLM
                    ↓
                    Answer
                    </span>
                    Why do we need chunking?
    Imagine you have a <b>100-page PDF</b> containing:
                    <span style="color:#ac4561">
                    Page 1  → Introduction
                    Page 2  → Customer details
                    ...
                    Page 45 → Refund Policy
                    ...
                    Page 100 → Contact information
                    </span>
                    If we put the <b>entire PDF into one embedding</b>, the embedding represents too much information.
Suppose the user asks:
--> "What is the refund period?"
We want RAG to retrieve only the part containing the Refund Policy, not the entire 100-page document.
So we split it:
<span style="color:#ac4561">
PDF
 │
 ├── Chunk 1 → Introduction
 ├── Chunk 2 → Customer details
 ├── Chunk 3 → Payment Policy
 ├── Chunk 4 → Refund Policy
 ├── Chunk 5 → Cancellation Policy
 └── ...
 </span>
 Each chunk gets its <b>own embedding</b>.

<b>Example</b>
<span style="color:#ac4561">
Suppose the document contains:
Our company provides a 30-day refund policy.

Customers can request a refund within 30 days
of purchasing the product.

Refunds are processed within 5 business days.

Customers must provide their order ID when
requesting a refund.
</span>
We could split this into chunks:
<span style="color:#ac4561">
Chunk 1:
Our company provides a 30-day refund policy.
Chunk 2:
Customers can request a refund within 30 days
of purchasing the product.
Chunk 3:
Refunds are processed within 5 business days.
Chunk 4:
Customers must provide their order ID when
requesting a refund.
</span>
Then:
<span style="color:#ac4561">
Chunk 1 → Embedding → Vector
Chunk 2 → Embedding → Vector
Chunk 3 → Embedding → Vector
Chunk 4 → Embedding → Vector
</span>
When the user asks:
--> "How many days can I request a refund?"
The vector search may find:
Chunk 1
Chunk 2

Those chunks are then sent to the LLM.
<b>Chunk Size</b>
Chunking isn't simply "split every 100 words."
We need to choose an appropriate chunk size.

For example:
<span style="color:#ac4561">
Small chunks
    ↓
50 tokens

Medium chunks
    ↓
300 tokens

Large chunks
    ↓
1000 tokens
</span>
A common starting point is around <b>200–500 tokens</b>, but the best size depends on the document and retrieval task.
<b>The problem with very small chunks</b>
Suppose:
<span style="color:#ac4561">
Chunk 1:
The refund period is

Chunk 2:
30 days from the date of purchase.
</span>
The meaning is split.
Retrieving only Chunk 1 gives:
--> "The refund period is..."
Not enough information.

<b>The problem with very large chunks</b>
Suppose we have:
<span style="color:#ac4561">
Chunk 1
--------------------------------
Customer information
Payment
Refund
Cancellation
Shipping
Terms
Privacy
Contact
--------------------------------
</span>
The chunk contains too many unrelated topics.
Retrieval becomes less precise.

<b>Overlap</b>
This is where chunk overlap becomes important.
Instead of:
<span style="color:#ac4561">
Chunk 1:
A B C D E F
Chunk 2:
G H I J K L

we can use:
Chunk 1:
A B C D E F
Chunk 2:
E F G H I J
Chunk 3:
I J K L M N

Here:
Overlap = E F
</span>
The overlapping content helps prevent important information from being cut between chunks.
For example:
<span style="color:#ac4561">Chunk 1:
Customers can request a refund within 30
Chunk 2:
within 30 days of purchasing the product.
</span>
The phrase "within 30 days" exists in both chunks.

<b>Different Chunking Strategies</b>
<b>1. Character-based chunking</b>
Simply split based on number of characters.
Every 1000 characters
Simple, but it may break sentences.

<b>2. Token-based chunking</b>
Split based on tokens.
Chunk size = 500 tokens
Overlap = 50 tokens
This is often more useful for LLM applications.

<b>3. Sentence-based chunking</b>
Split at sentence boundaries.
Sentence 1
Sentence 2
Sentence 3
   ↓
Chunk
This preserves meaning better than arbitrary character splitting.

<b>4. Paragraph-based chunking</b>
Use paragraphs as natural boundaries.
Paragraph 1
Paragraph 2
Paragraph 3
This works well for many documents.

<b>5. Semantic chunking</b>
This is more advanced.
Instead of asking:
--> "How many characters?"

we ask:
"Which sentences are talking about the same concept?"

For example:
<span style="color:#ac4561"> Customer Registration
        ↓
Name
Email
Phone
Address
        ↓
Payment
        ↓
Credit Card
UPI
Net Banking
</span>
The system creates chunks based on <b>meaning</b>, rather than just size.
<b>Very important concept</b>
Think of chunking like <b>cutting a book into useful pieces.</b>

Then when the user asks a question:<span style="color:#ac4561"> 
Question
   ↓
Embedding
   ↓
Vector Search
   ↓
Most similar chunks
   ↓
LLM
   ↓
Answer</span>
<div style="font-family: monospace;
  white-space: pre;
  line-height: 1.4;
  max-width: 100%;
  overflow-x: auto;">
             DOCUMENT
                 │
                 ↓
              CHUNKING
                 │
        ┌────────┼────────┐
        ↓        ↓        ↓
     Chunk 1  Chunk 2  Chunk 3
        │        │        │
        ↓        ↓        ↓
    Embedding Embedding Embedding
        │        │        │
        └────────┼────────┘
                 ↓
          Vector Database
</div>

                    `,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: "Vector Databases",
            title: "Vectors in LLM and AI",
            note: [
                {
                    text1: `In AI and Large Language Models, a vector is simply an ordered list of numbers (an array) that represents the <b>meaning</b> or <b>features</b> of a piece of data—such as a word, sentence, image, or audio file—in a high-dimensional mathematical space.
                    
                    Vectors are the fundamental bridge that allows computers to perform math and logic on human concepts like language, emotions, and objects.

                    In LLM/AI, a vector is a list of numbers that represents something in a mathematical space.
                    The important idea is:
<b>AI converts text, images, audio, etc. into vectors so that it can mathematically compare their meaning or characteristics.</b>

<b>First, what is a vector in mathematics?</b>
You may already know vectors from mathematics:
V=[3,4]
This vector has two dimensions:
X = 3
Y = 4

You can represent a point:

       Y
       ↑
       |
       |     &nbsp; &nbsp; &nbsp;  ● (3,4)
       |
       +----------------→ X
                    

       In AI, the same mathematical concept is used, but instead of 2 or 3 dimensions, we can have <b>hundreds or thousands</b> of dimensions.

For example:
[0.21, -0.73, 0.45, 0.12, ...]
That could be a vector representing a piece of text.
<b>What does a vector represent in AI?</b>
Suppose we have these sentences:
"I love dogs"

"I like puppies"

"I work with databases"

An AI embedding model can convert them into vectors:
"I love dogs"
      ↓
[0.21, 0.83, -0.14, 0.55, ...]

"I like puppies"
      ↓
[0.19, 0.79, -0.11, 0.51, ...]

"I work with databases"
      ↓
[-0.72, 0.13, 0.91, -0.44, ...]

The actual numbers are generated by the model.
The interesting part is that the first two vectors will generally be closer to each other than either is to the database sentence.
So AI can understand something like:
<b>"I love dogs"       ← close →       "I like puppies"


                  far away


"I work with databases"</b>

                    <b>What is a Vector Embedding?</b>
When people talk about vectors in AI, they are usually referring to vector embeddings.
Computers cannot understand words like <b>"apple"</b> or <b>"king"</b> directly; they only understand numbers. To solve this, an AI model (an embedding model) converts data into a vector.

<b>High-Dimensional Space</b>: Each number in the vector represents a specific hidden feature or characteristic learned by the model (e.g., <b>Is it alive? Is it edible? Is it formal?</b>). Modern LLMs use vectors with hundreds or thousands of dimensions (e.g., 1,536 dimensions for OpenAI's text-embedding-3-small).

`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Vector Database",
            note: [
                {
                    text1: `A <b>Vector Database</b> is a database designed to store and search <b>vectors (embeddings)</b> efficiently.
                    Vector Databases are especially important for <b>RAG</b>.

                    Vector databases are specialized data stores designed to handle high-dimensional vectors efficiently. In the context of AI and Large Language Models (LLMs), they serve as the long-term memory, enabling systems to perform tasks like semantic search, recommendation, and Retrieval-Augmented Generation (RAG).

                    <b>Why Vector Databases are Essential for LLMs</b>
    <b>Knowledge Limitations</b>: LLMs are trained on static datasets with a fixed cutoff date and lack domain-specific or private data.
    <b>Context Windows</b>: While context windows are expanding, passing an entire enterprise database or document repository into every prompt is computationally inefficient and expensive.
    <b>Semantic Understanding</b>: Traditional databases search using exact keyword matches. Vector databases understand meaning, retrieving relevant information even if the exact words differ.
                    
    <b>Why do we need a Vector Database?</b>
Suppose you have 10,000 PDF documents containing information about your company.
A user asks:
"What is our employee leave policy?"
We don't want to send all 10,000 documents to the LLM.
Instead:
<span style="color:#ac4561"> PDF Documents
     ↓
   Chunking
     ↓
  Embeddings
     ↓
   Vectors
     ↓
Vector Database
</span>
When the user asks a question:
<span style="color:#ac4561">  User Question
     ↓
Question Embedding
     ↓
Vector Database
     ↓
Find similar chunks
     ↓
Relevant Context
     ↓
LLM
     ↓
Answer
</span> That's the core of RAG.

<b>What exactly is stored?</b>
Suppose we have this text:
"Employees are entitled to 20 days of annual leave."
An embedding model converts it into something like:
[0.21, -0.45, 0.78, 0.12, ...]
In reality, the vector could have hundreds or thousands of dimensions.
The database stores something conceptually like:
<span style="color:#ac4561">  ID: 101
Text:
"Employees are entitled to 20 days of annual leave."
Vector:
[0.21, -0.45, 0.78, 0.12, ...]
</span>
Usually, you also store <b>metadata</b>:
<span style="color:#ac4561"> {
    "document": "employee_policy.pdf",
    "page": 12,
    "department": "HR",
    "text": "Employees are entitled to 20 days of annual leave."
}</span>

<b>How does searching work?</b>
Suppose the user asks:
"How many vacation days can an employee take?"

The question is converted into an embedding:
"How many vacation days can an employee take?"
                ↓
[0.19, -0.41, 0.75, 0.15, ...]

The Vector Database compares this vector with stored vectors.
It may find:
Similarity Score<span style="color:#ac4561">
Annual leave policy       0.94
Employee benefits         0.82
Work from home policy     0.31
Salary policy             0.18</span>
So it returns:
Annual leave policy
The important concept is:
Vector databases search based on semantic similarity rather than simply matching exact words.

For example:
"vacation days"
and
"annual leave entitlement"
can be recognized as semantically related even though the words are different.

<b>Vector Database vs Normal Database</b>
A normal database is excellent for structured queries:
<span style="color:#ac4561">
SELECT *
FROM employees
WHERE department = 'HR';</span>

A vector database is designed for similarity searches:
<span style="color:#ac4561">Find documents whose meaning is most similar
to:
"What is the employee vacation policy?"</span>

Think of it like this:
Database	Best for
PostgreSQL	Structured data
MySQL	Structured data
MongoDB	Documents
Vector DB	Semantic similarity
Redis	Caching + various data structures
Elasticsearch	Search + text/vector search
Modern databases such as PostgreSQL with pgvector can also perform vector search, so you don't always need a dedicated vector database.

Vector DB <b>Semantic similarity</b>

<b>Popular Vector Databases</b>
You'll commonly encounter:
=> Pinecone
=> Chroma
=> Weaviate
=> Milvus
=> Qdrant
=> FAISS
=> pgvector

For your learning journey, I recommend starting with:
<b>Beginner</b>
Chroma
Very easy to understand locally.
<b>Next
FAISS</b>
Excellent for understanding vector similarity/search fundamentals.
Production
Learn:
<b>Qdrant / Pinecone / Weaviate / pgvector</b>
You don't need to master all of them. Understanding the concepts is more important.

LangChain can help connect these components.
For example:
<span style="color:#ac4561"> PDF
 ↓
Document Loader
 ↓
Text Splitter
 ↓
Embedding Model
 ↓
Vector Store
 ↓
Retriever
 ↓
LLM</span>
<div style="font-family: monospace;
  white-space: pre;
  line-height: 1.4;
  max-width: 100%;
  overflow-x: auto;">    
                YOUR KNOWLEDGE
                     │
          ┌──────────┴──────────┐
          │                     │
        PDFs                Database
        Docs                Websites
          │
          ↓
       Chunking
          ↓
      Embeddings
          ↓
        Vectors
          ↓
   Vector Database
          │
          ↓
       Retriever
          │
          ↓
        LangChain
          │
          ↓
         LLM
          │
          ↓
        Answer
        </div>
`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Vector vs Embedding",
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
            section: "Ollama",
            title: "Ollama",
            note: [
                {
                    text1: `<b>Ollama + LangChain Setup</b>
<b>1. Install Ollama</b>
On Ubuntu, we installed Ollama using Snap:
<span style="color:#ac45ac"> sudo snap install ollama </span>
Verify:
<span style="color:#ac45ac">ollama --version</span>

<b>2. Start Ollama</b>
Your Snap installation automatically provides an Ollama service.
Check:
<span style="color:#ac45ac"> snap services ollama </span>
You should see:
<span style="color:#ac45ac"> Service          Startup  Current  Notes
ollama.listener  enabled  active   - </span>
<b>Important</b>
Because the Snap service is already running, don't manually run:
<span style="color:#ac45ac"> ollama serve </span>
If you do, you may see:
bind: address already in use
That simply means port 11434 is already being used by Ollama.

<b>3. Download Llama 3.2</b>
Run:
<span style="color:#ac45ac"> ollama pull llama3.2 </span>
Verify:
<span style="color:#ac45ac"> ollama list </span>
You should see something similar to: <span style="color:#ac45ac">
NAME               ID              SIZE
llama3.2:latest    a80c4f17acd5    2.0 GB </span>
Your model is: <span style="color:#ac45ac">
Llama 3.2
3.2B parameters
Q4_K_M quantization </span>

<b>4. Test Ollama Directly</b>
Before connecting LangChain, we tested the model directly:
<span style="color:#ac45ac"> ollama run llama3.2 </span>

You'll get:
>>>
Then type:
Say hello.
Example:
>>> Say hello.
Hello.
You can also test:
>>> how are you
and Llama will respond.
This confirms:
<span style="color:#ac45ac">
Ollama       ✅
Llama 3.2    ✅
LLM inference ✅ </span>

<b>5. Test Ollama API</b>
We also checked that the Ollama API was available:
<span style="color:#ac45ac"> curl http://localhost:11434/api/tags </span>
This returned information about:
<span style="color:#ac45ac"> llama3.2:latest </span>
This confirms that Ollama is running on:
<span style="color:#ac45ac"> localhost:11434</span>

<b>6. Install LangChain</b>
From your project directory:
<span style="color:#ac45ac"> cd ~/project/python/LangChain </span>
Install:
<span style="color:#ac45ac">pip install langchain langchain-ollama</span>
We successfully installed: <span style="color:#ac45ac">
langchain       0.2.17
langchain-core  0.2.43
langchain-ollama 0.1.3 </span>

<b>7. Create the Python Program</b>
Create:
test_chain.py
Add:
<span style="color:#ac45ac">from langchain_core.prompts import ChatPromptTemplate
from langchain_ollama import ChatOllama
from langchain_core.output_parsers import StrOutputParser

# 1. Create Prompt
prompt = ChatPromptTemplate.from_template(
    "Explain {topic} in simple words."
)

# 2. Create LLM
model = ChatOllama(
    model="llama3.2"
)

# 3. Create Output Parser
parser = StrOutputParser()

# 4. Create LCEL Chain
chain = prompt | model | parser

# 5. Execute Chain
result = chain.invoke({
    "topic": "Vector Database"
})

# 6. Print Result
print(result) </span>

<b>8. Run the Program</b>
Run: <span style="color:#ac45ac"> python3 test_chain.py </span>
Your Llama 3.2 model generated the explanation of Vector Database successfully.
So our application is:
            <span style="color:#ac45ac">  Python Program
                    │
                    ▼
            ChatPromptTemplate
                    │
                    ▼
                   \`|\`
                    │
                    ▼
              ChatOllama
                    │
                    ▼
               Llama 3.2
                    │
                    ▼
                   \`|\`
                    │
                    ▼
             StrOutputParser
                    │
                    ▼
               Final Answer </span>

<b>9. What We Learned </b>
This one program introduced several important LangChain concepts.
<b>Prompt Template</b>
<span style="color:#ac45ac"> prompt = ChatPromptTemplate.from_template(
    "Explain {topic} in simple words."
) </span>
<i>{topic}</i> is a variable.
We provide its value here:
{
    "topic": "Vector Database"
}
<b>Model</b>
<span style="color:#ac45ac"> model = ChatOllama(
    model="llama3.2"
) </span>
This tells LangChain:
Use the locally running Ollama Llama 3.2 model.
<b>Output Parser</b>
<span style="color:#ac45ac">  parser = StrOutputParser() </span>
The LLM returns an <b>AIMessage</b>.
The parser extracts the actual text from that response.
Conceptually:
<span style="color:#ac45ac"> AIMessage
    ↓
StrOutputParser
    ↓
String </span>

<b> 10. LCEL</b>
This is the most important line:
<span style="color:#ac45ac">  chain = prompt | model | parser </span>
This is LCEL — LangChain Expression Language.
The <b>|</b> means:

Output of A → Input of B
Therefore:
<span style="color:#ac45ac">  prompt | model | parser </span>
means:
<span style="color:#ac45ac">  Prompt
  ↓
Model
  ↓
Parser </span>

<b>11. Runnable</b>
Each component participates in the Runnable pipeline:
<span style="color:#ac45ac">  ChatPromptTemplate
       ↓
    Runnable

ChatOllama
       ↓
    Runnable

StrOutputParser
       ↓
    Runnable </span>
And the entire chain is also executable:
<span style="color:#ac45ac"> chain.invoke(...) </span>

<a href="https://github.com/anand-developer01/python-programs/tree/main/LangChainOllama/JSONSubjectNotesAgent" target="_blank">JSON file containing your subject notes AI agent</a>`,
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