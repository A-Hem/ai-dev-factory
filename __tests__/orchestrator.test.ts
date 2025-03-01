import { MCPOrchestrator } from '../core/orchestrator';
import { MCPClient, MCPMessage } from '../messages/types';

describe('MCPOrchestrator', () => {
  let orchestrator: MCPOrchestrator;
  let mockClient: MCPClient;

  beforeEach(() => {
    mockClient = {
      onMessage: jest.fn(),
      getContext: jest.fn().mockResolvedValue({}),
      sendToAI: jest.fn().mockResolvedValue({ content: '[]' }),
      emitMessage: jest.fn().mockResolvedValue({})
    } as unknown as MCPClient;
    orchestrator = new MCPOrchestrator(mockClient);
  });

  it('should handle new requests', async () => {
    const msg: MCPMessage = {
      metadata: {
        taskId: '1',
        taskType: 'scan',
        status: 'pending',
        retries: 0,
        dependencies: []
      },
      content: {}
    };

    await orchestrator.handleNewRequest(msg);

    expect(mockClient.getContext).toHaveBeenCalled();
    expect(mockClient.sendToAI).toHaveBeenCalled();
  });
});
