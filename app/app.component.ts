import { Component } from '@angular/core';

@Component({
    selector: 'weather-app',
    template: `
        <div class="container">
            <div class="row">
                <div class="col-sm-4 widget-column">
                    <weather-widget iconTarget="icon1" ></weather-widget>
                </div>
                <div class="col-sm-4 widget-column">
                    <weather-widget iconTarget="icon2" targetLat=35.6584421 targetLong=139.7328635></weather-widget>
                </div>
                <div class="col-sm-4 widget-column">
                    <weather-widget iconTarget="icon3"  targetLat=40.7406905 targetLong=-73.9938438></weather-widget>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4 widget-column">
                    <weather-widget iconTarget="icon4" targetLat=52.3650691 targetLong=4.9040238></weather-widget>
                </div>
                <div class="col-sm-4 widget-column">
                    <weather-widget iconTarget="icon5" targetLat=25.092535 targetLong=55.1562243></weather-widget>
                </div>
                <div class="col-sm-4 widget-column">
                    <weather-widget iconTarget="icon6" targetLat=60.1697530 targetLong=24.9490830></weather-widget>
                </div>
            </div>
        </div>
    `,
    styles: [``]
})

export class AppComponent { }
