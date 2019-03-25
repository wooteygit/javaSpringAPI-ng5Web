import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { StorageService} from './storage.service';
import { HttpxService} from './httpx.service';

@Injectable()
export class AuthenticationService {

  constructor(public http: HttpClient, public storage: StorageService, public httpx: HttpxService) { }

  authentication(url: string, login: {userName: string, Password: string}){
    return new Promise((resolve, reject) => {
      this.http.post(url, login, { headers: new HttpHeaders().set('Content-Type', 'application/json') })
      .toPromise()
      .then((res: any) => {
        if(res.IsSuccess && res.ErrorCode == 1){
          this.storage.set('auth_key', res.Data);
          resolve(1);
        }else{
          reject(res.ErrorMesg);
        }
      })
      .catch((error) =>{
        reject(error.ToString());
      });
    });
  }

  authorizationHeader(): Promise<{ headers: HttpHeaders}> {
    return new Promise((resolve, reject) => {
      this.storage.get('auth_key').then((key: string) => {
        resolve({ headers: new HttpHeaders().set('auth_key', key) });
      }).catch((err) => {
        reject(err);
      });
    });
  }
}
