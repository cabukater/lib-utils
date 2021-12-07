import { GridPagination, IGriService, IGridSchema } from 'projects/shared-angular-components/src/lib/grid/grid.schema';
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
    //return `${environment.apiEndpoint}${this.uri}`;
    return `http://apil5.funceme.br/${this.uri}`;
  }

  getUrlForId(id: number | string): string {
    return `${this.getUrl()}/${id}`;
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
}

