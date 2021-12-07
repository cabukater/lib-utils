import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
	providedIn: 'root'
})
export class TableService {
	constructor(
		private http: HttpClient
	) { }
	getFiles() {
		return this.http.get(`http://localhost:3000/paginationResponse/`)
		.pipe(
			catchError(e =>
			throwError(
			console.log('erro')
		  )
		)
	)
 }
}
