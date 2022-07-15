import { SharedModule } from './../../shared/shared.module';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ],
})

export class HomeModule { }
