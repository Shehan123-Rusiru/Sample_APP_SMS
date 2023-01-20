import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn: boolean = false;

   Login(username: string, password: string): Observable <any>{

      alert(username);
      alert(password);
      this.isUserLoggedIn = username == 'admin' && password == 'admin'; //set true or false
      console.log(this.isUserLoggedIn);
      localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false"); // set to loacl storage ture or false

      return of(this.isUserLoggedIn);
   // return of(this.isUserLoggedIn).pipe(   // from true or false values
      
   //    tap(val => {  //return the values of do(tap)
   //       console.log("User Authentication is successful: " + val); 
   //    })
   // );
   // } 
   }

   constructor() { }


}
