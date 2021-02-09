import { Component, Input } from '@angular/core';


import { Country } from '../../interfaces/country.interfaces';

@Component({
    selector: 'app-table-countries',
    templateUrl: './table-countries.component.html',
    styles: []
})
export class TableCountriesComponent {

    @Input()
    public countries: Country[] = [];

    constructor() { }

}
