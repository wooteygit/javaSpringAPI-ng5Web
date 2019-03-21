import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule }   from '@angular/forms';
import { SharedComponentModule }   from '../shared-component/shared-component.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    SharedComponentModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
