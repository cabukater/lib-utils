import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaginationComponent} from './pagination.component'
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PaginationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PaginationModule
  ],
  exports:[
    PaginationComponent
  ]
})
export class PaginationsharedModule { }
