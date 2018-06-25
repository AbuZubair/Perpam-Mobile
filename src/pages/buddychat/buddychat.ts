import { Component,ViewChild, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Content } from 'ionic-angular';
import firebase from 'firebase';

/**
 * Generated class for the BuddychatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buddychat',
  templateUrl: 'buddychat.html',
})
export class BuddychatPage {

  @ViewChild('content') content: Content;
  newmessage;
  allmessages = [];
  firebuddychats = firebase.database().ref('/buddychats');
  buddymessages = [];
  user:string = 'qmLeabl0kdOF9lkH4u4H8EK0T7u1';

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public events: Events, public zone: NgZone) {
    this.scrollto();
    this.events.subscribe('newmessage', () => {
      this.allmessages = [];
      this.zone.run(() => {
        this.allmessages = this.buddymessages;
      })
    })
  }

  addmessage(newmessage) {
    if (this.user) {
      var promise = new Promise((resolve, reject) => {
        this.firebuddychats.child(firebase.auth().currentUser.uid).child(this.user).push({
          sentby: firebase.auth().currentUser.uid,
          message: newmessage,
          timestamp: firebase.database.ServerValue.TIMESTAMP
        }).then(() => {
          this.firebuddychats.child(this.user).child(firebase.auth().currentUser.uid).push({
            sentby: firebase.auth().currentUser.uid,
            message: newmessage,
            timestamp: firebase.database.ServerValue.TIMESTAMP
          }).then(() => {
            resolve(true);
            }).catch((err) => {
              reject(err);
          })
        })
      }).then(() => {
        this.content.scrollToBottom();
        this.newmessage = '';
    })
      return promise;
    }
}

getbuddymessages() {
  let temp;
    this.firebuddychats.child(firebase.auth().currentUser.uid).child(this.user).on('value', (snapshot) => {
      this.buddymessages = [];
      temp = snapshot.val();
      for (var tempkey in temp) {
        this.buddymessages.push(temp[tempkey]);
      }
      this.events.publish('newmessage');
    })
}


ionViewDidEnter() {
  this.getbuddymessages();
}

  scrollto() {
    setTimeout(() => {
      this.content.scrollToBottom();
    }, 1000);
}

}
