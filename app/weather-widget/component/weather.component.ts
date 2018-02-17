import { Component } from '@angular/core';

import { WeatherService } from '../service/weather.service';

import {Weather} from '../model/weather';

@Component({
    moduleId: module.id,
    selector: 'weather-widget',
    templateUrl: 'weather.component.html',
    styleUrls: ['weather.component.css'],
    providers: [WeatherService]
})
export class WeatherComponent {
    pos: Position;
    weatherData = new Weather(null,null,null,null,null);  //Initialize before

    constructor(private service: WeatherService) {
        this.service.getCurrentLocation()
            .subscribe(position => {
                this.pos = position
                this.service.getCurrentWeather(this.pos.coords.latitude, this.pos.coords.latitude)
                    .subscribe(weather => console.log(weather),
                        err => console.error(err));
            },
            err => console.error(err));
    }
}

/*Angular is running in the development mode. Call enableProdMode() to enable the production mode.
core.um */