import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule} from "@angular/router";
import {DashboardComponent} from "./component/dashboard/dashboard.component";


const routes = [
  {path: '', component: DashboardComponent}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
