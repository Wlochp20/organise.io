import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username = new FormControl('');
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('');
  getErrorMessage() {
    if (this.email.hasError('email')) {
      return 'Not a valid email';
    }
    return 'You must enter a value';
  }
}
