import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { UserData } from 'src/app/shared/interface/user-data';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss'],
})
export class DialogEditUserComponent implements OnInit {
  currentUserID: string = '';
  editUser!: UserData; // Muss erst leer Initzialisiert werden
  birthDate!: Date;

  constructor(
    private dialog: MatDialogRef<DialogEditUserComponent>,
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    this.currentUserID = this.route.snapshot.paramMap.get('id') as string;
  }

  ngOnInit() {
    this.convertNumberToDate();
  }

  onChancel() {
    this.dialog.close();
  }

  onEditUser() {
    this.editUser = this.createUserUpdate();
    this.userService.updateUser(this.editUser);
    this.dialog.close();
  }

  createUserUpdate(): UserData {
    const user = {
      firstname: this.editUser.firstname,
      lastname: this.editUser.lastname,
      email: this.editUser.email,
      birthDate: this.convertDateToNumber(),
      street: this.editUser.street,
      zipCode: +this.editUser.zipCode,
      city: this.editUser.city,
      id: this.editUser.id,
    };
    return user;
  }

  convertNumberToDate() {
    this.birthDate = new Date(this.editUser.birthDate);
  }

  convertDateToNumber(): number {
    const timestamp: number = this.birthDate.getTime();
    return timestamp;
  }
}
