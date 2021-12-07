import { Injectable } from '@angular/core';
//import {getBackHost} from '../util'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {
    private headers = new HttpHeaders();

    private url: string;

    constructor(private http: HttpClient) {
        //this.url = getBackHost('').replace('/rest/', '');
    }

    logout() {
        return this.http.get(`${this.url}/logout`);
    }

    isAuthenticated() {
        // pega o token cadastro
        const token = sessionStorage.getItem('username');
        const password = sessionStorage.getItem('password');

        // checa se existe token
        if (token && password) {
            console.log('token');
        return true;
        }
        return false;
        }
    
}