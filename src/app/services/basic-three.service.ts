import { Injectable } from '@angular/core';
import { window } from 'rxjs';
import * as THREE from 'three';


@Injectable({
  providedIn: 'root'
})
export class ThreeService {
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private cube!: THREE.Mesh;
  private ambientLight!: THREE.AmbientLight;

  constructor() {
    this.initThree();
  }

  public initThree(): void {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, 16/9, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({antialias: true});
    this.ambientLight = new THREE.AmbientLight(0xFFFFFF);
    this.ambientLight.position.set(0, 20, 0);
    this.scene.add(this.ambientLight);
    const light = new THREE.DirectionalLight( 0xFFFFFF );
    this.scene.add( light );
    this.camera.position.z = 5;
    this.renderer.setSize(800,450);
    this.scene.background = new THREE.Color(0xadd8e6);
    // this.orbitControlService.enableOrbitControls(this.camera, this.renderer.domElement);
    this.animate();
  }
  public getRendererElement(): HTMLElement {
    return this.renderer.domElement;
  }
  public getScene(): THREE.Scene {
    return this.scene;
  }
  private animate(): void {
    requestAnimationFrame(() => this.animate());
    this.renderer.render(this.scene, this.camera);
  }
}
