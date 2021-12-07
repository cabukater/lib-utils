import { from } from 'rxjs';
import { ComboboxComponent } from './combobox.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ComboboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
   exports:[
    ComboboxComponent
  ]
})
export class ComboboxModule { }