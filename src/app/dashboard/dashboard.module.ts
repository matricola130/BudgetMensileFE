import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardRoutingModule} from "./dashboard.routing.module";
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {SiteHeaderComponent} from "./component/site-header/site-header.component";
import {MatDividerModule} from "@angular/material/divider";
import {PieChartModule} from "@swimlane/ngx-charts";



@NgModule({
  declarations: [
    DashboardComponent,
    SiteHeaderComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatDividerModule,
    PieChartModule
  ]
})
export class DashboardModule { }
