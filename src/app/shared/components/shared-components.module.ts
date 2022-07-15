import { CommonToolsModule } from './../../../common/tool/common-tools.module';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { AtomsComponent } from './atoms/atoms/atoms.component';
import { ToolBarComponent } from './organisms/tool-bar/tool-bar.component';
import { ExpenseFormComponent } from './molecules/expense-form/expense-form.component';

@NgModule({
  declarations:[
    AtomsComponent,
    ToolBarComponent,
    ExpenseFormComponent,
  ],
  exports: [
    AtomsComponent,
    ToolBarComponent,
    ExpenseFormComponent,
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    CommonToolsModule,
  ]
})

export class SharedComponentsModule {}
