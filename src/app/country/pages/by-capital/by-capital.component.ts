import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
    selector: 'app-by-capital',
    templateUrl: './by-capital.component.html',
    styles: [
    ]
})
export class ByCapitalComponent {

    public term = '';
    public notFound = false;
    public countries: Country[] = [];

    constructor(private countryService: CountryService) { }

    public findByCapital(term: string): void {
        this.notFound = false;
        this.term = term;
        this.countryService.findByCapital(term)
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
