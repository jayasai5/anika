import { Component, OnInit, Input } from '@angular/core';
import { BaseQuestion } from 'src/app/questions/base-question';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question: BaseQuestion<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
  constructor() { }

  ngOnInit() {
  }
}
