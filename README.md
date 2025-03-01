
[![Generate Structure](https://github.com/A-Hem/mcp-orchestrator/actions/workflows/generate-structure.yml/badge.svg)](https://github.com/A-Hem/mcp-orchestrator/actions/workflows/generate-structure.yml)



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
<br>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<br>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<br>
<br>
 <H4>Example Workflow Execution</H4>
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