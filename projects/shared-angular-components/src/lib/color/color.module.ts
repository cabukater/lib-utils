import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorComponent } from './color.component';
import { ButtonsModule } from '../buttons/buttons.module';



@NgModule({
  declarations: [
    ColorComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule,
  ], exports:[
    ColorComponent
  ]
})
export class ColorModule { }
