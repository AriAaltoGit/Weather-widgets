import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../service/weather.service';

import { Weather } from '../model/weather';

import { WEATHER_COLORS } from '../constants/constants';

import {Observable} from 'rxjs/Rx';
declare var Skycons: any; // This removes editor error from undefined Skycons. Skycons is imported in index.html.

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
    dataReceived = false;
    currentTime = Date();

    constructor(private service: WeatherService) { }

    ngOnInit() {
       // this.getCurrentLocation();
       
       /* Disable timer to test in ie browser. */
        let timer = Observable.timer(2000,60000);
        timer.subscribe(t=> {
            this.getCurrentLocation();
        });
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
        this.service.getCurrentWeather(this.pos.coords.latitude, this.pos.coords.longitude)
            .subscribe(weather => {
                this.weatherData.temp = weather["currently"]["temperature"],
                this.weatherData.summary = weather["currently"]["summary"],
                this.weatherData.wind = weather["currently"]["windSpeed"],
                this.weatherData.humidity = weather["currently"]["humidity"],
                this.weatherData.icon = weather["currently"]["icon"]
                    
                this.currentTime = new Date().toTimeString().slice(0,5); 
                //console.log("Weather: ", this.weatherData); // Test 
                //console.log("Weather: ", weather); // Test
                this.setIcon();
                this.dataReceived = true;
            },
                err => console.error(err));
    }

    getLocationName() {
        this.service.getLocationName(this.pos.coords.latitude, this.pos.coords.longitude)
            .subscribe(location => {
                //console.log(location); //Test location data
                this.currentLocation = location["results"][1]["formatted_address"];
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