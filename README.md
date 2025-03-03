[![Generate Structure](https://github.com/A-Hem/mcp-orchestrator/actions/workflows/generate-structure.yml/badge.svg)](https://github.com/A-Hem/mcp-orchestrator/actions/workflows/generate-structure.yml)

# MCP Orchestrator

## Overview (I'm forking and building some speculative experimentations and simplified examples, will be a work in progress as the self sufficient ai transforms into a living organism....) 

The MCP Orchestrator is the core logic for a modular preprocessor context compression system designed for agent knowledge graph tasks using an extensible architecture. The idea is to leverage it's logic and components to extract max value to and from MCP apis, ai models, and existing knowledge graph, caching, and context preprocessing, compression & optimize task execution, identify and nurture novel ideas. .

## Project Structure

### Directories   structure.md

- **core**: Contains the main orchestrator logic.
- **services**: Contains various services used by the orchestrator.
- **workers**: Contains worker classes for different tasks.
- **data**: Contains local data files used by the knowledge graph service.

### Files

- **core/orchestrator.ts**: Main orchestrator logic.
- **services/cacheService.ts**: Cache service for storing and retrieving cached data.
- **services/knowledgeGraphService.ts**: Knowledge graph service for managing and querying the knowledge graph.
- **services/contextPreprocessor.ts**: Service for preprocessing and compressing context data.
- **workers/localDataWorker.ts**: Worker for processing local datasets.
- **workers/staticAnalysisWorker.ts**: Worker for performing static code analysis.
- **workers/dependencyCheckerWorker.ts**: Worker for checking dependencies.
- **workers/innovationSuggestionWorker.ts**: Worker for suggesting innovative features or improvements.
- **data/dbpedia_data.json**: Sample DBpedia data file.
- **data/conceptnet_data.json**: Sample ConceptNet data file.
- **package.json**: Node.js project configuration and dependencies.
- **requirements.txt**: Python dependencies (if any).
- **structure.md**: Project structure documentation.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/mcp-orchestrator.git
   cd mcp-orchestrator
   ```

2. Install Node.js dependencies:
   ```bash
   npm install
   ```

3. Build the project:
   ```bash
   npm run build
   ```

4. Run linting:
   ```bash
   npm run lint
   ```

5. Run tests:
   ```bash
   npm run test
   ```

## Usage

To start the orchestrator, run:
```bash
npm start
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

"Dev Context" MCP-native orchestrator core:


## MCP-Integrated Orchestrator Architecture


Key Integrations with MCP:

1. **Native Message Extensions**
- Added orchestration metadata to existing MCP messages
- Maintain backward compatibility with vanilla MCP clients
- Use MCP's existing context propagation mechanisms

2. **Worker Ecosystem**
- Project Scanner uses MCP's file access permissions
- Command Validator respects MCP's security policies
- Knowledge Graph builds on MCP's existing context stores

3. **AI Decomposition**
- Uses MCP's existing AI channels with special decomposition markers
- Maintains MCP's privacy and security constraints
- Leverages MCP's context caching mechanisms

4. **Feedback Integration**
#example ```typescript
class MCPFeedback extends MCPClient {
  async submitFeedback(
    originalMessage: MCPMessage,
    effectiveness: number
  ): Promise<void> {
    await this.sendMessage({
      role: 'feedback',
      content: JSON.stringify({ effectiveness }),
      metadata: {
        referenceId: originalMessage.metadata?.messageId,
        context: originalMessage.metadata?.devContext
      }
    });
  }
}
```

Implementation Roadmap:

1. **Phase 1: Core Orchestrator**
- Implement MCP message extensions
- Build basic task decomposition
- Create worker API surface

2. **Phase 2: Context-Aware Routing**
- Integrate with DevContext modules
- Add MCP permission checks
- Implement priority queueing

3. **Phase 3: Feedback Integration**
- Add MCP feedback message type
- Connect to knowledge graph
- Implement auto-improvement loops

4. **Phase 4: Advanced Features**
- Cross-session context sharing
- Multi-agent collaboration
- Performance optimization

This approach gives us several advantages:

1. **Incremental Adoption** - Adopt orchestrator features gradually

2. **Context Preservation** - Full MCP context available at every stage

3. **Security Inheritance** - Leverages MCP's existing security model

4. **Protocol Synergy** - Workers benefit from MCP's existing ecosystem
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 Example Workflow Execution
```typescript
// Bootstrap the system
const mcpClient = new MCPClient();
const orchestrator = new MCPOrchestrator(mcpClient);

// Send initial request
mcpClient.sendMessage({
  role: 'user',
  content: 'Why does npm install fail in my project?',
  metadata: {
    sessionId: '123',
    context: {
      currentDir: '/projects/mixed-app',
      os: 'linux'
    }
  }
});

// Worker responses will flow through the orchestrator
mcpClient.onMessage(msg => {
  if (msg.metadata?.taskType === 'project-scan') {
    console.log('Scan result:', msg.content);
  }
  
  if (msg.metadata?.status === 'completed') {
    console.log('Task completed:', msg.metadata.taskId);
  }
});
```