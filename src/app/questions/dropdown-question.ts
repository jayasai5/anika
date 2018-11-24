import { BaseQuestion } from "./base-question";

export class DropdownQuestion extends BaseQuestion<string>{
    controlType = 'dropdown';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
