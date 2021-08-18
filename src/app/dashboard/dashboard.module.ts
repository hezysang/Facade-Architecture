import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { TaskComponent } from "./task/task.component";

@NgModule({
  declarations: [DashboardComponent, TaskComponent],
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule {}
