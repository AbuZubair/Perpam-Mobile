import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import {PatnewPage} from '../patnew/patnew';
import {PatoldPage} from '../patold/patold';
import {BpjsPage} from '../bpjs/bpjs';
import {LoginPage} from '../login/login';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  
  constructor(public navCtrl: NavController, private authService: AngularFireAuth, public app: App) {
    
  }

  gopatnewPage(){
    console.log("patient new")
    this.navCtrl.push(PatnewPage)
  }

  gopatoldPage(){  
    console.log("patient old")
    this.navCtrl.push(PatoldPage)
  }

  gobpjsPage(){
    console.log("bpjs page")
    this.navCtrl.push(BpjsPage)
  }

  logout() {
    console.log("logout")
    localStorage.removeItem("currentUser");
    this.app.getRootNav().setRoot(LoginPage);
  }

 ionViewDidLoad(){
  console.log("home")
  }
}
