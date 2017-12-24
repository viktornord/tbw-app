import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'
import IUserInfo = tbw.IUserInfo;
import IUser = tbw.IUser;

@Injectable()
export class UserService {
  private currentUser: IUserInfo;

  constructor(private http: HttpClient) {
  }

  setCurrentUser(user: IUserInfo) {
    this.currentUser = user;
  }

  getCurrentUser(): IUserInfo {

    return this.currentUser;
  }

  get(id: string): Observable<IUser> {

    return this.http.get<IUser>(`/users/${id}`);
  }
}
