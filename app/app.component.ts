import { Component } from '@angular/core';

@Component({
    selector: 'weather-app',
    template: `
        <div class="container">
            <div class="row">
            <div class="col-sm-4 widget-column">
                <weather-widget></weather-widget>
            </div>
            <div class="col-sm-4 widget-column">
                <weather-widget target_lat=35.6584421 target_long=139.7328635></weather-widget>
            </div>
            <div class="col-sm-4 widget-column">
                <weather-widget target_lat=40.7406905 target_long=-73.9938438></weather-widget>
            </div>
            </div>
            <div class="row">
            <div class="col-sm-4 widget-column">
                <weather-widget target_lat=52.3650691 target_long=4.9040238></weather-widget>
            </div>
            <div class="col-sm-4 widget-column">
            <weather-widget target_lat=25.092535 target_long=55.1562243></weather-widget>
            </div>
            </div>
        </div>
    `,
    styles: [``]
})

export class AppComponent { }
