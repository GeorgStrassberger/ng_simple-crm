import { Component } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { User } from 'src/app/shared/models/user.class';
import { UserData } from 'src/app/shared/interface/user-data';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],
})
export class DialogAddUserComponent {
  birthDate!: Date;
  user = new User();
  isLoading: boolean = false;

  constructor(
    private userService: UserService,
    private dialog: MatDialogRef<DialogAddUserComponent>
  ) {}

  /**
   * Create a new UserData JSON for Firebase
   * to save it in DB.
   * @returns
   */
  createNewUser(): UserData {
    const user = {
      firstname: this.user.firstname,
      lastname: this.user.lastname,
      email: this.user.email,
      birthDate: this.convertDate(),
      street: this.user.street,
      zipCode: +this.user.zipCode,
      city: this.user.city,
    };
    return user;
  }

  /**
   * save all Userinputs
   * without Validation -.- for now
   */
  onSaveUser(): void {
    this.isLoading = true;
    const user: UserData = this.createNewUser();
    console.log('currentUser: ', user);
    this.userService.addUser(user);
    this.isLoading = false;
    this.dialog.close();
  }

  /**
   * close the DialogComponent
   */
  onChancel(): void {
    this.dialog.close();
  }

  /**
   * convert birthDate of type Date to type number.
   * to get the timestamp for database JSON.
   * @returns
   */
  convertDate(): number {
    const timestamp: number = this.birthDate.getTime();
    return timestamp;
  }
}
