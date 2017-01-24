import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { routing } from './app.routing';
import { RunAwayComponent } from './run-away/run-away.component';
import { GetWeaponComponent } from './get-weapon/get-weapon.component';
import { PlayDeadComponent } from './play-dead/play-dead.component';
import 'rxjs/add/operator/map';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyA1uuhOcrM1ZAlKVXHyT1PV1j3th2Eorto",
  authDomain: "choose-adventure.firebaseapp.com",
  databaseURL: "https://choose-adventure.firebaseio.com",
  storageBucket: "choose-adventure.appspot.com",
  messagingSenderId: "531050852988"
};


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RunAwayComponent,
    GetWeaponComponent,
    PlayDeadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
