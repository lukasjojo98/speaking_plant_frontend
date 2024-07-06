import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-community-feed',
  standalone: true,
  imports: [MatCardModule, NavbarComponent, MatIconModule],
  templateUrl: './community-feed.component.html',
  styleUrl: './community-feed.component.css'
})
export class CommunityFeedComponent {

}
