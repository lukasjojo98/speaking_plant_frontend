import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router) {}

  public navigate(event: any): void {
    const route = event.srcElement.ariaLabel;
    if(route == 'plant'){
      this.router.navigate(['plant']);
    }
    else if(route == 'home'){
      this.router.navigate(['home']);
    }
    else if(route == 'community'){
      this.router.navigate(['community']);
    }
    else if(route == 'kbase'){
      this.router.navigate(['kbase']);
    }
    else if(route == 'chat'){
      this.router.navigate(['chat']);
    }
    else if(route == 'settings'){
      this.router.navigate(['settings']);
    }
    else if(route == 'profile'){
      this.router.navigate(['profile']);
    }
  }
}
