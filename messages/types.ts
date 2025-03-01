typescript
interface BaseTaskMessage extends MCPMessage {
  metadata: {
    taskId: string;
    parentTask?: string;
    taskType: 'scan' | 'validate' | 'learn' | 'decompose';
    status: 'pending' | 'running' | 'completed' | 'failed';
    retries: number;
    dependencies: string[];
  };
}

interface ProjectScanTask extends BaseTaskMessage {
  content: {
    operation: 'find-boundaries' | 'detect-dependencies';
    paths: string[];
  };
}

interface CommandValidationTask extends BaseTaskMessage {
  content: {
    rawCommand: string;
    context: {
      os: string;
      shell: string;
      currentDir: string;
    };
  };
}

interface KnowledgeTask extends BaseTaskMessage {
  content: {
    errorPattern: string;
    observedBehavior: string[];
  };
}

type OrchestrationMessage = 
  | ProjectScanTask
  | CommandValidationTask
  | KnowledgeTask;