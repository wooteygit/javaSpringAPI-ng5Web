import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { FormsModule }   from '@angular/forms';
import { SharedComponentModule }   from '../shared-component/shared-component.module';

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    SharedComponentModule
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
