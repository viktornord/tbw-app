import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  private STORAGE_KEY_PREFIX = 'tbw';

  constructor() { }

  private getStorage(): Storage {

    return sessionStorage;
  }

  private getStorageKey(key: string) {

    return `${this.STORAGE_KEY_PREFIX}.${key}`;
  }

  put(key: string, data: any, stringify: boolean = false): this {
    this.getStorage().setItem(this.getStorageKey(key), stringify ? JSON.stringify(data) : data);

    return this;
  }

  get(key: string, parse: boolean = false): any {
    const item = this.getStorage().getItem(this.getStorageKey(key));
    if (!parse) {

      return item;
    }
    try {

      return item && JSON.parse(item);
    } catch (error) {
      console.warn(`Failed to parse ${key} from storage`);
      this.getStorage().removeItem(this.getStorageKey(key));
    }
  }

  remove(key: string): this {
    this.getStorage().removeItem(this.getStorageKey(key));

    return this;
  }

  saveUserData(userData): this {
    const currentUserData = this.getUserData() || {};

    return this.put('user', JSON.stringify(Object.assign(currentUserData, userData)));
  }

  removeUserData(): this {

    return this.remove('user');
  }

  getUserData() {
    const userData = this.get('user');
    try {

      return userData && JSON.parse(userData);
    } catch (error) {
      console.warn('Failed to parse user data from storage');
      this.removeUserData();
    }
  }
}
