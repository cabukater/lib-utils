import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';



@Injectable({
    providedIn: 'root'
})
export class SidemenuService {
 constructor() {
     this.teste();
 }
  /*  getMenuLinks() {
        const username = sessionStorage.getItem('username');
        const password = sessionStorage.getItem('password');
        const headers = new HttpHeaders(
            {
                'Authorization': 'Basic '
                    + btoa(`${username}:${password}`)
            });
        return this.http.get(this.api, { headers });
    }
*/
    teste(){
       // console.log(environment.api)
    }


}
