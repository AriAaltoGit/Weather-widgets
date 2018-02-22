import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../service/weather.service';

import { Weather } from '../model/weather';

import { WEATHER_COLORS } from '../constants/constants';
//import 'skycons';
declare var Skycons: any; // This removes editor error from undefined Skycons

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
    icons = new Skycons();

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
                this.setIcon();
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

    toggleUnits() {
        this.toggleTempUnits();
        this.toggleSpeedUnits();
    }

    toggleTempUnits() {
        if (this.currentTempUnit == "fahrenheit") {
            this.currentTempUnit = "celsius";
        } else {
            this.currentTempUnit = "fahrenheit";
        };
    }

    toggleSpeedUnits() {
        if (this.currentSpeedUnit == "m/s") {
            this.currentSpeedUnit = "mph";
        } else {
            this.currentSpeedUnit = "m/s";
        };
    }

    setIcon() {
        this.icons.add("icon", this.weatherData.icon);
        this.icons.play();
    };

    setStyles(): Object {
        /* Check first if icon is set. This is binded instead of subscribed.*/
        if (this.weatherData.icon) {
            this.icons.color = WEATHER_COLORS[this.weatherData.icon]["color"];
            return WEATHER_COLORS[this.weatherData.icon];
        } else {
            this.icons.color = WEATHER_COLORS["default"]["color"];
            return WEATHER_COLORS["default"];
        }
    }
}

/*Angular is running in the development mode. Call enableProdMode() to enable the production mode.
core.um */