import {
  ILanguageModel,
  LanguageModelResponse,
  ModelOptions,
} from '../../../core/interfaces/ILanguageModel';

export class MockAIAdapter implements ILanguageModel {
  async generate(_prompt: string, _options?: ModelOptions): Promise<LanguageModelResponse> {
    return {
      text: 'Mock response',
      usage: {
        promptTokens: 0,
        completionTokens: 0,
        totalTokens: 0,
      },
    };
  }

  async embedText(_text: string): Promise<number[]> {
    return [0, 0, 0];
  }

  async moderateContent(_text: string): Promise<boolean> {
    return false;
  }

  async tokenize(_text: string): Promise<string[]> {
    return ['mock', 'tokens'];
  }
}
