import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CpfCnpjComponent} from './cpf-cnpj.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    CpfCnpjComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule
  ], exports:[
    CpfCnpjComponent
  ]
})
export class CpfCnpjModule { }
