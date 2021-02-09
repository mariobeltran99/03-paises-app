import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ByCountryComponent } from './pais/pages/by-country/by-country.component';
import { ByRegionComponent } from './pais/pages/by-region/by-region.component';

@NgModule({
  declarations: [
    AppComponent,
    ByCountryComponent,
    ByRegionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
