import { MCPWorker, MCPMessage } from '../core/types';
import { exec } from 'child_process';

export class DependencyCheckerWorker implements MCPWorker {
  /**
   * Process a message to check for missing or outdated dependencies.
   * @param msg - The message to process.
   * @returns A promise that resolves with the processed message.
   */
  async processMessage(msg: MCPMessage): Promise<MCPMessage> {
    return new Promise((resolve, reject) => {
      exec('npm outdated', (error, stdout, stderr) => {
        if (error) {
          return reject({
            ...msg,
            metadata: {
              ...msg.metadata,
              status: 'failed',
              error: stderr
            }
          });
        }

        resolve({
          ...msg,
          metadata: {
            ...msg.metadata,
            status: 'completed'
          },
          content: stdout
        });
      });
    });
  }
}
