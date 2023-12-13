import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent {
  @Output() finalResult = new EventEmitter();
  questions: Array<any>;
  selected: any;
  result: any;
  index: number;
  answer: string;
  options: any[] = []
  disableNextButton: boolean = false;

  constructor() {
    this.questions = [];
    this.reset();
  }

  showQuestion(index: number): void {
    if (this.questions && this.questions.length > index) {
      this.selected = this.questions[index];
      this.options = this.selected.incorrect_answers
      this.options.push(this.selected.correct_answer)
      this.options.sort((a, b) => {
        if (typeof a === 'string' && typeof b === 'string') {
          return a.localeCompare(b);
        } else if (typeof a === 'number' && typeof b === 'number') {
          return a - b;
        } else {
          return typeof a === 'string' ? 1 : -1;
        }
      });
    }
  }

  nextQuestion(): void {
    if (this.answer == '') return;
    this.checkAnswer();
    this.index++;
    if (this.questions.length > this.index) {
      this.answer = '';
      this.showQuestion(this.index);
    } else {
      this.finishQuiz();
      this.disableNextButton = true;
    }
  }

  checkAnswer(): void {
    let isAnswer = this.selected.correct_answer === this.answer
    if (isAnswer) {
      this.result.correct++;
    } else {
      this.result.wrong++;
    }
  }

  finishQuiz() {
    this.result.total = this.questions.length;
    this.result.correctPercentage = (this.result.correct / this.result.total) * 100;
    this.result.wrongPercentage = (this.result.wrong / this.result.total) * 100;
    this.disableNextButton = false;
    this.finalResult.emit(this.result)
  }

  reset(): void {
    this.answer = '';
    this.index = 0;
    this.result = {
      total: 0,
      correct: 0,
      wrong: 0,
      correctPercentage: 0,
      wrongPercentage: 0
    }
  }

}
