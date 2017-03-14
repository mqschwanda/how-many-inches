Template.users.onCreated( () => {
  Template.instance().subscribe( 'users' );
});

Template.users.helpers({
  users: () => {
    let users = Meteor.users.find();
    if ( users ) { return users; }
  },
  hasInvitations: () => Invitations.find().count() < 1 ? false : true,
  invitations: () => {
    let invitations = Invitations.find();
    if ( invitations ) { return invitations; }
  }
});

Template.users.events({
  'change [name="userRole"]': function( event, template ) {
    let role = $( event.target ).find( 'option:selected' ).val();

    Meteor.call( "setRoleOnUser", {
      user: this._id,
      role: role
    }, ( error, response ) => {
      if ( error ) {
        Bert.alert( error.reason, "warning" );
      }
    });
  },
  'click .revoke-invite': ( event, template ) => {
    if ( confirm( "Are you sure? This is permanent." ) ) {
      Meteor.call( "revokeInvitation", this._id, ( error, response ) => {
        if ( error ) {
          Bert.alert( error.reason, "warning" );
        } else {
          Bert.alert( "Invitation revoked!", "success" );
        }
      });
    }
  },
  'click [data-toggle="collapse"]': ( event, template ) => {
    $("#user-list-body").on("hide.bs.collapse", () => {
      $(event.target).html('<i class="fa fa-chevron-down"></i> Open');
    });
    $("#user-list-body").on("show.bs.collapse", () => {
      $(event.target).html('<i class="fa fa-chevron-up"></i> Close');
    });
  }
});
