import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {StorageService} from '../core/storage.service';

@Injectable()
export class AuthService {
  private accessToken

  constructor(private http: HttpClient, private storageService: StorageService) {
  }

  login(credentials): Observable<void> {

    return null;
  }

  isAuthorized(): boolean {

    return Boolean(this.accessToken);
  }

  logout(): void {
  }

}

