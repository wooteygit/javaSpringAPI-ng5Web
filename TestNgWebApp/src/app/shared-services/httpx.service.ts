import { UserLoginModel } from './../shared-models/user-login.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { StorageService} from './storage.service';
import { ExceptionModel } from '../shared-models/exception.model';

@Injectable()
export class HttpxService {

  public URL_API: any;

  constructor(public http: HttpClient, private storage: StorageService) {}

  private async config(){
    try{
      const res =  await this.http.get<any>('./assets/config.json').toPromise();
      this.URL_API = res.URL_API;
    } catch (error) {
      throw error;
    }
  }

  async authentication(requestMapping: string, body: UserLoginModel){
    try{
      if(!this.URL_API) {
        await this.config();
      }
      let httpHeaders = new HttpHeaders({
        'Content-Type' : 'application/json'
      });
      let options = {
        headers: httpHeaders
      };

      const res = await this.http.post<any>(this.URL_API + requestMapping, body, options).toPromise();
      if(res.errorCode == 1) {
        this.storage.set('auth_key', res.datas);
      } else {
        throw new ExceptionModel(401, res.errorMsg, null);
      }
      return res;
    }catch(error){
      throw error;
    }
  }

  async get(requestMapping: string): Promise<any> {
    try{

      if(!this.URL_API) {
        await this.config();
      }

      const auth_key = await this.storage.get('auth_key');
      let httpHeaders = new HttpHeaders({
        'auth_key' : auth_key
      });
      const options = {
        headers: httpHeaders
      };

      return new Promise((resolve, reject) => {
        if(auth_key){
          this.http.get(this.URL_API + requestMapping, options).toPromise()
          .then((res) => {
            resolve(res);
          }).catch((err) => {
            reject(new ExceptionModel(401, err.toString(), null));
          });
        } else {
          reject(new ExceptionModel(402, 'Authentication error', null));
        }
      });
    } catch (error) {
      throw error;
    }
  }

  async post(requestMapping: string, body: any): Promise<any> {
    try {

      if(!this.URL_API) {
        await this.config();
      }

      const auth_key = await this.storage.get('auth_key');
      let httpHeaders = new HttpHeaders({
        'auth_key' : auth_key
      });
      const options = {
        headers: httpHeaders
      };

      return new Promise((resolve, reject) => {
        if(auth_key) {
          this.http.post(this.URL_API + requestMapping, body, options)
          .toPromise()
          .then((res) => {
            resolve(res);
          }).catch((err) => {
            reject(new ExceptionModel(401, err.toString(), null));
          });
        } else {
          reject(new ExceptionModel(401, 'Authentication error', body));
        }
      });
    } catch (error) {
      throw error;
    }
  }

}
