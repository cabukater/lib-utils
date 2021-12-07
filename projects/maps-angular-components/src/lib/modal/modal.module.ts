import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonsModule } from '../buttons/buttons.module';

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ButtonsModule,
    ModalModule,

  ], exports:[
    ModalComponent
  ]
})
export class ModalModuleLib { }
