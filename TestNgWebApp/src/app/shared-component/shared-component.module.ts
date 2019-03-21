import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { TextboxComponent }   from './textbox/textbox.component';
import { PasswordComponent }   from './password/password.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TextboxComponent,
    PasswordComponent,
    ButtonComponent
  ],
  exports: [
    TextboxComponent,
    PasswordComponent,
    ButtonComponent
  ]
})
export class SharedComponentModule { }
