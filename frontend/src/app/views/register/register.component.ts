import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RegisterServiceService } from 'src/app/core/services/register-service/register-service.service';
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
  constructor(private registerService : RegisterServiceService) {}
  getErrorMessage() {
    if (this.email.hasError('email')) {
      return 'Not a valid email';
    }
    return 'You must enter a value';
  }
  createAccount() : void {
    if(this.username.value != null && this.email.value && this.password.value != null && !this.email.hasError('email')){
      this.registerService.register({
        name : this.username.value,
        email : this.email.value,
        password : this.password.value
      }).subscribe((data)=>{
        console.log(data);
      })
    }
  }
}
