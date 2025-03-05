import { ILanguageModel, ModelOptions } from '../core/interfaces/ILanguageModel';

export class AIService {
  constructor(private model: ILanguageModel) {}

  async generateResponse(prompt: string, options?: ModelOptions) {
    return this.model.generate(prompt, options);
  }

  async getEmbedding(text: string) {
    return this.model.embedText(text);
  }

  async checkContentSafety(text: string) {
    return this.model.moderateContent(text);
  }
}
