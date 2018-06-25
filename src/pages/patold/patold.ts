import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { PatnewPage } from '../patnew/patnew';
import { EditprofilePage } from '../editprofile/editprofile';

/**
 * Generated class for the PatoldPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-patold',
  templateUrl: 'patold.html',
})
export class PatoldPage {

  public users: FirebaseListObservable<any[]>;
  descending: boolean = false;
  order: number;
  column: string = 'name';
  user:string;
  


  constructor(private afDB: AngularFireDatabase, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
    this.user = fire.auth.currentUser.uid;
    this.users = this.afDB.list(`pasienbaru/${this.user}`);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatoldPage');
  }

   getUsers() {
    return this.users ;
  }

  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

  gotoRegPat(){
    console.log("reg patient");
    this.navCtrl.push(PatnewPage)
  }
}
