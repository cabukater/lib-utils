import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NotificationsComponent} from './notifications.component'
import { ButtonsModule } from '../buttons/buttons.module';



@NgModule({
  declarations: [
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule,
  ],
  exports:[
    NotificationsComponent
  ]

})
export class NotificationsModule { }
