/***
  The
***/

Template.home.hooks({
  created: () => {
    let  template = Template.instance(),
        noWeather = Session.get( "weather" ) == null;

    template.isLoading = new ReactiveVar( true );




    template.autorun( () => {
      let location = Geolocation.latLng();

      if ( noWeather ) Modules.client.getWeather( location );
    });
  },
  rendered: () => {},
  destroyed: () => {}
});

Template.home.helpers({
  // loading: () =>
  //   Session.get( "weather") == null,
  weather: () =>
    Session.get( "weather"),
  yesterday: () =>
    Session.get( "weather" ).yesterday,
  today: () =>
    Session.get( "weather" ).today,
  hour: () =>
    Session.get( "weather" ).hour,
  formatDate: ( date ) =>
    moment.unix( date ).format("dddd, MMMM Do YYYY"),
  toWeatherIcon: ( icon ) => {
    let snow    = "snowflake-cold",
        snowing = icon.includes( "snow" ),
        rain    = "raindrop",
        raining = icon.includes( "rain" ),
        cloud   = "cloudy",
        cloudy  = icon.includes( "cloud" ),
        sun     = "day-sunny",
        sunny   = icon.includes( "sun" ),
        string;

    if (sunny) {
      string = sun;
    } else if (cloudy) {
      string = cloud;
    } else if (raining) {
      string = rain;
    } else if (snowing) {
      string = snow;
    }

    return string;
  },
});
