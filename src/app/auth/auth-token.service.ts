import { Injectable } from '@angular/core';

@Injectable()
export class AuthTokenService {

  private accessToken: string;

  hasAccessToken(): boolean {

    return Boolean(this.accessToken);
  }

  setAccessToken(token) {
    this.accessToken = token;
  }

  getAccessToken(): string {

    return this.accessToken;
  }

  removeAccessToken() {
    this.accessToken = null;
  }

  getAuthorizationHeader(): string {

    return `Bearer ${this.accessToken}`;
  }

}
