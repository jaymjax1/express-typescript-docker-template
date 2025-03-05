import { ILanguageModel } from '../../core/interfaces/ILanguageModel';
import { ModelConfig } from '../../core/types/LanguageModelTypes';
import { MockAIAdapter } from './adapters/MockAIAdapter';

export class MockLanguageModelFactory {
  static createModel(_config: ModelConfig): ILanguageModel {
    return new MockAIAdapter();
  }
}
