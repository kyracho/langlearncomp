export const AppConfig = {
  appName: 'Language Learning Companion',
  version: '1.0.0',
  apiUrl: 'https://api.example.com',  // Replace with your actual API endpoint
  speechRecognitionSettings: {
    language: 'en-US',   // Language for speech-to-text
    maxAlternatives: 1,   // How many alternative transcriptions to return
  },
  textToSpeechSettings: {
    lang: 'en-US',        // Language for text-to-speech
    rate: 1.0,            // Speed of speech (1.0 is default)
    pitch: 1.0            // Pitch of the speech (1.0 is default)
  }
};
