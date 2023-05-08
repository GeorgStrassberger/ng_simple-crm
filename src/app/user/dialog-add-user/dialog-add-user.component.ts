import { Component } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { User } from 'src/app/shared/models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],
})
export class DialogAddUserComponent {
  user: User = new User();
  birthDate!: Date;

  constructor(private userService: UserService) {}

  /**
   * save all Userinputs
   */
  saveUser(): void {
    this.user.birthDate = this.convertDate();
    console.log('currentUser: ', this.user);
    this.userService.createUser(this.user);
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
