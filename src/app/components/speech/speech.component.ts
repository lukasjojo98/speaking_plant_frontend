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
}
