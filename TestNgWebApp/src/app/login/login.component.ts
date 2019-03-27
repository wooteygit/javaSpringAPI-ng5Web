import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpxService } from '../shared-services/httpx.service';
import { ExceptionModel } from '../shared-models/exception.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin = {
    userName: '',
    Password: ''
  };

  constructor(public auth: HttpxService, private router: Router) { }

  ngOnInit() {
  }

  doLogin(){
    try{
      if(this.userLogin.userName && this.userLogin.Password){
        this.auth.authentication('/auth', this.userLogin)
        .then((res) => {
          if(res == 1) {
            this.router.navigate(['/home']);
          }
        }).catch((err) => {
          console.error(err);
          if(err  instanceof  ExceptionModel){
            if(err.ErrorCode == 401){

            }
          }
        });
      } else {
        console.error('กรุณาระบุ ชื่อเข้าใช้งานหรือหรัสผ่าน');
      }
    }catch(error){
      if(error  instanceof  ExceptionModel){

      }
    }


  }

}
