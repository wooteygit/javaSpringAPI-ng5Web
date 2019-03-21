import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Content2Component } from './content2.component';

const routes: Routes = [
  {
    path: '',
    component: Content2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Content2RoutingModule { }
