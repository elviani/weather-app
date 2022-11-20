import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherService } from './services/weather.service';
import { CitySelectionComponent } from './components/city-selection/city-selection.component';
import { WeatherResultsComponent } from './components/weather-results/weather-results.component';

@NgModule({
  declarations: [
    AppComponent,
    CitySelectionComponent,
    WeatherResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports: [ CitySelectionComponent, WeatherResultsComponent],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
