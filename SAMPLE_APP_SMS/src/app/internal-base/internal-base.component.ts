import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-internal-base',
  templateUrl: './internal-base.component.html',
  styleUrls: ['./internal-base.component.scss']
})
export class InternalBaseComponent {

  isUserLoggedIn = false;

   constructor(private authService: AuthService) {}

   ngOnInit() {
      let storeData = localStorage.getItem("isUserLoggedIn");
      console.log("StoreData: " + storeData);

      if( storeData != null && storeData == "true")  // check 
         this.isUserLoggedIn = true;
      else

         this.isUserLoggedIn = false;
   }
}
