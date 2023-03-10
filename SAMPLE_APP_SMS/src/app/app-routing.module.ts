import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExternalBaseComponent } from './external-base/external-base.component';
import { InternalBaseComponent } from './internal-base/internal-base.component';
import { RegisterComponent } from './internal-base/register/register.component';
import { RegisterTemplateComponent } from './register-template/register-template.component';

const routes: Routes = [
  { path: '', component: ExternalBaseComponent},
  
  { path: 'Login', component: ExternalBaseComponent },
 
  
  { 
    path: 'Home', 
    component: InternalBaseComponent ,
  children :[
     { path: 'RegisterT', component: RegisterTemplateComponent },
     { path: 'Register', component: RegisterComponent },
  
  ]

},
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
