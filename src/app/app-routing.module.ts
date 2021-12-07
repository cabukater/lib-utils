import { RouterModule, Routes } from '@angular/router';

import { AddRemoveShowComponent } from './add-remove-show/add-remove-show.component';
import { AlertShowComponent } from './alert-show/alert-show.component';
import { AuthGuard } from 'shared-angular-components'
import { AutocompleteDocComponent } from './autocomplete/autocomplete.component';
import { AutocompleteNewDocComponent } from './autocomplete-new/autocomplete-new.component';
import { ButtonsShowComponent } from './buttons-show/buttons-show.component';
import { ColorSystemComponent } from './color-system/color-system.component';
import { ComboboxShowComponent } from './combobox-show/combobox-show.component';
import { CpfCnpjMaskComponent } from './cpf-cnpj-mask/cpf-cnpj-mask.component';
import { DatepickerShowComponent } from './datepicker-show/datepicker-show.component';
import { DropdownShowComponent } from './dropdown-show/dropdown-show.component';
import { FormErrorShowComponent } from './form-error/form-error.component'
import { GridShowComponent } from './grid-show/grid-show.component';
import { HomeComponent } from './home/home.component';
import { InputShowComponent } from './input-show/input-show.component';
import { ModalShowComponent } from './modal-show/modal-show.component';
import { NgModule } from '@angular/core';
import { NotificationsShowComponent } from './notifications-show/notifications-show.component';
import { PaginationShowComponent } from './pagination-show/pagination-show.component';
import { SecurityComponent } from './security/security.component';
import { SwitchButtonShowComponent } from './switch-button-show/switch-button-show.component'
import {TableShowComponent} from './table-show/table-show.component'
import { ToastshowComponent } from './toastshow/toastshow.component';
import { UpdatePageComponent } from './update-page/update-page.component';

const routes: Routes = [
  { path: 'valida-formulario', component: FormErrorShowComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '*', component: HomeComponent, pathMatch: 'full' },
  { path: 'color-system', component: ColorSystemComponent },
  { path: 'security', component: SecurityComponent },
  { path: 'autocomplete', component: AutocompleteDocComponent },
  { path: 'dropdown', component: DropdownShowComponent },
  { path: 'toast', component: ToastshowComponent },
  { path: 'alert', component: AlertShowComponent },
  { path: 'modal', component: ModalShowComponent },
  { path: 'buttons', component: ButtonsShowComponent },
  { path: 'inputs', component: InputShowComponent },
  { path: 'cpf-cnpj', component: CpfCnpjMaskComponent},
  { path: 'datepicker', component: DatepickerShowComponent},
  { path: 'combobox', component: ComboboxShowComponent},
  { path: 'add-remove', component: AddRemoveShowComponent},
  { path: 'add-remove', component: AddRemoveShowComponent},
  { path: 'toggle', component: SwitchButtonShowComponent},
  { path: 'table', component: TableShowComponent},
  { path: 'pagination', component: PaginationShowComponent},
  { path: 'notifications', component: NotificationsShowComponent},
  { path: 'auto', component: AutocompleteNewDocComponent},
  { path: 'grid', component: GridShowComponent},
  { path: 'update', component: UpdatePageComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard
  ]
})
export class AppRoutingModule {}
