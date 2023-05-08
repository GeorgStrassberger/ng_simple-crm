import { Injectable } from '@angular/core';
import { UserData } from '../interface/user-data';
import {
  DocumentData,
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  updateDoc,
} from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userCollection$: Observable<UserData[]>;

  constructor(private firestore: Firestore) {
    const usersCollection = collection(this.firestore, 'users');
    this.userCollection$ = collectionData(usersCollection) as Observable<
      UserData[]
    >;
    this.userCollection$.subscribe((values: UserData[]): void => {
      console.log('userCollection: ', values);
    });
  }

  getAllUsers(): Observable<UserData[]> {
    return collectionData(collection(this.firestore, 'users'), {
      idField: 'id',
    }) as Observable<UserData[]>;
  }

  getUser(id: string) {
    const userDocRef = doc(this.firestore, `users/${id}`);
    return docData(userDocRef, { idField: 'id' }) as Observable<UserData>;
  }

  addUser(user: UserData): void {
    user.id = doc(collection(this.firestore, 'users')).id;
    addDoc(collection(this.firestore, 'users'), user);
  }

  updateUser(user: UserData) {
    const userDocRef = doc(this.firestore, `users/${user.id}`);
    return updateDoc(userDocRef, { ...user });
  }

  deleteUser(userID: string) {
    const userDocRef = doc(this.firestore, `users/${userID}`);
    return deleteDoc(userDocRef);
  }

  ngOnDestroy() {
    // this.userCollection$.unsubscribe();??? wird nicht benötig?????
  }
}
