"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var WeatherService = /** @class */ (function () {
    function WeatherService() {
    }
    WeatherService.prototype.getCurrentLocation = function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (pos) {
                console.log("Position: ", pos.coords.latitude, ",", pos.coords.longitude);
                return [pos.coords.latitude, pos.coords.longitude];
            }, function (err) { return console.error("Unable to get the position - ", err); });
        }
        else {
            console.error("Geolocation is not available");
            return [0, 0];
        }
    };
    WeatherService = __decorate([
        core_1.Injectable()
    ], WeatherService);
    return WeatherService;
}());
exports.WeatherService = WeatherService;
//# sourceMappingURL=weather.service.js.map