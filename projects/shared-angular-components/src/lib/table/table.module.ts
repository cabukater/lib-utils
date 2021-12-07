import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { ObjectValuesPipe } from './object-values.pipe';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    TableComponent,
    ObjectValuesPipe
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
  ], exports: [
    TableComponent,
    MatTableModule,
    MatSortModule,
    MatInputModule,
  ]
})
export class TableModule { }
