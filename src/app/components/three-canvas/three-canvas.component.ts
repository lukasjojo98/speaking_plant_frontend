import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ThreeService } from '../../services/basic-three.service';
import { PlantMenuComponent } from '../plant-menu/plant-menu.component';
import { ImportModelService } from '../../services/import-model.service';
import { SpeechComponent } from '../speech/speech.component';

@Component({
  selector: 'app-three-canvas',
  standalone: true,
  imports: [PlantMenuComponent, SpeechComponent],
  templateUrl: './three-canvas.component.html',
  styleUrl: './three-canvas.component.css'
})
export class ThreeCanvasComponent implements AfterViewInit{
  @ViewChild('canvasContainer', { static: true }) canvasContainer!: ElementRef;

  constructor(private threeService: ThreeService,
              private importModelService: ImportModelService
  ) {}

  ngAfterViewInit(): void {
    this.canvasContainer.nativeElement.appendChild(this.threeService.getRendererElement());
    this.importModelService.importModel(".glb");
  }
}
