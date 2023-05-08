import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
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
  // currentUser!: UserData;
  currentUser: User = new User(); // Muss erst leer Initzialisiert werden
  user$!: Observable<UserData>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private dialog: MatDialog
  ) {
    this.currentUserID = this.route.snapshot.paramMap.get('id') as string;
  }
  ngOnInit() {
    this.getCurrentUser(this.currentUserID);
  }

  getCurrentUser(userID: string) {
    this.user$ = this.userService.getUser(userID);
    this.user$.subscribe((user: UserData) => {
      this.currentUser = user;
    });
  }

  editUser(): void {
    const userDialog = this.dialog.open(DialogEditUserComponent);
    userDialog.componentInstance.user = this.currentUser;
  }

  editAddress() {
    const addressDialog = this.dialog.open(DialogEditAddressComponent);
    addressDialog.componentInstance.user = this.user$;
  }

  deleteUser(id: string) {
    const yesDelete: boolean = confirm('Wollen sie den User wirklich löschen?');
    if (yesDelete) {
      this.userService.deleteUser(id);
      this.router.navigateByUrl('/');
    }
  }
}
