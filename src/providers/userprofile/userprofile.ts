import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase';

/*
  Generated class for the UserprofileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserprofileProvider {


  constructor(public http: HttpClient) {
    console.log('Hello UserprofileProvider Provider');

    firebase.database().ref('/appointment/').once('value', (snapshot) => {
      let users = [];
      snapshot.forEach( snap => {
        users.push(snap.val().name); //or snap.val().name if you just want the name and not the whole object
        return false;   //<=THIS IS WHAT WAS MISSING!!!!!
      });
    });
  
  }

  
}
