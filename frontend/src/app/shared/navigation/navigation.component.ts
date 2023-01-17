import { Component, Input } from '@angular/core';
import { IsUserLoggedService } from 'src/app/core/services/is-user-logged/is-user-logged.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  constructor(
    private isUserLoggedService : IsUserLoggedService,
    private router : Router
  ) {}

  @Input() textInGreenFrame : string = 'sing up';
  @Input() textInLoginFrame : string = 'login';

  navigate() : void {
    if(this.textInGreenFrame == 'sing up'){
      this.router.navigate(['/register'])
    }
  }
}
