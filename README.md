# Angular weather widget
The weather widget uses Angular 5 framework to compose a weather widget 
service. The widget requests users current location and uses that 
location to fetch weather data from The darksky weather service.
Weather data is updated in minute interval. The widget layout is 
made with Bootstrap 4. 

This widget is tested with Firefox 58. There may be issues with ie related
to weather update loop. 
Free calls to darksky weather api is limited to 1000 calls per day.

The widget uses node server for distribution to Heroku and
lite-server for development. This is configured from package.json. 

The widget is set to production mode in main.ts for Heroku, but the code is not
packed into distribution format. 

