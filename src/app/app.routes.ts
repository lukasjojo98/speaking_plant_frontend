import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ThreeCanvasComponent } from './components/three-canvas/three-canvas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlantComponent } from './components/plant/plant.component';
import { CommunityFeedComponent } from './components/community-feed/community-feed.component';
import { KnowledgeBaseComponent } from './components/knowledge-base/knowledge-base.component';

export const routes: Routes = [
        { path: '', component: ThreeCanvasComponent },
        { path: 'chat', component: ThreeCanvasComponent },
        { path: 'plant', component: PlantComponent },
        { path: 'profile', component: ThreeCanvasComponent },
        { path: 'community', component: CommunityFeedComponent },
        { path: 'kbase', component: KnowledgeBaseComponent },
        { path: 'home', component: ThreeCanvasComponent },
        { path: 'community', component: ThreeCanvasComponent },
        { path: 'settings', component: ThreeCanvasComponent },
];
