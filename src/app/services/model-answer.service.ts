import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelAnswerService {

  constructor() { }

  getAnswer(prompt: string): string {
    if(prompt.toLowerCase().includes("wie geht es dir")){
      return (Math.random() > 0.5) ? "Mir geht es gut:)" : "Mir geht es nicht gut :(";
    }
    else if(prompt.toLowerCase().includes("wie kann ich dir helfen")){
      return (Math.random() > 0.5) ? "Du kannst mir Wasser geben." : "Du kannst mich in die Sonne stellen.";
    }
    else {
      return "Ich konnte dich nicht verstehen. Bitte formuliere deine Frage erneut.";
    }
  }
}
