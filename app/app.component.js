"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'weather-app',
            template: "\n        <div class=\"container\">\n            <div class=\"row\">\n            <div class=\"col-sm-4 widget-column\">\n                <weather-widget></weather-widget>\n            </div>\n            <div class=\"col-sm-4 widget-column\">\n                <weather-widget target_lat=35.6584421 target_long=139.7328635></weather-widget>\n            </div>\n            <div class=\"col-sm-4 widget-column\">\n                <weather-widget target_lat=40.7406905 target_long=-73.9938438></weather-widget>\n            </div>\n            </div>\n            <div class=\"row\">\n            <div class=\"col-sm-4 widget-column\">\n                <weather-widget target_lat=52.3650691 target_long=4.9040238></weather-widget>\n            </div>\n            <div class=\"col-sm-4 widget-column\">\n            <weather-widget target_lat=25.092535 target_long=55.1562243></weather-widget>\n            </div>\n            </div>\n        </div>\n    ",
            styles: [""]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map