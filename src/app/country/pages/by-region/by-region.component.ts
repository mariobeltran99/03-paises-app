import { Component } from '@angular/core';
import { pipe } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../../interfaces/country.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
    selector: 'app-by-region',
    templateUrl: './by-region.component.html',
    styles: [
    ]
})
export class ByRegionComponent {

    public currentRegion = '';
    public countries: Country[] = [];

    regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];

    constructor(private countryService: CountryService) { }

    public findByRegion(region: string): void {
        if (region === this.currentRegion) {
            return;
        }
        this.currentRegion = region;
        this.countries = [];
        this.countryService.findByRegion(region)
            .subscribe(countries => this.countries = countries);
    }

    public activeRegion(region: string): string {
        return (region === this.currentRegion) ? 'btn-primary' : 'btn-outline-primary';
    }

}
