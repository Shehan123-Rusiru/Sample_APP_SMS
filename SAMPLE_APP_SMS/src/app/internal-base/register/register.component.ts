import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  contactForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  get firstName() {
    return this.contactForm.get('firstname');
  }
  get lastName() {
    return this.contactForm.get('lastName');
  }
  get username() {
    return this.contactForm.get('username');
  }
  get password() {
    return this.contactForm.get('password');
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }
}
