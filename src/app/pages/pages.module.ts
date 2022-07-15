import { HomeModule } from './home/home.module';
import { SharedModule } from './../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [PagesComponent],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule { }
