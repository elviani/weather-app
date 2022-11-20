import { Component } from '@angular/core';
import { catchError, map, Observable} from 'rxjs';
import { Weather, WeatherList } from './model/weather';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Weather';
  cityList= ['Birmingham', 'London', 'Cardiff'];
  currentCity: string | undefined;
  weatherResult$: Observable<WeatherList[] | undefined | any> = new Observable<WeatherList[] | undefined | any>();
  errorMessage: any = '';
  constructor(private weatherService: WeatherService){
  }

  searchCity(city: string){
    this.currentCity = city;
    if(city){
      this.weatherResult$ = this.weatherService.searchWeatherForCity(city).pipe(
        map((data: Weather) => data.list?.filter((weatherList,index) => index % 8 === 0)),
        catchError((err: any) => {
          this.errorMessage = err.message;
          return err;
        })
      );
    }
  }
}
