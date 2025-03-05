export interface LanguageModelResponse {
  text: string;
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
  metadata?: Record<string, any>;
}

export interface ILanguageModel {
  generate(prompt: string, options?: ModelOptions): Promise<LanguageModelResponse>;
  embedText(text: string): Promise<number[]>;
  moderateContent(text: string): Promise<boolean>;
  tokenize(text: string): Promise<string[]>;
}

export interface ModelOptions {
  temperature?: number;
  maxTokens?: number;
  topP?: number;
  frequencyPenalty?: number;
  presencePenalty?: number;
  stop?: string[];
}
