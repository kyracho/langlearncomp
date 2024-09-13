import { Component } from '@angular/core';

@Component({
  selector: 'app-listening-practice',
  standalone: false,  // Important for standalone components
  templateUrl: './listening-practice.component.html',
  styleUrls: ['./listening-practice.component.css']
})

export class ListeningPracticeComponent {
  phraseToSay: string = 'This is a listening practice phrase!';

  sayPhrase() {
    console.log('Listening phrase:', this.phraseToSay);
  }

  nextPhrase() {
    this.phraseToSay = 'Next listening practice phrase';
  }
}
