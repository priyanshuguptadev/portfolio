export const b1 = `
## How [OpenSlop](https://openslop.priyanshugupta.space) Works?

OpenSlop is an open source, free, no vendor lock-in and multi plateform terminal coding agent that can be used to write code, run code and debug code. It is built on top of the OpenAI API and is designed to be easy to use and extendable.

In this blog post, we will see how OpenSlop and other terminal coding agents work technically. We will discuss the tools and tech stack used to build OpenSlop, how it interacts with the OpenAI API, and how it can be extended to support new features and capabilities. But before that, let's briefly understand what Large Language Models (LLMs) are and how they work.

### What are Large Language Models (LLMs)?

Imagine a large language as a mathematical probability model which takes in a sequence of tokens (words, characters, or subwords) and predicts the next token in the sequence. Then this next token is added to the sequence and the process is repeated until a complete response is generated.

### What is an agent?

The LLM itself is limited to generate text based on input it recieves and can not perform any action (e.g. run code, access files, etc.). This is where agents come in - they act as a bridge between the LLM and the external world, allowing the LLM to perform actions and access resources using tools.

Here is more academic definition of an agent:

> AI agents (also referred to as compound AI systems or agentic AI) are a class of intelligent agents distinguished by their ability to operate autonomously in complex environments.
Source: [Wikipedia](https://en.wikipedia.org/wiki/AI_agent)

## What are tools?

In simple words, tools are functions that an agent can call to perform specific tasks e.g. reading a file, writing into file, etc.

Below is a simple JS code snippet that defines a tool for reading a file: Please note that the example is simplified just to illustrate the concept of tools to variety of readers.
\`\`\`javascript
const fs = require('fs'); // Node.js file system module

function readFile(filePath) { // This function reads the content of a file and returns it as a string
  return fs.readFileSync(filePath, 'utf-8'); // Read the file synchronously and return its content
}
\`\`\`

### How does OpenSlop or other terminal coding agents work?

Now that we have a basic understanding of LLMs, agents and tools, let's see how OpenSlop works technically.

OpenSlop is built in Node.js and uses a bunch of tools i.e. read_file, write_file, run_command, etc. to interact with the terminal and perform various tasks. It also uses the OpenAI API to generate responses based on user input and the context of the conversation.

When a user interacts with OpenSlop, the following steps occur:

1. The user inputs a command or query into the terminal.
2. The user query is sent to the LLM through the OpenAI API, along with the context of the conversation if any.
3. The LLM processes the input and generates a response, which may include instructions to call specific tools.
4. If the response includes tool calls, OpenSlop executes the corresponding functions (tools) to perform the required actions (e.g., reading a file, running a command).
5. The results from the tool executions are then sent back to the LLM for further processing if needed, and the final response is displayed to the user.

![Diagram illustrating the flow of information in OpenSlop](/openslop-arch.png)

I hope this gives you a foundational understanding of coding agents. If you are a developer and contributer then you can help us build OpenSlop by contributing to the project on GitHub. We are always looking for new contributors to help us improve and expand OpenSlop's capabilities. You can find the repository [here](https://github.com/priyanshuguptadev/openslop)

### For Technical Readers

The project [openslop](https://github.com/priyanshuguptadev/openslop) is a monorepo that contains multiple packages and apps built using [Turborepo](https://turborepo.dev) and [Bun](https://bun.com).

The main packages in the monorepo are:

- [agent](https://github.com/priyanshuguptadev/openslop/tree/main/packages/agent): This package contains the core logic for the agent, including the implementation of tools and the interaction with the OpenAI API.
- [config](https://github.com/priyanshuguptadev/openslop/tree/main/packages/config): This package manages the configuration file (.openslop/config.json) for OpenSlop. The .openslop/config.json file is used to store three important pieces of information: the OpenAI API key, the model to be used, and the base url for the OpenAI API. This allows users to easily configure their OpenSlop instance without having to modify the code.

The apps in the monorepo are:
- [tui](https://www.npmjs.com/package/@openslop/openslop): This is an ink app that provides a terminal user interface for OpenSlop, allowing users to interact with the agent through the terminal.
- [landing](https://openslop.priyanshugupta.space): This is a Next.js app that serves as the landing page for OpenSlop, providing information about the project and how to get started.
- [docs](https://docs.openslop.priyanshugupta.space): This is a Nextra app that serves the documentation for OpenSlop, providing detailed information about how to use.


The project is structured in a way that allows for easy extension and addition of new tools and features. Each tool is defined as a separate function, and the agent can call these functions based on the instructions generated by the LLM.

Thank you for reading.


`;
