import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExternalBaseComponent } from './external-base/external-base.component';
import { InternalBaseComponent } from './internal-base/internal-base.component';
import { RegisterComponent } from './internal-base/register/register.component';




@NgModule({
  declarations: [
    AppComponent,
    ExternalBaseComponent,
    InternalBaseComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
