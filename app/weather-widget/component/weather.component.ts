import {Component} from '@angular/core';

import {WeatherService} from '../service/weather.service';

@Component({
    moduleId: module.id,
    selector: 'weather-widget',
    templateUrl: 'weather.component.html',
    styleUrls: ['weather.component.css'],
    providers: [WeatherService]
})
export class WeatherComponent {
    constructor(private service: WeatherService){
        this.service.getCurrentLocation();
    }
}

/*Angular is running in the development mode. Call enableProdMode() to enable the production mode.
core.um */