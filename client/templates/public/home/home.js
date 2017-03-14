/***
  The
***/

Template.home.hooks({
  created: () => {
    let template = Template.instance();

    template.latLng = new ReactiveVar( null );
    template.city = new ReactiveVar( null );
    template.zip = new ReactiveVar( null );
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
  },
  inches: () => {
    let template = Template.instance(),
        latLng = template.latLng.get();

        console.log( latLng );
  },
});
