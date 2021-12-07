import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorComponent } from './form-error.component';
import { ButtonsModule } from '../buttons/buttons.module';

@NgModule({
  declarations: [
    FormErrorComponent],
  imports: [
    CommonModule,
    ButtonsModule,
  ],
  providers: [FormErrorComponent],
  exports: [
    FormErrorComponent,
  ]
})
export class FormErrorModule {
  
 }
