import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {StorageService} from '../core/storage.service';
import {AuthTokenService} from './auth-token.service';
import {UserService} from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient,
              private storageService: StorageService,
              private userService: UserService,
              private authTokenService: AuthTokenService) {
    const userData = this.storageService.getUserData();
    if (userData) {
      this.authTokenService.setAccessToken(userData.accessToken);
      this.userService.setCurrentUser(userData.user);
    }
  }

  login(credentials: ICredentials, isNewAccount = false): Observable<tbw.IUserInfo> {

    return (isNewAccount
        ? this.register(credentials)
        : this.http.post<IUserData>('/auth/token', credentials)
    ).map(userData => {
      this.authTokenService.setAccessToken(userData.accessToken);
      this.userService.setCurrentUser(userData.user);
      this.storageService.saveUserData(userData);

      return userData.user;
    });
  }

  private register(credentials: ICredentials): Observable<IUserData> {

    return this.http.post<IUserData>('/users', credentials);
  }

  isAuthorized(): boolean {

    return this.authTokenService.hasAccessToken();
  }

  logout(): void {
    this.authTokenService.removeAccessToken();
    this.userService
    this.storageService.removeUserData();
  }

}

interface ICredentials {
  email: string;
  password: string;
}

interface IUserData {
  accessToken: string;
  user: tbw.IUserInfo;
}

