Meteor.methods({
  Wunderground( options ) {
    check( options, {
      lat: Number,
      lng: Number
    });

    return Modules.server.Wunderground( options );

    // let weather = Modules.server.Wunderground,
    //     data;

    // weather.conditions().request( '08833', ( error, response ) => {
    //   data = response.current_observation;
    //   let inches = { hour: data.precip_1hr_in, today: data.precip_today_in };
    //
    //   if ( !data ) {
    //     throw new Meteor.Error( 'weather-not-found', 'No weather found matching this location.' );
    //   }
    //   console.log( inches );
    //   return inches;
    //
    // });

  }
});
