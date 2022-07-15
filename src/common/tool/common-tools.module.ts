import { NgModule } from "@angular/core";

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { MatNativeDateModule } from "@angular/material/core";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatNativeDateModule,
    MatGridListModule,
    MatSidenavModule,
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatNativeDateModule,
    MatGridListModule,
    MatSidenavModule,
  ],
})

export class CommonToolsModule { }
