"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var weather_service_1 = require("../service/weather.service");
var weather_1 = require("../model/weather");
var constants_1 = require("../constants/constants");
var Rx_1 = require("rxjs/Rx");
var WeatherComponent = /** @class */ (function () {
    function WeatherComponent(service) {
        this.service = service;
        //pos: Position;
        this.posLat = 0;
        this.posLong = 0;
        this.weatherData = new weather_1.Weather(null, null, null, null, null); //Initialize before data
        this.currentSpeedUnit = "m/s";
        this.currentTempUnit = "celsius";
        this.currentLocation = "";
        this.icons = new Skycons();
        this.dataReceived = false;
        this.currentTime = Date();
    }
    WeatherComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.target_long && this.target_long) {
            this.getCurrentWeatherFromInputCoords();
        }
        else {
            /* For single fetch. */
            // this.getCurrentLocation();
            /* Disable timer to test in ie browser. */
            var timer = Rx_1.Observable.timer(2000, 60000);
            timer.subscribe(function (t) {
                _this.getCurrentLocation();
            });
        }
    };
    WeatherComponent.prototype.getCurrentLocation = function () {
        var _this = this;
        this.service.getCurrentLocation()
            .subscribe(function (position) {
            _this.posLat = position.coords.latitude;
            _this.posLong = position.coords.longitude;
            _this.getCurrentWeather();
            _this.getLocationName();
        }, function (err) { return console.error(err); });
    };
    WeatherComponent.prototype.getCurrentWeatherFromInputCoords = function () {
        this.posLat = this.target_lat;
        this.posLong = this.target_long;
        this.getCurrentWeather();
        this.getLocationName();
    };
    WeatherComponent.prototype.getCurrentWeather = function () {
        var _this = this;
        this.service.getCurrentWeather(this.posLat, this.posLong)
            .subscribe(function (weather) {
            _this.weatherData.temp = weather["currently"]["temperature"],
                _this.weatherData.summary = weather["currently"]["summary"],
                _this.weatherData.wind = weather["currently"]["windSpeed"],
                _this.weatherData.humidity = weather["currently"]["humidity"],
                _this.weatherData.icon = weather["currently"]["icon"];
            _this.currentTime = new Date().toTimeString().slice(0, 5);
            //console.log("Weather: ", this.weatherData); // Test 
            //console.log("Weather: ", weather); // Test
            _this.setIcon();
            _this.dataReceived = true;
        }, function (err) { return console.error(err); });
    };
    WeatherComponent.prototype.getLocationName = function () {
        var _this = this;
        this.service.getLocationName(this.posLat, this.posLong)
            .subscribe(function (location) {
            //console.log(location); //Test location data
            _this.currentLocation = location["results"][1]["formatted_address"];
        });
    };
    WeatherComponent.prototype.toggleUnits = function () {
        this.toggleTempUnits();
        this.toggleSpeedUnits();
    };
    WeatherComponent.prototype.toggleTempUnits = function () {
        if (this.currentTempUnit == "fahrenheit") {
            this.currentTempUnit = "celsius";
        }
        else {
            this.currentTempUnit = "fahrenheit";
        }
        ;
    };
    WeatherComponent.prototype.toggleSpeedUnits = function () {
        if (this.currentSpeedUnit == "m/s") {
            this.currentSpeedUnit = "mph";
        }
        else {
            this.currentSpeedUnit = "m/s";
        }
        ;
    };
    WeatherComponent.prototype.setIcon = function () {
        this.icons.add("icon", this.weatherData.icon);
        this.icons.play();
        console.log("icons: ", this.icons);
    };
    ;
    WeatherComponent.prototype.setStyles = function () {
        /* Check first if icon is set. This is binded instead of subscribed.*/
        if (this.weatherData.icon) {
            this.icons.color = constants_1.WEATHER_COLORS[this.weatherData.icon]["color"];
            return constants_1.WEATHER_COLORS[this.weatherData.icon];
        }
        else {
            this.icons.color = constants_1.WEATHER_COLORS["default"]["color"];
            return constants_1.WEATHER_COLORS["default"];
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], WeatherComponent.prototype, "target_lat", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], WeatherComponent.prototype, "target_long", void 0);
    WeatherComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'weather-widget',
            templateUrl: 'weather.component.html',
            styleUrls: ['weather.component.css'],
            providers: [weather_service_1.WeatherService]
        }),
        __metadata("design:paramtypes", [weather_service_1.WeatherService])
    ], WeatherComponent);
    return WeatherComponent;
}());
exports.WeatherComponent = WeatherComponent;
/*Angular is running in the development mode. Call enableProdMode() to enable the production mode.
core.um */ 
//# sourceMappingURL=weather.component.js.map