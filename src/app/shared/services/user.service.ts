import { Injectable } from '@angular/core';
import { UserData } from '../interface/user-data';
import {
  DocumentData,
  Firestore,
  addDoc,
  collection,
  collectionData,
  doc,
} from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userCollection$: Observable<DocumentData[]>;

  constructor(private firestore: Firestore) {
    const usersCollection = collection(this.firestore, 'users');
    this.userCollection$ = collectionData(usersCollection);
    this.userCollection$.subscribe((values) =>
      console.log('subUsers: ', values)
    );
  }

  addUser(user: UserData): void {
    user.id = doc(collection(this.firestore, 'users')).id;
    addDoc(collection(this.firestore, 'users'), user);
  }

  ngOnDestroy() {
    // this.userCollection$.unsubscribe();??? wird nicht benötig?????
  }
}
