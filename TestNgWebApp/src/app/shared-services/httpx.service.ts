import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { StorageService} from './storage.service';
import { ExceptionModel } from '../shared-models/exception.model';

@Injectable()
export class HttpxService {

  public URL_API: any;

  constructor(private http: HttpClient, private storage: StorageService) {
    this.get('./assets/config.jsonด');
   }

  private async config(){
    try{
      let res =  await this.http.get<any>('./assets/config.jsonด').toPromise();
      this.URL_API = res.URL_API;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  authentication(url: string, body: {userName: string, Password: string}){
    return new Promise((resolve, reject) => {
      this.http.post(url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') })
      .toPromise()
      .then((res: any) => {
        if(res.IsSuccess && res.ErrorCode == 1) {
          this.storage.set('auth_key', res.Data);
          resolve(1);
        } else {
          reject(new ExceptionModel(401, res.Errormsg, null));
        }
      }).catch((error) => {
        reject(new ExceptionModel(-1000, error.message, null));
      });
    });
  }

  async get(url: string): Promise<any> {
    try{

      const auth_key = await this.storage.get('auth_key');
      if(!this.URL_API) {
        await this.config();
      }

      return new Promise((resolve, reject) => {
        if(auth_key){
          this.http.get(this.URL_API + url, { headers: new HttpHeaders().set('auth_key', auth_key.toString()) }).toPromise()
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
      console.log(error);
      if(error  instanceof  ExceptionModel){
        console.log('**********************************'+error.ErrorCode);
      }
      throw error;
    }

  }

  async post(url: string, body: any): Promise<any> {
    try {

      const auth_key = await this.storage.get('auth_key');
      if(!this.URL_API) {
        await this.config();
      }

      return new Promise((resolve, reject) => {
        if(auth_key) {
          this.http.post(this.URL_API + url, body, { headers: new HttpHeaders().set('auth_key', auth_key.toString()) }).toPromise()
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
