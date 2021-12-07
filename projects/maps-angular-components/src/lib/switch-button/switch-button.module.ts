import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ SwitchButtonComponent} from './switch-button.component'
@NgModule({
  declarations: [
    SwitchButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    SwitchButtonComponent
  ]
})
export class SwitchButtonModule { }
