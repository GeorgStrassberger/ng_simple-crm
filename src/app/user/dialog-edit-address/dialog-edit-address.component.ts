import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/shared/models/user.class';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss'],
})
export class DialogEditAddressComponent implements OnInit {
  user?: any;
  isLoading: boolean = false;
  constructor(private dialog: MatDialogRef<DialogEditAddressComponent>) {}

  ngOnInit() {}

  onChancel() {
    this.dialog.close();
  }

  onEditUser() {}
}
