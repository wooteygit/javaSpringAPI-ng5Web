import { Component, OnInit} from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserModel } from '../shared-models/user.model';
import { CenterService } from '../shared-services/center.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usr: UserModel = new UserModel();
  confirmPassword: string;
  registerForm: FormGroup;

  constructor(public center: CenterService, public formBuilder: FormBuilder) {
    this.center.setTitle = 'สมัครสมาชิก';
    this.center.setFormID = 'register-001';

    this.registerForm = this.formBuilder.group({
      firstName : ['', Validators.compose([
        Validators.required,
        Validators.maxLength(255)])],
      lastName: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(255)])],
      mobile: ['', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)])],
      password: ['', Validators.compose([
        Validators.required])],
      confirmPassword: ['', Validators.compose([
        Validators.required])],
      age: ['', Validators.compose([
        Validators.required])],
      birthDay: ['', Validators.compose([
        Validators.required])]
    });

  }

  ngOnInit() {
  }

  doRegister(data) {
    try{
      if(!data.invalid){

      }else{

      }
    }catch(error){
      console.log(error);
    }
  }

}

