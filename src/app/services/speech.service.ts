import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeechService {
  private recognition: any;
  private isListening = false;

  constructor(private ngZone: NgZone) {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = false;
      this.recognition.lang = 'de-DE';
    } else {
      throw new Error('Speech Recognition is not supported in this browser.');
    }
  }

  startListening(callback: (text: string) => void): void {
    if (!this.recognition) {
      console.error('Speech Recognition is not supported in this browser.');
      return;
    }

    this.recognition.onresult = (event: any) => {
      const text = event.results[0][0].transcript;
      console.log(text);
      this.ngZone.run(() => {
        callback(text);
      });
    };

    this.recognition.onerror = (event: any) => {
      this.ngZone.run(() => {
        console.error('Speech recognition error:', event.error);
        alert(`Speech recognition error: ${event.error}`);
      });
    };

    this.recognition.onend = () => {
      this.isListening = false;
    };

    if (!this.isListening) {
      this.isListening = true;
      this.recognition.start();
    }
  }

  stopListening(): void {
    if (this.isListening) {
      this.recognition.stop();
      this.isListening = false;
    }
  }
}
