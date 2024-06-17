import { Component, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ThreeService } from '../../services/basic-three.service';
import { PlantMenuComponent } from '../plant-menu/plant-menu.component';
import { ImportModelService } from '../../services/import-model.service';
import { SpeechComponent } from '../speech/speech.component';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-three-canvas',
  standalone: true,
  imports: [PlantMenuComponent, SpeechComponent],
  templateUrl: './three-canvas.component.html',
  styleUrl: './three-canvas.component.css'
})
export class ThreeCanvasComponent implements AfterViewInit{
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
        const camera: any = this.threeService.getCamera();
        camera.aspect = 300 / 450;
        this.threeService.getCamera().updateProjectionMatrix();
        this.threeService.getRenderer().setSize(300, 450);
      }
      else {
        this.threeService.setStartLayout();
      }
      }     
    this.mdq.addListener(this.mediaQueryListener);
  }

  ngAfterViewInit(): void {
    this.canvasContainer.nativeElement.appendChild(this.threeService.getRendererElement());
    this.importModelService.importModel(".glb");
    
  }
}
