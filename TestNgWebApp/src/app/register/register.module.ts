import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponentModule } from '../shared-components/shared-component.module';

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    SharedComponentModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class RegisterModule { }
