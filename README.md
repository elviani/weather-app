# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Acceptance Criteria
User Story – 5 day weather forecast

Description:

Our users travel between UK cities regularly and want to be able to see what they need to pack before they travel. Most users check the weather for their destinations for the coming week using the following service: https://openweathermap.org

API Endpoint: https://openweathermap.org/forecast5

API Key: xxxxx

As a weather app user

I want to see the weather for Birmingham, London, and Cardiff

So that I can know what clothes to take with me.

Given that I have selected no city

When I look at the page

Then I see no weather forecasts

Given that I have selected a city

When I look at the page

Then I see the weather for the next 5 days for that city

Given that I am looking at a weather prediction

When I look at each prediction

Then I see the following for that day/location:

· Temperature in Degrees Celsius

· Windspeed

· Weather description

· Weather icon

Given that I have chosen a different city

When I look at the page

Then I see the weather for the newly chosen city only 
