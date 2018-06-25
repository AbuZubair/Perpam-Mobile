import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';


/**
 * Generated class for the ResetpwdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-resetpwd',
  templateUrl: 'resetpwd.html',
})
export class ResetpwdPage {

  public resetpwdForm;
  emailChanged: boolean = false;
  submitAttempt: boolean = false;
  loading: any;

  constructor(public navCtrl: NavController, private authService: AngularFireAuth, public navParams: NavParams, public formBuilder: FormBuilder,public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.resetpwdForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])]
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetpwdPage');
  }

 /* elementChanged(input){
    let field = input.inputControl.emailChanged;
    this[field + "Changed"] = true;
  } */

  resetPwd() {
    if (!this.resetpwdForm.valid){
      console.log(this.resetpwdForm.value);
    } else {
      this.authService.auth.sendPasswordResetEmail (this.resetpwdForm.value.email).then( authService => {
        this.navCtrl.setRoot(LoginPage);
      }, error => {
        this.loading.dismiss().then( () => {
          let alert = this.alertCtrl.create({
            message: error.message,
            buttons: [
              {
                text: "Ok",
                role: 'cancel'
              }
            ]
          });
          alert.present();
        });
      });

      this.loading = this.loadingCtrl.create({
        dismissOnPageChange: true,
      });
      this.loading.present();
    }
  }


}
