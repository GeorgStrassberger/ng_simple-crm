import { Component, inject } from '@angular/core';
import {
  Firestore,
  collectionData,
  collection,
  DocumentData,
  addDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.class';
import { UserData } from '../shared/interface/user-data';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],
})
export class DialogAddUserComponent {
  user: User = new User();
  birthDate!: Date;

  userCollection$: Observable<DocumentData[]>;
  // firestore: Firestore = inject(Firestore);

  constructor(private readonly firestore: Firestore) {
    const userCollection = collection(this.firestore, 'users');
    this.userCollection$ = collectionData(userCollection);
  }

  createUser(): UserData {
    const createdUser: UserData = {
      firstname: this.user.firstname,
      lastname: this.user.lastname,
      birthDate: this.convertDate(),
      street: this.user.street,
      zipCode: +this.user.zipCode,
      city: this.user.city,
    };
    console.log('createdUser: ', createdUser);
    return createdUser;
  }

  /**
   * save all Userinputs
   */
  saveUser(): void {
    // const user: UserData = this.createUser();
    this.user.birthDate = this.convertDate();
    addDoc(collection(this.firestore, 'user'), this.user.toJSON());
  }

  /**
   * convert birthDate of type Date to type number
   * @returns
   */
  convertDate(): number {
    const timestamp: number = this.birthDate.getTime();
    return timestamp;
  }
}
