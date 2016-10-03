import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import * as firebase from 'firebase';
import { AuthProviders,AuthMethods} from 'angularfire2';

const firebaseConfig = {
 apiKey: "AIzaSyDnrhypbB6y8FUYJAClANT7EYHqNJFtd0c",
 authDomain: "ng2fire-daeba.firebaseapp.com",
 databaseURL: "https://ng2fire-daeba.firebaseio.com/",
 storageBucket: "ng2fire-daeba.appspot.com"
}
const AuthenticationConfig = {
   method: AuthMethods.Popup,
   provider: AuthProviders.Google
 }
AngularFireModule.initializeApp(firebaseConfig, AuthenticationConfig)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
