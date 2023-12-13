import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  @Output() showMainMenuScreen = new EventEmitter();
  finalResult: any;
  showMainMenu() {
    this.showMainMenuScreen.emit(true);
  }
}
