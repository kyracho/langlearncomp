import { Component } from '@angular/core';

@Component({
  selector: 'app-speaking-practice',
  templateUrl: './speaking-practice.component.html',
  styleUrls: ['./speaking-practice.component.css']
})
export class SpeakingPracticeComponent {
  phraseToSay: string = 'Good morning!';  // Default phrase for the user to say
  recordedSpeech: string = '';            // Stores the speech captured from the user
  feedback: string = '';                  // Feedback message for the user

  constructor() {}

  // Method to start the speech recognition
  startRecording() {
    const recognition = new (window as any).webkitSpeechRecognition() || new (window as any).SpeechRecognition();

    recognition.lang = 'en-US';  // Set the language (you can change it as needed)
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = (event: any) => {
      this.recordedSpeech = event.results[0][0].transcript;
      this.provideFeedback();  // Call feedback method after getting speech
    };

    recognition.onerror = (event: any) => {
      console.error(event.error);
      this.feedback = 'Sorry, there was an error capturing your speech. Please try again.';
    };
  }

  // Provide feedback based on the recorded speech
  provideFeedback() {
    if (this.recordedSpeech.toLowerCase() === this.phraseToSay.toLowerCase()) {
      this.feedback = 'Great job! You said it correctly.';
    } else {
      this.feedback = `You said: "${this.recordedSpeech}". Try again.`;
    }
  }

  // Method to load the next phrase
  nextPhrase() {
    const phrases = [
      'Hello, how are you?',
      'Nice to meet you!',
      'Where are you from?',
      'What is your favorite color?',
      'Goodbye!'
    ];
    this.phraseToSay = phrases[Math.floor(Math.random() * phrases.length)];
    this.recordedSpeech = '';  // Clear the recorded speech
    this.feedback = '';  // Reset feedback
  }
}
