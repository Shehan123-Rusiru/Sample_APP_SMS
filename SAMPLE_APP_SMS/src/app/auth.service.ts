import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly APIUrl = 'https://localhost:7205/api';

  isUserLoggedIn: boolean = false;

   Login(username: string, password: string): Observable <any>{

      alert(username);
      alert(password);
      this.isUserLoggedIn = username == 'admin' && password == 'admin'; //set true or false
      console.log(this.isUserLoggedIn);
      localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false"); // set to loacl storage ture or false
      sessionStorage.setItem("User Logged in", username );
      return of(this.isUserLoggedIn);
   // return of(this.isUserLoggedIn).pipe(   // from true or false values
      
   //    tap(val => {  //return the values of do(tap)
   //       console.log("User Authentication is successful: " + val); 
   //    })
   // );
   // } 
   }

   constructor(private http: HttpClient) { }
 
   AddTec(data: any) {
     console.log(data);
     return this.http.post(this.APIUrl + '/RegisterUser', data);

   }

   AddTec1(data1: any) {
       console.log(data1);
    return this.http.post(this.APIUrl + '/TRegisterUser', data1);

  }

}
