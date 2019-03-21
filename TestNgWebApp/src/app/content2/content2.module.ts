import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Content2RoutingModule } from './content2-routing.module';
import { Content2Component } from './content2.component'
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    Content2RoutingModule,
    FormsModule
  ],
  declarations: [Content2Component]
})
export class Content2Module { }
