import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserData } from 'src/app/shared/interface/user-data';
import { User } from 'src/app/shared/models/user.class';
import { UserService } from 'src/app/shared/services/user.service';

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

  constructor(private route: ActivatedRoute, private userService: UserService) {
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
}
