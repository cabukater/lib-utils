import {
  AddRemoveModule,
  AlertModule,
  AutocompleteModule,
  ButtonsModule,
  ColorModule,
  ComboboxModule,
  CpfCnpjModule,
  DatepickerModule,
  DropdownModule,
  InputAutocompleteModule,
  InputModule,
  sharedAngularComponentsModule,
  ModalModuleLib,
  NotificationsModule,
  PaginationsharedModule,
  RemoveAddFieldsModule,
  SwitchButtonModule,
  TableModule,
  ToastModule,
  ToastService
} from 'shared-angular-components';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule, forwardRef } from '@angular/core';
import { FormControlDirective, FormGroupDirective } from '@angular/forms';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';
import { TOAST_CONFIG_TOKEN, defaultToastConfig } from 'projects/shared-angular-components/src/lib/toast/toast-config';

import { AddRemoveShowComponent } from './add-remove-show/add-remove-show.component';
import { AlertShowComponent } from './alert-show/alert-show.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AutocompleteDocComponent } from './autocomplete/autocomplete.component';
import { AutocompleteNewDocComponent } from './autocomplete-new/autocomplete-new.component';
import { AutocompleteService } from './autocomplete/autocomplete.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ButtonsShowComponent } from './buttons-show/buttons-show.component';
import { ClipboardModule } from 'ngx-clipboard';
import { ColorSystemComponent } from './color-system/color-system.component';
import { ComboboxShowComponent } from './combobox-show/combobox-show.component';
import { CpfCnpjMaskComponent } from './cpf-cnpj-mask/cpf-cnpj-mask.component';
import { DatepickerShowComponent } from './datepicker-show/datepicker-show.component';
import { DropdownShowComponent } from './dropdown-show/dropdown-show.component';
import { FormErrorShowComponent } from './form-error/form-error.component';
import { GridShowComponent } from './grid-show/grid-show.component'
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { InputShowComponent } from './input-show/input-show.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ModalShowComponent } from './modal-show/modal-show.component';
import { MunicipioModule } from './resources/municipio/municipio.module';
import { NotificationsShowComponent } from './notifications-show/notifications-show.component';
import { PaginationShowComponent } from './pagination-show/pagination-show.component';
import { RouterModule } from '@angular/router';
import { SecurityComponent } from './security/security.component';
import { SwitchButtonShowComponent } from './switch-button-show/switch-button-show.component';
import{ TableService }  from './table-show/table.service';
import { TableShowComponent } from './table-show/table-show.component';
import { ToastshowComponent } from './toastshow/toastshow.component';
import { UpdatePageComponent } from './update-page/update-page.component';

export function getHighlightLanguages() {
  return {
    typescript: () => import('highlight.js/lib/languages/typescript'),
    css: () => import('highlight.js/lib/languages/css'),
    xml: () => import('highlight.js/lib/languages/xml')
  };
}

export function getCoreHightlightLoader() {
  return () => import('highlight.js/lib/core')
}

@NgModule({
  declarations: [
    AppComponent,
    FormErrorShowComponent,
    HomeComponent,
    ColorSystemComponent,
    SecurityComponent,
    AutocompleteDocComponent,
    DropdownShowComponent,
    ToastshowComponent,
    ModalShowComponent,
    AlertShowComponent,
    ButtonsShowComponent,
    InputShowComponent,
    CpfCnpjMaskComponent,
    DatepickerShowComponent,
    ComboboxShowComponent,
    AddRemoveShowComponent,
    SwitchButtonShowComponent,
    TableShowComponent,
    PaginationShowComponent,
    AutocompleteNewDocComponent,
    NotificationsShowComponent,
    GridShowComponent,
    UpdatePageComponent,
  ],
  imports: [
    HighlightModule,//esse módulo é para exibir codigos só usado aqui
    BrowserModule,
    HttpClientModule,
    DropdownModule,
    AppRoutingModule,
    sharedAngularComponentsModule,
    RouterModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    AutocompleteModule,
    ToastModule.forRoot(),
    BsDatepickerModule.forRoot(),
    AlertModule,
    ModalModuleLib,
    ButtonsModule,
    ColorModule,
    NotificationsModule,
    ClipboardModule,
    InputModule,
    CpfCnpjModule,
    DatepickerModule,
    ComboboxModule,
    SwitchButtonModule,
    PaginationsharedModule,
    RemoveAddFieldsModule,
    AddRemoveModule,
    TableModule,
    InputAutocompleteModule,
    MunicipioModule
  ],
  providers: [
    FormControlDirective,
    FormGroupDirective,
    AutocompleteService,
    TableService,
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: getCoreHightlightLoader(),
        languages: getHighlightLanguages()
      }
    }
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }