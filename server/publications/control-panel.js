Meteor.publish( 'control-panel', () =>
  [ Invitations.find(), Meteor.users.find() ] );
