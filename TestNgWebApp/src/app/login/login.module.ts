import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { SharedComponentModule } from '../shared-components/shared-component.module';
import { AuthenticationService } from '../shared-services/authentication.service';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    SharedComponentModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    AuthenticationService
  ]
})
export class LoginModule { }
