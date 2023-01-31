import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { RegisterH } from 'src/app/RegisterH';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

 

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

  constructor (private RegisterS : AuthService ) {
  
  }
  ngOnInit(): void {
    
  }
  
  onSubmit() {
    //console.log(this.contactForm.value);
    this.RegisterS.AddTec(this.contactForm.value).subscribe(result=>{console.log( result);
      alert(result);});
    this.RegisterS.Add_to_Mongo(this.contactForm.value).subscribe(result=>{console.log( result);
      alert(result);});

      
  }
}

 

