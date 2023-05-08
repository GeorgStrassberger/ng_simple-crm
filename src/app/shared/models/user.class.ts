import { UserData } from '../interface/user-data';

export class User implements UserData {
  firstname: string;
  lastname: string;
  birthDate: number; // Timestamp
  street: string;
  zipCode: number;
  city: string;

  constructor(private obj?: UserData) {
    this.firstname = obj ? obj.firstname : '';
    this.lastname = obj ? obj.lastname : '';
    this.birthDate = obj ? obj.birthDate : 0;
    this.street = obj ? obj.street : '';
    this.zipCode = obj ? obj.zipCode : 0;
    this.city = obj ? obj.city : '';
  }

  toJSON() {
    return {
      firstname: this.firstname,
      lastname: this.lastname,
      birthDate: this.birthDate,
      street: this.street,
      zipCode: this.zipCode,
      city: this.city,
    };
  }
}
