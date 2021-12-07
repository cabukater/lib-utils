import { Component, OnInit } from '@angular/core';

import { AlertService } from 'projects/shared-angular-components/src/public-api';
import { Municipio } from '../resources/municipio/municipio.model';

@Component({
  selector: 'app-grid-show',
  templateUrl: './grid-show.component.html',
  styleUrls: ['./grid-show.component.scss']
})
export class GridShowComponent implements OnInit {

  public municipios: Municipio[] = [];

  public count: string;

  myCount = 10;
  importModule = `import { GridModule } from 'shared-angular-components';`
  codeModule = `  imports: [
    ...
    GridModule,
     ...
  ],`
  codeConstructor= `constructor(
    private alertService: AlertService ) { }`
  importService = `import {AlertService} from  'shared-angular-components' `
  codeModel = `  export interface IMunicipiosPaginatedResponse extends IGridPaginateResponse {
    data: Municipio[];
  }
  
  export class Municipio implements IModel {
  
    constructor(
      public id: number,
      public nome: string,
      public uf: string
    ) { }
  
    toJSON(): object {
      const serialized = Object.assign(this);
      return serialized;
    }
  
    equals(obj: Municipio): boolean {
      return this.id === obj.id;
    }
  }`;

  codeService = `  import { GridPagination, IGriService, IGridSchema } from 'shared-angular-components';
  import { IMunicipiosPaginatedResponse, Municipio } from './municipio.model';
  
  import { HttpClient } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  
  @Injectable({
    providedIn: 'root'
  })
  export class MunicipioService implements IGriService {
  
    uri = 'rest/adm/municipio';
  
    constructor(
      private http: HttpClient
    ) { }
  
    getUrl(): string {
      //return \`\${environment.apiEndpoint}\${this.uri}\`;
      return \`http://apil5.funceme.br/\${this.uri}\`;
    }
  
    getUrlForId(id: number | string): string {
      return \`\${this.getUrl()}/\${id}\`;
    }
  
    paginate(pagination: GridPagination, gridSchema: IGridSchema): Observable<any> {
      return this.http.get<any>(this.getUrl() + '?' + pagination.toString(gridSchema));
    }
  
    parsePaginateResponse(response): IMunicipiosPaginatedResponse {
      return {
        total: response.data.total_results,
        data: response.data.list.map(item => new Municipio(item.id, item.nome, item.uf))
      };
    }
  
    patch(obj: any): Observable<any> {
      return this.http.patch<any>(this.getUrl(), obj);
    }
  
    pick(obj: any): Observable<any> {
      return this.http.get<any>(this.getUrl());
    }
  }`;

  codeGridTS = `  import { Component, EventEmitter, OnInit, Output } from '@angular/core';
  import { GridInputFormat, GridSelectionModeType, IGridSchema } from 'shared-angular-components';
  
  import { GridTdActionComponent } from 'shared-angular-components';
  import { GridTdTextComponent } from 'shared-angular-components';
  import { Municipio } from '../municipio.model';
  import { MunicipioService } from '../municipio.service';
  
  @Component({
    selector: 'app-municipio-table',
    templateUrl: './municipio-table.component.html',
    styleUrls: ['./municipio-table.component.scss']
  })
  export class MunicipioTableComponent implements OnInit {
  
    @Output() selectionChanged: EventEmitter<any[]> = new EventEmitter();
    @Output() throwError: EventEmitter<any> = new EventEmitter();
  
    public gridSchema: IGridSchema;
  
    public data: Municipio[] = [];
  
    constructor(municipioService: MunicipioService) {
  
      this.gridSchema = {
        service: municipioService,
        enableSearch: true,
        selectionMode: GridSelectionModeType.MULTI_SELECTION,
        pagination: {
          page: 1,
          limit: 5,
          sortColumn: 'uf',
          filters: {
            uf: 'SP'
          }
        },
        parseSearchParam(search): string {
          return 'nome-lk=' + search;
        },
        columns: [
          {
            title: 'ID',
            field: 'id',
            ordenable: true,
            editable: true,
            format: GridInputFormat.CURRENCY,
            render: GridTdTextComponent,
            getData(obj: Municipio): number {
              return obj.id;
            }
          },
          {
            title: 'Municipio',
            field: 'nome',
            ordenable: true,
            editable: true,
            render: GridTdTextComponent,
            getData(obj: Municipio): string {
              return obj.nome;
            }
          },
          {
            title: 'UF',
            field: 'uf',
            ordenable: false,
            render: GridTdTextComponent,
            getData(obj: Municipio): string {
              return obj.uf;
            }
          }
        ],
        actions: [
          {
            title: 'Dados',
            label: 'Visualizar dados',
            color: 'primary',
            icon: 'list',
            render: GridTdActionComponent,
            action(obj: Municipio): void {
              console.log('Visualizar dados do município');
              console.log(obj);
            }
          }
        ]
      };
    }
  
    ngOnInit(): void {
    }
  
    changeSelection($event): void {
      this.selectionChanged.emit($event);
    }
  
    err($event): void {
      this.throwError.emit($event);
    }
  }`;
  codeGridHTML = `<lib-grid-table [schema]="gridSchema" (selectionChanged)="changeSelection($event)" (throwError)="err($event)"></lib-grid-table>`;

  constructor(
    private alertService: AlertService ) { }

  municipioSelecionado($event): void {
    this.municipios = $event;
  }

  ngOnInit(): void {
     
  }

  openAlertError() {
    this.alertService.errorAlert()
  }

  openAlertSuccess() {
    this.alertService.successAlert()
  }

  openAlertWarning() {
    this.alertService.warningAlert();
 }

 close() {
   this.alertService.closeAlert()
 }

 openAlertLoading() {
    this.alertService.loadingAlert();
    setTimeout(() => {this.close()}, 1000 )
  }

}
