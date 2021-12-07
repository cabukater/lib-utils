import { AddRemoveModule } from './add-remove/add-remove.module';
import { AlertModule } from './alert/alert.module';
import { AutocompleteModule } from './autocomplete/autocomplete.module';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonsModule } from './buttons/buttons.module';
import { ColorModule } from './color/color.module';
import { ComboboxModule } from './combobox/combobox.module';
import { CommonModule } from '@angular/common';
import { CpfCnpjModule } from './cpf-cnpj/cpf-cnpj.module';
import { DatepickerModule } from './datepicker/datepicker.module';
import { DropdownModule } from './dropdown/dropdown.module';
import { FormErrorComponent } from './form-error/form-error.component';
import { FormErrorModule } from './form-error/form-error.module';
import { FormsModule } from '@angular/forms';
import { GridModule } from './grid/grid.module';
import { InputAutocompleteModule } from './input-autocomplete/input-autocomplete.module';
import { InputFormatModule } from './input-format/input-format.module';
import { InputModule } from './input/input.module';
import { sharedAngularComponentsComponent } from './shared-angular-components.component';
import { ModalModuleLib } from './modal/modal.module';
import { NgModule } from '@angular/core';
import { NotificationsModule } from './notifications/notifications.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { PaginationsharedModule } from './pagination/pagination.module';
import { RemoveAddFieldsModule } from './remove-add-fields/remove-add-fields.module';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { SwitchButtonModule } from './switch-button/switch-button.module';
import { TableModule } from './table/table.module';
import { ToastModule } from './toast/toast.module';

@NgModule({
  declarations: [
    sharedAngularComponentsComponent,
    SidemenuComponent
    ],
  imports: [
    BrowserModule,
    CommonModule,
    FormErrorModule,
    AutocompleteModule,
    OverlayModule,
    FormsModule,
    ToastModule.forRoot(),
    AlertModule,
    ButtonsModule,
    ColorModule,
    ModalModuleLib,
    InputModule,
    CpfCnpjModule,
    ComboboxModule,
    RemoveAddFieldsModule,
    DropdownModule,
    TableModule,
    PaginationsharedModule,
    SwitchButtonModule,
    AddRemoveModule,
    InputAutocompleteModule,
    NotificationsModule,
    GridModule,
    InputFormatModule,
    DatepickerModule],
  exports: [
    sharedAngularComponentsComponent,
    SidemenuComponent,
    FormErrorComponent,
  ]
})
export class sharedAngularComponentsModule { }