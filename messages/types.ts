/**
 * Base interface for all task messages.
 */
interface BaseTaskMessage extends MCPMessage {
  metadata: {
    /**
     * Unique identifier for the task.
     */
    taskId: string;
    /**
     * Optional identifier for the parent task.
     */
    parentTask?: string;
    /**
     * Type of the task.
     */
    taskType: 'scan' | 'validate' | 'learn' | 'decompose';
    /**
     * Current status of the task.
     */
    status: 'pending' | 'running' | 'completed' | 'failed';
    /**
     * Number of retries attempted for the task.
     */
    retries: number;
    /**
     * List of task dependencies.
     */
    dependencies: string[];
  };
}

/**
 * Interface for project scan tasks.
 */
interface ProjectScanTask extends BaseTaskMessage {
  content: {
    /**
     * Operation to be performed in the project scan task.
     */
    operation: 'find-boundaries' | 'detect-dependencies';
    /**
     * List of paths to be scanned.
     */
    paths: string[];
  };
}

/**
 * Interface for command validation tasks.
 */
interface CommandValidationTask extends BaseTaskMessage {
  content: {
    /**
     * Raw command to be validated.
     */
    rawCommand: string;
    /**
     * Context in which the command is executed.
     */
    context: {
      /**
       * Operating system of the context.
       */
      os: string;
      /**
       * Shell used in the context.
       */
      shell: string;
      /**
       * Current directory in the context.
       */
      currentDir: string;
    };
  };
}

/**
 * Interface for knowledge tasks.
 */
interface KnowledgeTask extends BaseTaskMessage {
  content: {
    /**
     * Pattern of the error observed.
     */
    errorPattern: string;
    /**
     * List of observed behaviors.
     */
    observedBehavior: string[];
  };
}

/**
 * Union type for all orchestration messages.
 */
type OrchestrationMessage = 
  | ProjectScanTask
  | CommandValidationTask
  | KnowledgeTask;