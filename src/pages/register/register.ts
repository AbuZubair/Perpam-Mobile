import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import * as firebase from 'firebase';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('uname') user;
  @ViewChild('password') password;
  private reg : FormGroup;

  constructor(private alertCtrl: AlertController, private fire:AngularFireAuth, private formBuilder: FormBuilder, public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams) {
    this.reg = this.formBuilder.group({
      uname:['', Validators.compose([Validators.minLength(5), Validators.required])],
      pwd:['', Validators.compose([Validators.minLength(6), Validators.required])],
      cfrpwd:[]
    }, {validator: this.matchingPasswords('pwd', 'cfrpwd')});
  }

  matchingPasswords(pwdKey: string, cfrpwdKey: string) {
    // TODO maybe use this https://github.com/yuyang041060120/ng2-validation#notequalto-1
    return (group: FormGroup): {[key: string]: any} => {
      let pwd = group.controls[pwdKey];
      let cfrpwd = group.controls[cfrpwdKey];

      if (pwd.value !== cfrpwd.value) {
        return {
          mismatchedPasswords: true
        };
      }
    }
  }

  logForm(){
    console.log(this.reg.value)
  }

  alertEmail(){
    this.alertCtrl.create({
      title: 'Submit successfully!',
      subTitle: 'Please verify your email',
      buttons: ['OK']
    }).present();
  }
  
  alert(message: string){
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  register(){
    this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.password.value)
    .then(
      (success) => {
         let user:any = firebase.auth().currentUser;
         user.sendEmailVerification().then(
           (success) => {
             console.log("Please verify your email");
             this.alertEmail();
             this.navCtrl.push(LoginPage);
            } 
         ).catch(
           (err) => {
            console.log('got error',err);
            this.alert(err.message);
           }
         )

      }).catch(
        (err) => {
          console.log('got error',err);
          this.alert(err.message);
        })
      }
  

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
