import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { Country } from '../interfaces/country.interfaces';

@Injectable({
    providedIn: 'root'
})
export class CountryService {

    private baseURL = 'https://restcountries.eu/rest/v2';

    constructor(private http: HttpClient) { }

    public findCountry(term: string): Observable<Country[]> {
        const url = `${this.baseURL}/name/${term}`;

        return this.http.get<Country[]>(url);
    }

    public findByCapital(term: string): Observable<Country[]> {
        const url = `${this.baseURL}/capital/${term}`;

        return this.http.get<Country[]>(url);
    }

    public findByCode(code: string): Observable<Country> {
        const url = `${this.baseURL}/alpha/${code}`;
        return this.http.get<Country>(url);
    }

}
