import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UserData } from 'src/app/shared/interface/user-data';
import { User } from 'src/app/shared/models/user.class';
import { UserService } from 'src/app/shared/services/user.service';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  currentUserID: string = '';
  currentUser: User = new User();
  // currentUser!: UserData; // Muss erst leer Initzialisiert werden

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private dialog: MatDialog
  ) {
    this.currentUserID = this.route.snapshot.paramMap.get('id') as string;
  }
  ngOnInit() {
    this.userService.getUser(this.currentUserID).subscribe((user: UserData) => {
      this.currentUser = user;
    });
  }

  editUser(): void {
    const userDialog = this.dialog.open(DialogEditUserComponent);
    // kopie von User erstellen mit new user()
    userDialog.componentInstance.editUser = new User(this.currentUser);
  }

  editAddress() {
    const addressDialog = this.dialog.open(DialogEditAddressComponent);
    // kopie von User erstellen mit new user()
    addressDialog.componentInstance.editAddressUser = new User(
      this.currentUser
    );
  }

  deleteUser(id: string) {
    const yesDelete: boolean = confirm('Wollen sie den User wirklich löschen?');
    if (yesDelete) {
      this.userService.deleteUser(id);
      this.router.navigateByUrl('/');
    }
  }
}
