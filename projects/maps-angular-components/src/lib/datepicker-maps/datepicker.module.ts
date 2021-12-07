import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ButtonsModule } from '../buttons/buttons.module';
import { CommonModule } from '@angular/common';
import { DatepickersharedComponent } from './datepicker-shared.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    DatepickersharedComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonsModule,
    BsDatepickerModule.forRoot(),
  ],exports:[
    DatepickersharedComponent
  ]
})
export class DatepickerModule { }
