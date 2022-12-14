import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from '../model/weather';

@Injectable()
export class WeatherService {
  url = 'https://api.openweathermap.org/data/2.5/forecast';
  params = {
    q: '',
    cnt: '40',
    units: 'metric',
    APPID: 'CHANGE_TO_YOUR_APP_ID'
  };

  constructor(private http: HttpClient) { }

  searchWeatherForCity(city: string): Observable<Weather> {
    return this.http.get<Weather>(`${this.url}?q=${city},GB&appid=${this.params.APPID}&units=${this.params.units}&cnt=${this.params.cnt}`);
  }
}
