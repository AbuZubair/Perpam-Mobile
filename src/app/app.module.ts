import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PatnewPage } from '../pages/patnew/patnew';
import { PatoldPage } from '../pages/patold/patold';
import {BpjsPage} from '../pages/bpjs/bpjs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ResetpwdPage } from '../pages/resetpwd/resetpwd';

import { PipesModule } from '../pipes/pipes.module'
import { BuddychatPageModule } from '../pages/buddychat/buddychat.module'


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { UserprofileProvider } from '../providers/userprofile/userprofile';



export const firebaseConfig = {
  apiKey: "AIzaSyAhdFk_z4-B4B3Jn94wgPkdYApKtnldf18",
  authDomain: "permata-pamulang019255.firebaseapp.com",
  databaseURL: "https://permata-pamulang019255.firebaseio.com",
  projectId: "permata-pamulang019255",
  storageBucket: "",
  messagingSenderId: "556987778562"
};


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PatnewPage,
    PatoldPage,
    LoginPage,
    BpjsPage,
    RegisterPage,
    ResetpwdPage,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    PipesModule,
    BuddychatPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PatnewPage,
    PatoldPage,
    LoginPage,
    BpjsPage,
    RegisterPage,
    ResetpwdPage,
      
  ],
  providers: [
    StatusBar,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    UserprofileProvider
  ]
})
export class AppModule {}
