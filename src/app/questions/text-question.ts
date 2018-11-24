import { BaseQuestion } from "./base-question";

export class TextQuestion extends BaseQuestion<string> {
    controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
