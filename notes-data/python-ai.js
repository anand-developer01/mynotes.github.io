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