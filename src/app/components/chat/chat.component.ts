import { Component, ElementRef, Input, NgModule, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ModelAnswerService } from '../../services/model-answer.service';
import { SpeechService } from '../../services/speech.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit{
  
  @ViewChild('container', {static: true}) container: ElementRef | undefined;
  index = 0;
  delay = 100; // typing speed in milliseconds
  lineDelay = 500; // delay before starting a new line
  intervall: any;
  index2 = 0;
  promptValue: string = "";
  chatID: number = 0;
  answerText: string = '';
  isListening: boolean = false;
  cooldownOver: boolean = true;

  constructor(private renderer: Renderer2, private modelAnswerService: ModelAnswerService, private speechService: SpeechService) {}
  ngOnInit(): void {}

  typeText(text: string): void {
    const htmlElement: HTMLElement = this.addChatElement();
    if (this.index < text.length) {
      if (text.charAt(this.index) === '\n') {
        htmlElement.innerHTML += '\n';
        this.index++;
        setTimeout(() => this.typeText(text), this.lineDelay);
      } else {
        htmlElement.innerHTML += text.charAt(this.index);
        this.index++;
        setTimeout(() => this.typeText(text), this.delay);
      }
    }
    else {
      this.chatID++;
      this.index = 0;
    }
  }
  handleClick(prompt: string): void {
    if(this.cooldownOver){
      prompt = this.addLineBreaks(prompt, 35);
      prompt = "User: " + prompt;
      this.typeText(prompt);
      const answer = "Pflanze: " + this.addLineBreaks(this.modelAnswerService.getAnswer(prompt), 35);
      this.cooldownOver = false;
      setTimeout(() => {
        this.typeText(answer);
      }, 3000);
      setTimeout(() => {
        this.cooldownOver = true;
      }, 8000);
  }
  }
  addChatElement(): HTMLElement {
    const parent = this.container?.nativeElement;
    if(this.chatID >= parent.children.length){
      const chatElement = document.createElement('div');
      this.renderer.appendChild(this.container?.nativeElement, chatElement);
      this.renderer.addClass(chatElement, 'chat-item');
      return chatElement;
    }
    else {
      const element = parent.children[this.chatID];
      return element;
    }
  }
  addLineBreaks(str: string, x: number) {
    let result = '';
    for (let i = 0; i < str.length; i += x) {
      result += str.substr(i, x) + '\n';
    }
    return result;
  }
  startListening(): void {
    this.isListening = true;
    try {
      this.speechService.startListening((text: string) => {
        this.handleClick(text);
        this.isListening = false;
      });
    } catch (error) {
      console.error(error);
      this.isListening = false;
    }
  }
}
