import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RegisterServiceService } from 'src/app/core/services/register-service/register-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username = new FormControl('');
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('');
  hide : boolean = true;
  registerError : boolean = false;
  constructor(private registerService : RegisterServiceService, private router : Router) {}
  getErrorMessage() {
    if (this.email.hasError('email')) {
      return 'Not a valid email';
    }
    return 'You must enter a value';
  }
  createAccount() : void {
    if(this.username.value != null && this.email.value && this.password.value != null && !this.email.hasError('email')){
      this.registerService.register({
        "username":this.username.value,
        "password":this.password.value,
        "email":this.email.value
      });
      this.registerService.registerResListener().subscribe((res)=>{
        if(res.message == 'user added'){
          this.router.navigate(['/login']);
        }
        else if(res.message == 'user already exist'){
          this.registerError = true;
        }
      })
    }
  }
}
