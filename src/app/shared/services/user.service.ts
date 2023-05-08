import { Injectable } from '@angular/core';
import { UserData } from '../interface/user-data';
import {
  DocumentData,
  Firestore,
  addDoc,
  collection,
  collectionData,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUser?: UserData;

  userCollection$: Observable<DocumentData[]>;

  constructor(private firestore: Firestore) {
    const usersCollection = collection(this.firestore, 'users');
    this.userCollection$ = collectionData(usersCollection);
  }

  addUser(user: UserData): void {
    addDoc(collection(this.firestore, 'users'), user);
  }
}
