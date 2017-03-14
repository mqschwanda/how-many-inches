/***
  The
***/

Template.home.hooks({
  created: () => {
    let template = Template.instance();

    template.latLng = new ReactiveVar( null );
    template.city = new ReactiveVar( null );
    template.zip = new ReactiveVar( null );
    template.inches = new ReactiveVar( null );
  },
  rendered: () => {},
  destroyed: () => {}
});

Template.home.helpers({
  location: () => {
    let template = Template.instance(),
        latLng   = Geolocation.latLng(),
        city     = null,
        zip      = null;

    template.latLng.set( latLng );
    // template.city.set( city );
    // template.zip.set( zip );

    Meteor.call( 'Wunderground', { lat: 1, lng: 1 }, ( error, response ) => {
      if ( !error ) {
        console.log( response );
        template.inches.set( response );
      } else {
        throw new Meteor.Error( error, 'ERROR.' );
      }
    });


  },
  inches: () => {
    let inches = Template.instance().inches.get();

    console.log( inches );
  },

});
