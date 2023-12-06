import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  questionsLimit:number;
  difficulty: string;

  constructor(){
    this.questionsLimit = 10;
    this.difficulty = "Easy";
  }
}
