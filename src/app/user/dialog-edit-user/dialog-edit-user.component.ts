import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss'],
})
export class DialogEditUserComponent {
  user?: any;
  isLoading: boolean = false;
  birthDate!: Date;

  constructor(private dialog: MatDialogRef<DialogEditUserComponent>) {}

  onChancel() {
    this.dialog.close();
  }

  onEditAddress() {}
}
