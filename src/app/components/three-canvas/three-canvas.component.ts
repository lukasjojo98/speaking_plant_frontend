import { Component, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef, OnInit } from '@angular/core';
import { ThreeService } from '../../services/basic-three.service';
import { PlantMenuComponent } from '../plant-menu/plant-menu.component';
import { ImportModelService } from '../../services/import-model.service';
import { SpeechComponent } from '../speech/speech.component';
import { MediaMatcher } from '@angular/cdk/layout';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-three-canvas',
  standalone: true,
  imports: [PlantMenuComponent, SpeechComponent, NavbarComponent],
  templateUrl: './three-canvas.component.html',
  styleUrl: './three-canvas.component.css'
})
export class ThreeCanvasComponent implements AfterViewInit, OnInit{
  @ViewChild('canvasContainer', { static: true }) canvasContainer!: ElementRef;
  mdq: MediaQueryList;
  mediaQueryListener:()=>void;

  constructor(private threeService: ThreeService,
              private importModelService: ImportModelService,
              changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher
  ) 
  {
    this.mdq = media.matchMedia('(max-width: 600px)');
    this.mediaQueryListener = () => {
      if(this.mdq.matches){
        changeDetectorRef.detectChanges();
        this.threeService.setLayout(300, 450);
      }
      else {
        this.threeService.setLayout(800, 450);
      }
      }     
    this.mdq.addListener(this.mediaQueryListener);
  }
  ngOnInit(): void {
    if(window.innerWidth < 700) {
      this.threeService.setLayout(300, 450);
    }
  }

  ngAfterViewInit(): void {
    this.canvasContainer.nativeElement.appendChild(this.threeService.getRendererElement());
    this.importModelService.importModel(".glb");
    
  }
}
