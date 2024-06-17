import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';



@Injectable({
  providedIn: 'root'
})
export class ThreeService {
  private scene!: THREE.Scene;
  private camera!: any;
  private renderer!: THREE.WebGLRenderer;
  private cube!: THREE.Mesh;
  private ambientLight!: THREE.AmbientLight;

  constructor() {
    this.initThree();
  }

  public initThree(): void {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, 16/9, 0.1, 1000);
    const width = 800;
    const height = 450;
    const aspect = width / height;
    const frustumSize = 10;
    // this.camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, 100, 100000);
    this.scene.add(this.camera);
    this.camera.position.set(40,150,150);
    this.camera.rotateY(Math.PI);
    this.camera.lookAt(new THREE.Vector3(0,0,0));
    this.scene.background = new THREE.Color(0xffffff);
    this.renderer = new THREE.WebGLRenderer({antialias: true});
    this.ambientLight = new THREE.AmbientLight(0xFFFFFF);
    this.ambientLight.position.set(0, 20, 0);
    this.scene.add(this.ambientLight);
    const light = new THREE.DirectionalLight( 0xFFFFFF );
    // const gridHelper = new THREE.GridHelper(10, 10);
    // this.scene.add( gridHelper );
    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.scene.add( light );
    this.camera.position.z = 5;
    this.renderer.setSize(800, 450);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.8;
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(1, 50, 50),
      new THREE.MeshStandardMaterial({roughness: 0, metalness: 0.5, color: 0xff0000})
    );
    // this.scene.add(sphere);
    // this.orbitControlService.enableOrbitControls(this.camera, this.renderer.domElement);
    this.animate();
    this.initLighting();
  }
  public initLighting(): void {
    const hdrURL = new URL('assets/MR_INT-004_BigWindowTree_Thea.hdr', window.location.origin);
    const loader = new RGBELoader();
    loader.load(hdrURL.href, (texture) => {
        this.scene.environment = texture;
        texture.mapping = THREE.EquirectangularReflectionMapping;
      	// this.scene.background = texture;
    }); 
  }
  public getRendererElement(): HTMLElement {
    return this.renderer.domElement;
  }
  public getScene(): THREE.Scene {
    return this.scene;
  }
  public getRenderer(): THREE.WebGLRenderer {
    return this.renderer;
  }
  public getCamera(): any  {
    return this.camera;
  }
  private animate(): void {
    requestAnimationFrame(() => this.animate());
    this.renderer.render(this.scene, this.camera);
  }
  public setLayout(width: number, height: number): void {
    this.camera.aspect = width / height;
    this.renderer.setSize(width, height);
    this.camera.updateProjectionMatrix();
  }
}
