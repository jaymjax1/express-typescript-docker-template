import { ModelType, ModelConfig } from '../../core/types/LanguageModelTypes';
import { ILanguageModel } from '../../core/interfaces/ILanguageModel';
import { OpenAIAdapter, AnthropicAdapter } from './adapters';

export class LanguageModelFactory {
  static createModel(config: ModelConfig): ILanguageModel {
    switch (config.type) {
      case ModelType.OPENAI:
        return new OpenAIAdapter(config);
      case ModelType.ANTHROPIC:
        return new AnthropicAdapter(config);
      case ModelType.LLAMA:
        // return new LlamaAdapter(config);
        throw new Error('Llama adapter not implemented');
      default:
        throw new Error(`Unsupported model type: ${config.type}`);
    }
  }
}
