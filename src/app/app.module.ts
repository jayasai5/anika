import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { QuestionComponent } from './components/question/question.component';
import { QuestionnaireService } from './services/questionnaire.service';

@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [QuestionnaireService],
  bootstrap: [AppComponent]
})
export class AppModule { }
