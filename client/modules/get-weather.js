let getWeather = ( latLng ) => {
  let conditions = new Object;

  if ( latLng ) {
    let base     = 'https://api.wunderground.com/api/',
        key      = 'fd3336ea08ec00ad/',
        features = 'yesterday/conditions/hourly10day/',
        query    = `q/${ latLng.lat },${ latLng.lng }.json`,
        url      = base + key + features + query;

    HTTP.get( url, { /* options */ }, ( error, response ) => {
      if ( !error ) {
        let data       = response.data,
            yesterday  = data.history.dailysummary[0],
            today      = data.current_observation,
            forecast   = data.hourly_forecast,
            hour       = new Array;
        // build object from yesterdays weather
        conditions.yesterday = {
          "precip": yesterday.precipi,
          "rain": yesterday.rain,
          "snow": yesterday.snow,
          "snowdepth": yesterday.snowdepth,
          "snowfall": yesterday.snowfalli
        };
        // built object from todays weather
        conditions.today = {
          "icon": today.icon,
          "local_epoch": today.local_epoch,
          "precip_1hr_in": today.precip_1hr_in,
          "precip_today_in": today.precip_today_in,
          "conditions": today.weather
        };
        // build object for each hour from forecast
        for ( let i = 0; i < forecast.length; i++ ) {
          let each = forecast[ i ];
          hour[ i ] = {
            "epoch": each.FCTTIME.epoch,
            "icon": each.icon,
            "condition": each.condition,
            "qpf": each.qpf.english,
            "snow": each.snow.english
          }
        }
        conditions.hour = hour;

        Session.set( "weather", conditions );

      } else {
        Bert.alert( error.reason, "Error getting weather data from geolocation" );
      }
    });
  }

  // return conditions;
}

Modules.client.getWeather = getWeather;
