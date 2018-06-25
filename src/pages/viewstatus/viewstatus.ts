import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth} from 'angularfire2/auth';
import { appoint } from '../../models/todo';
import firebase from 'firebase';

/**
 * Generated class for the ViewstatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewstatus',
  templateUrl: 'viewstatus.html',
})
export class ViewstatusPage {

  app: appoint;
  user:string;
  
  constructor(private afDB: AngularFireDatabase, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
   
  }

  ionViewWillLoad() {
    this.app = this.navParams.get('user');
  }
}
