import applyRules from './helpers/apply-rules';

Invitations = new Meteor.Collection( 'invitations' );

applyRules( Invitations );

Invitations.attachSchema( new SimpleSchema({
  email: {
    type: String,
    label: "Email to send invitation to."
  },
  token: {
    type: String,
    label: "Invitation token."
  },
  role: {
    type: String,
    label: "Role to apply to the user."
  },
  date: {
    type: String,
    label: "Invitation Date"
  }
}) );
