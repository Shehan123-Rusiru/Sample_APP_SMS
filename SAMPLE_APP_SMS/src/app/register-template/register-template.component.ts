import { Component } from '@angular/core';



@Component({
  selector: 'app-register-template',
  templateUrl: './register-template.component.html',
  styleUrls: ['./register-template.component.scss']
})
export class RegisterTemplateComponent {

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