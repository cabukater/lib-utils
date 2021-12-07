import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{AddRemoveComponent} from './add-remove.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonsModule } from '../buttons/buttons.module';
import { DropdownModule } from '../dropdown/dropdown.module';
import { SwitchButtonModule } from '../switch-button/switch-button.module';


@NgModule({
  declarations: [
    AddRemoveComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonsModule,
    DropdownModule,
    SwitchButtonModule,
  ],
  exports:[
    AddRemoveComponent
  ]
})
export class AddRemoveModule { }
