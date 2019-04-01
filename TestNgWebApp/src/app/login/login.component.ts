import { UserLoginModel } from './../shared-models/user-login.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpxService } from '../shared-services/httpx.service';
import { ExceptionModel } from '../shared-models/exception.model';
import { StorageService } from '../shared-services/storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLoginModel = new UserLoginModel();

  constructor(public auth: HttpxService, private router: Router, private storge: StorageService) { }

  ngOnInit() {
  }

  async doLogin(){
    try{
      console.log(this.userLogin);
      if(this.userLogin.userName && this.userLogin.password){
        let res = await this.auth.authentication('/auth', this.userLogin);
        if(res.errorCode == 1) {
          this.storge.set('auth_key', res.datas.toString());
          this.router.navigate(['/home']);
        } else {
          console.error(res.errorMsg);
        }
      } else {
        console.error('กรุณาระบุ ชื่อเข้าใช้งานหรือหรัสผ่าน');
      }
    } catch (error){
      if(error  instanceof  ExceptionModel){

      }
    }
  }

}
