import { Component } from '@angular/core';

@Component({
  selector: 'app-vocabulary-practice',
  standalone: false,
  templateUrl: './vocabulary-practice.component.html',
  styleUrls: ['./vocabulary-practice.component.css']
})
export class VocabularyPracticeComponent {
  vocabularyWord: string = 'Example word';

  nextWord() {
    this.vocabularyWord = 'Next word';
  }
}
