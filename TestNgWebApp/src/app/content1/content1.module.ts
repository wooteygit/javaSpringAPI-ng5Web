import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Content1RoutingModule } from './content1-routing.module';
import { Content1Component } from './content1.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    Content1RoutingModule,
    FormsModule
  ],
  declarations: [Content1Component]
})
export class Content1Module { }
