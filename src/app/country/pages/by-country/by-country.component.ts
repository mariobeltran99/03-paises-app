import { Component } from '@angular/core';


import { Country } from '../../interfaces/country.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
    selector: 'app-by-country',
    templateUrl: './by-country.component.html',
    styles: [`
        ul li {
            cursor: pointer;
        }
    `]
})
export class ByCountryComponent {

    public term = '';
    public notFound = false;
    public countries: Country[] = [];
    public suggestions: Country[] = [];
    public show = false;

    constructor(private countryService: CountryService) { }

    public find(term: string): void {
        this.term = term;
        this.show = false;
        this.notFound = false;
        this.suggestions = [];
        this.countryService.findCountry(term)
            .subscribe(countries => {
                this.countries = countries;
            }, (err) => {
                this.notFound = true;
                this.countries = [];
            });

    }

    public getSuggestions(term: string): void {
        this.notFound = false;
        this.show = true;
        this.term = term;
        this.countryService
            .findCountry(term)
            .subscribe(
                countries => this.suggestions = countries.splice(0, 5),
                (err) => this.suggestions = []
            );

    }

}
