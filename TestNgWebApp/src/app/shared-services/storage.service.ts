import { Injectable, KeyValueDiffers } from '@angular/core';
import { ExceptionModel } from '../shared-models/exception.model';

@Injectable()
export class StorageService {

  constructor() { }

  set(keyName: string, key: string) {
    localStorage.setItem(keyName, key);
  }

  get(keyName: string) {
    const key = localStorage.getItem(keyName);
    if(!key){
      throw new ExceptionModel(401, 'Auth_key not fount', null);
    }
    return key;
  }

  remove(keyName: string){
    localStorage.removeItem(keyName);
  }

}
