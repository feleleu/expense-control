import { CommonToolsModule } from './../../common/tool/common-tools.module';
import { SharedComponentsModule } from './components/shared-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    CommonModule,
    SharedComponentsModule,
    CommonToolsModule,
  ],
  exports: [
    SharedComponentsModule,
    CommonToolsModule,
  ]
})
export class SharedModule { }
