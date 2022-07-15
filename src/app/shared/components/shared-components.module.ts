import { CommonToolsModule } from './../../../common/tool/common-tools.module';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { AtomsComponent } from './atoms/atoms/atoms.component';
import { ToolBarComponent } from './organisms/tool-bar/tool-bar.component';
import { ExpenseFormComponent } from './molecules/expense-form/expense-form.component';
import { SidenavComponent } from './organisms/sidenav/sidenav.component';

@NgModule({
  declarations:[
    AtomsComponent,
    ToolBarComponent,
    ExpenseFormComponent,
    SidenavComponent,
  ],
  exports: [
    AtomsComponent,
    ToolBarComponent,
    ExpenseFormComponent,
    SidenavComponent,
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    CommonToolsModule,
  ]
})

export class SharedComponentsModule {}
