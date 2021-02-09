import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ByCountryComponent } from './pais/pages/by-country/by-country.component';

@NgModule({
  declarations: [
    AppComponent,
    ByCountryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
