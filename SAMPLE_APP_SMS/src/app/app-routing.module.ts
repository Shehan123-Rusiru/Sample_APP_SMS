import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExternalBaseComponent } from './external-base/external-base.component';
import { InternalBaseComponent } from './internal-base/internal-base.component';

const routes: Routes = [
  { path: '', component: ExternalBaseComponent},
  { path: 'Login', component: ExternalBaseComponent },
  { path: 'Home', component: InternalBaseComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
