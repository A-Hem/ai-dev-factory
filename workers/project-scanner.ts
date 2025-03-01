typescript
class ProjectScannerWorker implements MCPWorker {
  readonly supportedTasks = ['project-scan', 'dependency-analysis'];
  
  async processMessage(msg: ProjectScanTask): Promise<MCPMessage> {
    try {
      const result = await this.scanProject(msg.content.paths);
      
      return {
        ...msg,
        content: result,
        metadata: {
          ...msg.metadata,
          status: 'completed',
          processedAt: Date.now()
        }
      };
    } catch (error) {
      return this.handleScanError(error, msg);
    }
  }

  private async scanProject(paths: string[]): Promise<ProjectScanResult> {
    const scanner = new MCPProjectScanner({
      detectNested: true,
      maxDepth: 5,
      signatureFiles: [
        'package.json',
        'requirements.txt',
        'pom.xml',
        '*.csproj'
      ]
    });
    
    return scanner.scanPaths(paths);
  }

  private handleScanError(error: Error, originalMsg: ProjectScanTask): MCPMessage {
    return {
      ...originalMsg,
      content: {
        error: error.message,
        stack: error.stack,
        retryable: true
      },
      metadata: {
        ...originalMsg.metadata,
        status: 'failed',
        retries: originalMsg.metadata.retries + 1
      }
    };
  }
}
```

