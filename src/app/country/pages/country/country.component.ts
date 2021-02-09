import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/country.interfaces';


import { CountryService } from '../../services/country.service';

@Component({
    selector: 'app-country',
    templateUrl: './country.component.html',
    styles: [
    ]
})
export class CountryComponent implements OnInit {

    public country!: Country;

    constructor(
        private activateRoute: ActivatedRoute,
        private countryService: CountryService) { }

    ngOnInit(): void {

        this.activateRoute.params
            .pipe(
                switchMap(({ id }) => this.countryService.findByCode(id)),
            )
            .subscribe(country => this.country = country);

    }

}
