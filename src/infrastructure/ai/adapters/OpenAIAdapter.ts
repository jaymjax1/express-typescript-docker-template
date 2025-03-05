import {
  ILanguageModel,
  LanguageModelResponse,
  ModelOptions,
} from '../../../core/interfaces/ILanguageModel';
import { ModelConfig } from '../../../core/types/LanguageModelTypes';
import OpenAI from 'openai';

export class OpenAIAdapter implements ILanguageModel {
  private client: OpenAI;
  private defaultOptions: ModelOptions;

  constructor(private config: ModelConfig) {
    this.client = new OpenAI({
      apiKey: config.apiKey,
      organization: config.organization,
    });
    this.defaultOptions = config.defaultOptions || {};
  }

  async generate(prompt: string, options?: ModelOptions): Promise<LanguageModelResponse> {
    const completion = await this.client.chat.completions.create({
      model: this.config.model || 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      temperature: options?.temperature ?? this.defaultOptions.temperature ?? 0.7,
      max_tokens: options?.maxTokens ?? this.defaultOptions.maxTokens,
      // ... other options
    });

    return {
      text: completion.choices[0].message.content || '',
      usage: {
        promptTokens: completion.usage?.prompt_tokens || 0,
        completionTokens: completion.usage?.completion_tokens || 0,
        totalTokens: completion.usage?.total_tokens || 0,
      },
    };
  }

  async embedText(text: string): Promise<number[]> {
    const response = await this.client.embeddings.create({
      model: 'text-embedding-ada-002',
      input: text,
    });

    return response.data[0].embedding;
  }

  async moderateContent(text: string): Promise<boolean> {
    const response = await this.client.moderations.create({
      input: text,
    });

    return response.results[0].flagged;
  }

  async tokenize(_text: string): Promise<string[]> {
    // Implement tokenization (could use GPT tokenizer)
    throw new Error('Not implemented');
  }
}
