import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { SignInComponent } from './view/se-connecter/sign-in/sign-in.component';
import { SignUpComponent } from './view/se-connecter/sign-up/sign-up.component';
import { SeConnecterComponent } from './view/se-connecter/se-connecter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    SeConnecterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
