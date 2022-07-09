import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            { path: '', component: DashboardComponent }
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class HomeRoutingModule { }