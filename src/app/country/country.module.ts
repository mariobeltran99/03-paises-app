import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { CountryComponent } from './pages/country/country.component';
import { TableCountriesComponent } from './components/table-countries/table-countries.component';
import { FindComponent } from './components/find/find.component';



@NgModule({
    declarations: [
        ByCapitalComponent,
        ByCountryComponent,
        ByRegionComponent,
        CountryComponent,
        TableCountriesComponent,
        FindComponent
    ],
    exports: [
        ByCapitalComponent,
        ByCountryComponent,
        ByRegionComponent,
        CountryComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ]
})
export class CountryModule { }
