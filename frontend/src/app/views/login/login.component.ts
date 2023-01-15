import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LoginServiceService } from 'src/app/core/services/login-service/login-service.service';
import { Router } from '@angular/router';
import { IsUserLoggedService } from 'src/app/core/services/is-user-logged/is-user-logged.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor( 
    private loginService : LoginServiceService, 
    private router : Router,
    private isUserLogged : IsUserLoggedService, 
  ) {}

  username = new FormControl('');
  password = new FormControl('');
  hide : boolean = true;
  isIncorrectUsername : boolean = true;
  getErrorMessage() {
    return 'You must enter a value';
  }
  login() : void {
    if(this.username.value != null && this.password.value != null){
      this.loginService.login({
        username : this.username.value,
        password : this.password.value
      })
      this.loginService.loginResListener().subscribe((res)=>{
        if(res.message == 'you are logged in'){
          this.isUserLogged.setUser(true);
          this.router.navigate(['/boards']);
        }
        else if(res.message == 'password incorrect'){
          console.log('password')
        }
        else if(res.message == 'username incorrect'){
          this.isIncorrectUsername = true;
          console.log('inncorect')
        }
      })
    }
  }
}
