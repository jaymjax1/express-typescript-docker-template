import { ModelOptions } from '../interfaces/ILanguageModel';

export enum ModelType {
  OPENAI = 'openai',
  ANTHROPIC = 'anthropic',
  LLAMA = 'llama',
  HUGGINGFACE = 'huggingface',
  COHERE = 'cohere',
}

export interface ModelConfig {
  type: ModelType;
  apiKey?: string;
  model?: string;
  baseUrl?: string;
  organization?: string;
  defaultOptions?: ModelOptions;
}
