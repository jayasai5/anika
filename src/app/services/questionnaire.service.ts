import { Injectable } from '@angular/core';
import { BaseQuestion } from '../questions/base-question';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { QuestionItem, Follow, When } from '../questions/question-item';
import { DropdownQuestion } from '../questions/dropdown-question';
import { TextQuestion } from '../questions/text-question';
import { element } from '@angular/core/src/render3';


@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {
  getQuestionComponent(question: QuestionItem): BaseQuestion<any> {
    if(question.type=="mult"){
      return new DropdownQuestion({
        key : question.id,
        label : question.prompt,
        options : question.options.map(element => {return { key: element, value : element }})
      })
    }else if(question.type = "text"){
      return new TextQuestion({
        key: question.id,
        label: question.prompt,
        value: '',
        required: true,
      })
    }
  }
  toFormGroup(questions: BaseQuestion<any>[]): FormGroup {
    let group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }

  constructor() { }
  getNextQuestion(values: When[], id, remainingQuestions:QuestionItem[]): QuestionItem {
    remainingQuestions.forEach(element => {
      element.follows.forEach(follow => {
        if(follow.when==null){
          return element;
        }else{
          if(values.every(val => follow.when.includes(val))){
            return element;
          }
        }
      })
    });
    return null;
  }
  getQuestions(){
    return [
      new QuestionItem(1,"Did you purchase goods or pay for services?","mult",[],["Goods","Services"],true),
      new QuestionItem(2,"What was the product?","text",[new Follow(1,[new When(1,"Goods")])],[],false),
      new QuestionItem(3,"What was the service?","text",[new Follow(1,[new When(1,"Services")])],[],false),
      new QuestionItem(4,"Did you pay less than $40,000 for the product?","mult",[new Follow(2,[new When(2,null)])],["Yes", "No", "I can't remember"], false)
    ]  
  }
}
