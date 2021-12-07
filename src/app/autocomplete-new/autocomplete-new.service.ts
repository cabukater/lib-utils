import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})





export class AutocompleteService {
 


 url ='http://localhost:3000/pokemons';
  constructor(private http: HttpClient) {}


  getItems() {
			return this.http.get(`${this.url}`).pipe(
      
      )
	}

}