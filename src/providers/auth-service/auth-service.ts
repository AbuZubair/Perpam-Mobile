import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth} from 'angularfire2/auth';

export class Pasienbaru {
  body: string;
}

@Injectable()
export class AuthServiceProvider {

  items: FirebaseListObservable<Pasienbaru[]> = null;
  userId: string;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid
    })
  }

  getPasienbaru(): FirebaseListObservable<Pasienbaru[]> {
    if (!this.userId) return;
    this.items = this.db.list(`pasienbaru/${this.userId}`);
    return this.items
  }


  createPasienbaru(pasienbaru: Pasienbaru)  {
    this.items.push(pasienbaru)
  }

}
