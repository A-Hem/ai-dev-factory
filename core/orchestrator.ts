typescript
class MCPOrchestrator {
  private workers = new Map<string, MCPWorker>();
  private taskQueue = new PriorityQueue();
  private activeTasks = new Set<string>();
  private completedTasks = new Map<string, MCPMessage>();
  private taskDependencies = new Map<string, string[]>();

  constructor(private mcpClient: MCPClient) {
    this.registerDefaultWorkers();
    this.setupMessageHandlers();
  }

  private registerDefaultWorkers() {
    this.registerWorker('project-scan', new ProjectScannerWorker());
    this.registerWorker('command-validate', new CommandValidatorWorker());
    this.registerWorker('knowledge', new KnowledgeWorker());
  }

  registerWorker(taskType: string, worker: MCPWorker) {
    this.workers.set(taskType, worker);
  }

  private setupMessageHandlers() {
    this.mcpClient.onMessage(async (msg: MCPMessage) => {
      if (this.isTaskMessage(msg)) {
        await this.handleTaskMessage(msg as OrchestrationMessage);
      } else {
        await this.handleNewRequest(msg);
      }
    });
  }

  private async handleNewRequest(msg: MCPMessage) {
    const decomposition = await this.decomposeTask(msg);
    this.queueTasks(decomposition);
  }

  private async decomposeTask(msg: MCPMessage): Promise<OrchestrationMessage[]> {
    const context = await this.mcpClient.getContext(msg);
    
    const aiResponse = await this.mcpClient.sendToAI({
      ...msg,
      metadata: {
        ...msg.metadata,
        decomposition: true,
        context
      }
    });

    return this.parseDecomposition(aiResponse.content);
  }

  private queueTasks(tasks: OrchestrationMessage[]) {
    tasks.forEach(task => {
      this.taskQueue.enqueue(task, task.metadata.priority);
      this.trackDependencies(task);
    });
    this.processQueue();
  }

  private async processQueue() {
    while (!this.taskQueue.isEmpty()) {
      const task = this.taskQueue.dequeue();
      
      if (this.canExecute(task)) {
        this.activeTasks.add(task.metadata.taskId);
        const worker = this.workers.get(task.metadata.taskType);
        
        if (worker) {
          const result = await worker.processMessage(task);
          await this.handleTaskResult(result);
        }
      }
    }
  }

  private async handleTaskResult(result: MCPMessage) {
    this.activeTasks.delete(result.metadata.taskId);
    
    if (result.metadata.status === 'completed') {
      this.completedTasks.set(result.metadata.taskId, result);
      await this.mcpClient.emitMessage(result);
      
      // Trigger dependent tasks
      const dependents = this.taskDependencies.get(result.metadata.taskId) || [];
      dependents.forEach(taskId => {
        const task = this.taskQueue.find(taskId);
        if (task) this.taskQueue.enqueue(task, task.metadata.priority);
      });
    } else if (result.metadata.retries < MAX_RETRIES) {
      this.taskQueue.enqueue(result, result.metadata.priority);
    }
  }
}


