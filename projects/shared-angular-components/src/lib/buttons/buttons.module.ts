import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonsComponent} from './buttons.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  declarations: [
    ButtonsComponent,
  ],
  imports: [
    CommonModule,
    TooltipModule,
  ],
  exports:[
    ButtonsComponent
  ]
})
export class ButtonsModule { }
