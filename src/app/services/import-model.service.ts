import { Injectable, OnInit } from '@angular/core';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { ThreeService } from './basic-three.service';


@Injectable({
  providedIn: 'root'
})
export class ImportModelService{

  constructor(private threeService: ThreeService) { }

  importModel(fileType: string): void {
    let loader = null;
    if(fileType == ".obj"){
        // loader = new OBJLoader();
        // const decoder = new TextDecoder();
        // content = decoder.decode(content);
    }
    else if(fileType == ".glb"){
        loader = new GLTFLoader();
        loader.load('/assets/models/potted_plant.glb', (result => {
          const model: any = result.scene.children[0];
          model.scale.set(3,3,3);
          model.position.set(0,0,0);
          // model.material = new THREE.MeshToonMaterial({color: 0x4444ff});
          this.threeService.getCamera().lookAt(model.position);
          this.threeService.getCamera().zoom = 8;
          this.threeService.getCamera().updateProjectionMatrix();
          this.threeService.getCamera().updateMatrix();
          model.name = "plant";
          this.threeService.getScene().add(model);
        }));
        /*loader.load('/assets/models/floor.glb', (result) => {
          const model = result.scene.children[0];
          model.scale.set(50,50,50);
          model.position.set(0,0,0);
          this.threeService.getScene().add(model);
        });*/
    }
    else if(fileType == ".fbx"){
        loader = new FBXLoader();
        loader.load('/assets/models/plant.fbx', (result => {
          const model: any = result.children[0];
          model.position.set(0,0,0);
          model.scale.set(10);
          this.threeService.getScene().add(model);
        }))
    }
    else {
        alert("File type not supported.");
        return;
    }
  }
}
