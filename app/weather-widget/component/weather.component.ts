import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../service/weather.service';

import { Weather } from '../model/weather';

@Component({
    moduleId: module.id,
    selector: 'weather-widget',
    templateUrl: 'weather.component.html',
    styleUrls: ['weather.component.css'],
    providers: [WeatherService]
})
export class WeatherComponent implements OnInit {
    pos: Position;
    weatherData = new Weather(null, null, null, null, null);  //Initialize before data
    currentSpeedUnit = "m/s";
    currentTempUnit = "celsius";
    currentLocation = "";

    constructor(private service: WeatherService) { }

    ngOnInit() {
        this.getCurrentLocation();
    }

    getCurrentLocation() {
        this.service.getCurrentLocation()
            .subscribe(position => {
                this.pos = position;
                this.getCurrentWeather();
                this.getLocationName();
            },
                err => console.error(err));
    }

    getCurrentWeather() {
        this.service.getCurrentWeather(this.pos.coords.latitude, this.pos.coords.latitude)
            .subscribe(weather => {
                this.weatherData.temp = weather["currently"]["temperature"],
                this.weatherData.summary = weather["currently"]["summary"],
                this.weatherData.wind = weather["currently"]["windSpeed"],
                this.weatherData.humidity = weather["currently"]["humidity"],
                this.weatherData.icon = weather["currently"]["icon"]  
                console.log("Weather: ", this.weatherData); // TESTING
                console.log("Weather: ", weather); 
            },
                err => console.error(err));
    }

    getLocationName() {
        this.service.getLocationName(this.pos.coords.latitude, this.pos.coords.longitude)
        .subscribe(location => {
            console.log(location); //Test
            this.currentLocation = location["results"][1]["formatted_address"];
            console.log("Name: ", this.currentLocation);

        });
    }
}

/*Angular is running in the development mode. Call enableProdMode() to enable the production mode.
core.um */