import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-city-selection',
  templateUrl: './city-selection.component.html',
  styleUrls: ['./city-selection.component.scss']
})
export class CitySelectionComponent {
  @Output() searchCity: EventEmitter<string> = new EventEmitter();
  @Input() cityList!: string[];

  currentCity = '';

  constructor(){
  }

  changeCity() {
    this.searchCity.emit(this.currentCity);
  }

}
