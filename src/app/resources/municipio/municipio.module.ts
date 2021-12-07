import { CommonModule } from '@angular/common';
import { GridModule } from 'projects/shared-angular-components/src/lib/grid/grid.module';
import { HttpClientModule } from '@angular/common/http';
import { Municipio } from './municipio.model';
import { MunicipioService } from './municipio.service';
import { MunicipioTableComponent } from './municipio-table/municipio-table.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    MunicipioTableComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    GridModule
  ],
  exports: [
    MunicipioTableComponent
  ],
  providers: [
    MunicipioService
  ]
})
export class MunicipioModule { }
