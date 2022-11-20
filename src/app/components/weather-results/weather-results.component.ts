import { Component, Input } from '@angular/core';
import { WeatherList } from 'src/app/model/weather';

@Component({
  selector: 'app-weather-results',
  templateUrl: './weather-results.component.html',
  styleUrls: ['./weather-results.component.scss']
})
export class WeatherResultsComponent {
  @Input() city: string | undefined;
  @Input() weatherResults: WeatherList[] | undefined | null;
}
