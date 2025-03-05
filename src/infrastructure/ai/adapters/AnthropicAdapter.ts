import {
  ILanguageModel,
  LanguageModelResponse,
  ModelOptions,
} from '../../../core/interfaces/ILanguageModel';
import { ModelConfig } from '../../../core/types/LanguageModelTypes';
import Anthropic from '@anthropic-ai/sdk';

export class AnthropicAdapter implements ILanguageModel {
  private client: Anthropic;
  private defaultOptions: ModelOptions;

  constructor(private config: ModelConfig) {
    this.client = new Anthropic({
      apiKey: config.apiKey || '',
    });
    this.defaultOptions = config.defaultOptions || {};
  }

  async generate(prompt: string, options?: ModelOptions): Promise<LanguageModelResponse> {
    const completion = await this.client.messages.create({
      model: this.config.model || 'claude-3-opus-20240229',
      messages: [{ role: 'user', content: prompt }],
      temperature: options?.temperature ?? this.defaultOptions.temperature ?? 0.7,
      max_tokens: options?.maxTokens ?? this.defaultOptions.maxTokens ?? 1024,
      system: 'You are a helpful AI assistant.',
    });

    const content = completion.content[0].type === 'text' ? completion.content[0].text : '';

    return {
      text: content,
      usage: {
        promptTokens: completion.usage?.input_tokens ?? 0,
        completionTokens: completion.usage?.output_tokens ?? 0,
        totalTokens: (completion.usage?.input_tokens ?? 0) + (completion.usage?.output_tokens ?? 0),
      },
    };
  }

  async embedText(_text: string): Promise<number[]> {
    throw new Error('Embeddings not supported by Anthropic API');
  }

  async moderateContent(_text: string): Promise<boolean> {
    throw new Error('Content moderation not supported by Anthropic API');
  }

  async tokenize(_text: string): Promise<string[]> {
    throw new Error('Tokenization not directly supported by Anthropic API');
  }
}
