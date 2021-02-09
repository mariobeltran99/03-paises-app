import { Component } from '@angular/core';


import { Country } from '../../interfaces/country.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
    selector: 'app-by-country',
    templateUrl: './by-country.component.html',
    styles: [
    ]
})
export class ByCountryComponent {

    public term = '';
    public notFound = false;
    public countries: Country[] = [];

    constructor(private countryService: CountryService) { }

    public find(term: string): void {
        this.term = term;
        this.notFound = false;
        this.countryService.findCountry(term)
            .subscribe(countries => {
                this.countries = countries;
            }, (err) => {
                this.notFound = true;
                this.countries = [];
            });

    }

    public suggestion(term: string): void {
        this.notFound = false;
        // TODO: Crear sugerencias.
        console.log(term);
    }

}
