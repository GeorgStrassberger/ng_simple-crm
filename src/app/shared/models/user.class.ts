import { UserData } from '../interface/user-data';

export class User {
  firstname: string;
  lastname: string;
  email: string;
  birthDate: number; // Timestamp
  street: string;
  zipCode: number;
  city: string;
  id?: string;

  constructor(obj?: UserData) {
    this.firstname = obj ? obj.firstname : '';
    this.lastname = obj ? obj.lastname : '';
    this.email = obj ? obj.email : '';
    this.birthDate = obj ? obj.birthDate : 0;
    this.street = obj ? obj.street : '';
    this.zipCode = obj ? obj.zipCode : 0;
    this.city = obj ? obj.city : '';
    this.id = obj ? obj.id : '';
  }

  // public toJSON() {
  //   return {
  //     firstname: this.firstname,
  //     lastname: this.lastname,
  //     email: this.email,
  //     birthDate: this.birthDate,
  //     street: this.street,
  //     zipCode: this.zipCode,
  //     city: this.city,
  //     id: this.id,
  //   };
  // }
}
