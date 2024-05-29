import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThreeCanvasComponent } from './components/three-canvas/three-canvas.component';
import { PlantMenuComponent } from './components/plant-menu/plant-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ThreeCanvasComponent, PlantMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'speaking_plant_frontend';
}
