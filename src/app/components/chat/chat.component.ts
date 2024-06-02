import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit{
  
  @Input() prompt!: string;
  textToShow = '';
  fullText = `Plant: Hello, this is your plant speaking!\nMy sensor values are the following: \nI'm in need of a dosage of water.`;
  index = 0;
  delay = 100; // typing speed in milliseconds
  lineDelay = 500; // delay before starting a new line
  text = ["<b>User: </b>Wie geht es dir?", this.fullText];
  intervall: any;
  index2 = 0;

  ngOnInit(): void {
    setTimeout(() => {
      this.typeText(this.fullText);
    }, 3000);
  }
  typeText(text: string): void {
    if (this.index < text.length) {
      if (text.charAt(this.index) === '\n') {
        this.textToShow += '\n';
        this.index++;
        setTimeout(() => this.typeText(text), this.lineDelay);
      } else {
        this.textToShow += text.charAt(this.index);
        this.index++;
        setTimeout(() => this.typeText(text), this.delay);
      }
    }
  }
}
