import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from "@angular/common"

import { BrowserModule } from '@angular/platform-browser';
import { AlertService } from './alert.service';


@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports:[

  ],
  providers:[
    AlertService
  ]
})
export class AlertModule { }
