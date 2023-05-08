import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserData } from 'src/app/shared/interface/user-data';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  currentUserID: string = '';

  currentUser!: UserData;
  constructor(private route: ActivatedRoute, private userService: UserService) {
    route.params.subscribe((route) => {
      console.log('route: ', route);
      // this.currentUserID = routeID.id;
    });
  }
  ngOnInit() {}
}
