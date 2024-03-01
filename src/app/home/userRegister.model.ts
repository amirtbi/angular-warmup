interface IUser {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
}
export class User {
  username = '';
  lastname = '';
  firstname = '';
  email = '';
  constructor(public user: IUser) {
    this.username = user.username;
    this.lastname = user.lastname;
    this.firstname = user.firstname;
    this.email = user.email;
  }
}
