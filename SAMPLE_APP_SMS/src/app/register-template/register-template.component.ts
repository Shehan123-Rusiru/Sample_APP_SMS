import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register-template',
  templateUrl: './register-template.component.html',
  styleUrls: ['./register-template.component.scss']
})


export class RegisterTemplateComponent implements OnInit  {

  
contact : any;

  ngOnInit(){
 
    this.contact = { 
      firstname:"",
      lastname:"",
      gender:"male",
      isToc:true,
      email:"",
    };
 
  }
  onSubmit(contactForm: { value: any; }) {
    console.log(contactForm.value);
  }
  countryList: country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];
}

export class country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
    

  }

 
 



}

