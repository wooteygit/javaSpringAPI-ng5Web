import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }

  set(keyName: string, key: string){
    localStorage.setItem(key, key);
  }

  get(keyName: string){
    return new Promise((resolve, reject) => {
      let key = localStorage.getItem(keyName);
      if(key){
        resolve(key);
      }else{
        reject("Can't get key from storage");
      }
    });
  }

  remove(keyName: string){
    localStorage.removeItem(keyName);
  }

}
