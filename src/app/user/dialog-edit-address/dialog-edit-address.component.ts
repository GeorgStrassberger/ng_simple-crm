import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserData } from 'src/app/shared/interface/user-data';
import { User } from 'src/app/shared/models/user.class';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss'],
})
export class DialogEditAddressComponent implements OnInit {
  currentUserID: string = '';
  editAddressUser!: UserData; // Muss erst leer Initzialisiert werden

  constructor(
    private dialog: MatDialogRef<DialogEditAddressComponent>,
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    this.currentUserID = this.route.snapshot.paramMap.get('id') as string;
  }

  ngOnInit() {}

  onChancel() {
    this.dialog.close();
  }

  onEditAddress() {
    this.userService.updateUser(this.editAddressUser);
    this.dialog.close();
  }
}
