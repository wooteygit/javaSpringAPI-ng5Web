import { Component, OnInit } from '@angular/core';
import { UserModel } from '../shared-models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usr: UserModel = new UserModel();
  constructor() { }

  ngOnInit() {
  }

}

