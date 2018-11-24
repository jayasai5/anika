import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';
import { BaseQuestion } from 'src/app/questions/base-question';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  form: FormGroup
  questions: BaseQuestion<any>[];
  questionItems;
  constructor(private qs: QuestionnaireService) { }

  ngOnInit() {
    this.questionItems = this.qs.getQuestions()
    this.addFirstQuestion();
    this.form = this.qs.toFormGroup(this.questions);
  }
  addFirstQuestion(){
    this.questions.push(this.qs.getQuestionComponent(this.questionItems[0]))
  }
  addNextQuestion(){
    let payLoad = JSON.stringify(this.form.value);
    let qs 
    this.questions.push(this.qs)
  }
}
