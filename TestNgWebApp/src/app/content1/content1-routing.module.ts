import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Content1Component } from './content1.component';

const routes: Routes = [
  {
    path: '',
    component: Content1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Content1RoutingModule { }
