import { Component } from '@angular/core';
import { SpeechService } from '../../services/speech.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ChatComponent } from '../chat/chat.component';

@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  standalone: true,
  imports: [CommonModule, MatIconModule,ChatComponent],
  styleUrls: ['./speech.component.css']
})
export class SpeechComponent {
  recognizedText: string = '';
  answerText: string = '';
  isListening: boolean = false;

  constructor(private speechService: SpeechService) { }

  startListening(): void {
    this.isListening = true;
    try {
      this.speechService.startListening((text: string) => {
        this.recognizedText = text;
        if(this.recognizedText == "wie geht es dir"){
          this.answerText = "mir geht es gut.";
        }
        this.handleSpeechCommand(text);
        this.isListening = false;
      });
    } catch (error) {
      console.error(error);
      this.isListening = false;
    }
  }

  handleSpeechCommand(command: string): void {
    // Implement your logic here to handle the spoken command
    console.log(`Recognized command: ${command}`);
  }
}
