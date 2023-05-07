import { Injectable } from '@angular/core';
import { User } from '../models/user.class';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user?: User;

  constructor() {}

  createUser(user: User): void {
    this.user = new User(user);
    console.log('userService.user: ', this.user);
  }

  getUser(): User | null {
    if (this.user) {
      return this.user;
    } else {
      return null;
    }
  }
}
