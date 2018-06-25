import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  contact: string = "contactus";
  public users: FirebaseListObservable<any[]>;
  user:string;

  slides = [
    {
      title: "Our Location",
      description: "Jl. Raya Siliwangi No.1A, Pamulang Tangerang Selatan",
      image: "assets/imgs/point.png",
    },
    {
      title: "Call Center",
      description: "<b>IGD . (021) 747 09 072 </b> <br> (021) 747 04 999 | 747 09 079 ",
      image: "assets/imgs/tel.jpg",
    }
];

  constructor(private afDB: AngularFireDatabase, private fire: AngularFireAuth, public navCtrl: NavController) {
    this.user = fire.auth.currentUser.uid;
    this.users = this.afDB.list(`appointment/${this.user}`);
  }

}
