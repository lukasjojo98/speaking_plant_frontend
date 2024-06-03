import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThreeCanvasComponent } from './components/three-canvas/three-canvas.component';
import { PlantMenuComponent } from './components/plant-menu/plant-menu.component';
import { SpeechComponent } from './components/speech/speech.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ThreeCanvasComponent, PlantMenuComponent, SpeechComponent, NavbarComponent, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'speaking_plant_frontend';
}
