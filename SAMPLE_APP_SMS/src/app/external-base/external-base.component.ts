import { Component, OnInit } from '@angular/core';

import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-external-base',
  templateUrl: './external-base.component.html',
  styleUrls: ['./external-base.component.scss']
})
export class ExternalBaseComponent implements OnInit {

  username = "";
  password = "";
  formData : FormGroup | any;
 
  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit(){ // get form values
    this.formData = new FormGroup({
      username: new FormControl(""),
      password: new FormControl(""),
   });
  }

  onClickSubmit(data: any) {
    this.username = data.username;
    this.password = data.password;
// submit to service
    this.authService.Login(this.username, this.password)
       .subscribe( (data: string) => { // Get Data from service
          console.log("Is Login Success: " + data); 
    
         if(data) this.router.navigate(['Home']);  // if true go to Home
    });
 }
  
}
