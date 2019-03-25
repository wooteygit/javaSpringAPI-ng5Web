import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared-services/authentication.service';

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

  constructor(public auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  doLogin(){
    if(this.userLogin.userName && this.userLogin.Password){
      this.auth.authentication('/auth', this.userLogin)
      .then((res)=>{
        if(res == 1)
          this.router.navigate(['/home']);
      }).catch((err)=>{
        console.error(err.toString());
      });
    }else{
      console.error('กรุณาระบุ ชื่อเข้าใช้งานหรือหรัสผ่าน');
    }

  }

}
