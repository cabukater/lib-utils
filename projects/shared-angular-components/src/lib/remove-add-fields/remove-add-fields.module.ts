import { SwitchButtonModule } from '../switch-button/switch-button.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RemoveAddFieldsComponent} from'./remove-add-fields.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonsModule } from '../buttons/buttons.module';
import { DropdownModule } from '../dropdown/dropdown.module';
import { AutocompleteModule } from '../autocomplete/autocomplete.module';

@NgModule({
  declarations: [
    RemoveAddFieldsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonsModule,
    DropdownModule,
    SwitchButtonModule,
    AutocompleteModule

  ], exports:[
    RemoveAddFieldsComponent
  ]
})
export class RemoveAddFieldsModule { }
