import {Injectable} from '@angular/core'
import IUser = tbw.IUser;

@Injectable()
export class UserService {
  private currentUser: IUser;

  setCurrentUser(user: IUser) {
    this.currentUser = user;
  }

  getCurrentUser(): IUser {

    return this.currentUser;
  }
}
