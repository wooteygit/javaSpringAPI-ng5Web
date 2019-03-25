import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class HttpxService {

  constructor(private http: HttpClient, private auth: AuthenticationService) {}

  get(url: string): Promise<any>{
    return new Promise((resolve, reject) => {

    });
  }

  post(url: string, body: any){
    this.auth.authorizationHeader()
    .then(( authHeader: { headers: HttpHeaders} ) => {
      this.http.post(url, body, authHeader)
      .toPromise()
      .then(() => {

      })
      .catch((err) => {

      });
    })
    .catch((err) => {

    });

  }

}
