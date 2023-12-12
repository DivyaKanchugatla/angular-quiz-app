import { Component, ViewChild } from '@angular/core';
import { QuizService } from './services/quiz.service';
import { QuizComponent } from './quiz/quiz.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  questionsLimit: number;
  difficulty: string;
  type: string;
  showQuizScreen: boolean;
  showMainMenu: boolean;
  spinner: boolean;

  @ViewChild('quiz', { static: true }) quiz!: QuizComponent;

  constructor(private quizService: QuizService) {
    this.questionsLimit = 10;
    this.difficulty = "Easy";
    this.type = "Multiple Choice";
    this.showMainMenu = true;
  }

  quizQuestions(): void {
    this.toggleSpinner();
    this.quizService.getQuizQuestions(this.difficulty, this.questionsLimit, this.type).subscribe((response) => {
      this.quiz.questions = response.results;
      this.quiz.showQuestion(0);
      this.showQuizScreen = true;
      this.showMainMenu = false;
      this.toggleSpinner();
    })
  }

  toggleSpinner() {
    this.spinner = !this.spinner;
  }

}
