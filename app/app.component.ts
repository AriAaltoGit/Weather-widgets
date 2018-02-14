import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            <div class="col-cs-3">
                <weather-widget></weather-widget>
            </div>
        </div>
    `
})

export class AppComponent {}
