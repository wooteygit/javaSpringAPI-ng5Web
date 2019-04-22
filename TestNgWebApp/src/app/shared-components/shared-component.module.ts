import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TextboxComponent } from './textbox/textbox.component';
import { PasswordComponent } from './password/password.component';
import { ButtonComponent } from './button/button.component';
import { NumberComponent } from './number/number.component';
import { DatetimeComponent } from './datetime/datetime.component';
import { PhoneComponent } from './phone/phone.component';
import { EmailComponent } from './email/email.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TextboxComponent,
    PasswordComponent,
    ButtonComponent,
    NumberComponent,
    DatetimeComponent,
    PhoneComponent,
    EmailComponent
  ],
  exports: [
    TextboxComponent,
    PasswordComponent,
    ButtonComponent
  ]
})
export class SharedComponentModule { }
