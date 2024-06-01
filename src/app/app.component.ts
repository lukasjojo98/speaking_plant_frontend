import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThreeCanvasComponent } from './components/three-canvas/three-canvas.component';
import { PlantMenuComponent } from './components/plant-menu/plant-menu.component';
import { SpeechComponent } from './components/speech/speech.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ThreeCanvasComponent, PlantMenuComponent, SpeechComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'speaking_plant_frontend';
}
