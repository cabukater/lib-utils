import { BsDatepickerModule, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonsModule } from '../buttons/buttons.module';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from './datepicker.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    DatepickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonsModule,
    BsDatepickerModule,
  ],exports:[
     DatepickerComponent
  ]
})
export class DatepickerModule { }
