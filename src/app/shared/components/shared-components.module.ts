import { CommonToolsModule } from './../../../common/tool/common-tools.module';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { AtomsComponent } from './atoms/atoms/atoms.component';

@NgModule({
  declarations:[
    AtomsComponent,
  ],
  exports: [
    AtomsComponent,
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    CommonToolsModule,
  ]
})

export class SharedComponentsModule {}
