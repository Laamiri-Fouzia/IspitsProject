import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { SignInComponent } from './view/se-connecter/sign-in/sign-in.component';
import { SignUpComponent } from './view/se-connecter/sign-up/sign-up.component';
import { SeConnecterComponent } from './view/se-connecter/se-connecter.component';
import { SpacesComponent } from './view/spaces/spaces.component';
import { EspaceProfComponent } from './view/spaces/espace-prof/espace-prof.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    SeConnecterComponent,
    SpacesComponent,
    EspaceProfComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
