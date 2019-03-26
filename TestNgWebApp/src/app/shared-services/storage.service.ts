import { Injectable, KeyValueDiffers } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }

  set(keyName: string, key: string) {
    localStorage.setItem(keyName, key);
  }

  get(keyName: string) {
    const key =  localStorage.getItem(keyName);
    return key;
  }

  remove(keyName: string){
    localStorage.removeItem(keyName);
  }

}
