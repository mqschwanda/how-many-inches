const Wunderground = require( 'wundergroundnode' );
let apiKey = 'fd3336ea08ec00ad';
let weather = new Wunderground( apiKey );

let getWeather = () => {
  weather.conditions().request( '08833', ( error, response ) => {
    data = response.current_observation;
    let inches = { hour: data.precip_1hr_in, today: data.precip_today_in };

    if ( !data ) {
      throw new Meteor.Error( 'weather-not-found', 'No weather found matching this location.' );
    }
    console.log( inches );
    return inches;
  });
}

Modules.server.Wunderground = getWeather;
