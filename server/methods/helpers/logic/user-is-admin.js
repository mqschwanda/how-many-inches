/***
  Used to supply the parameter of a conditional, this function returns a boolean
  value check against the role of the user from the client side. Here we are
  checking if the user is an administrator
***/

export default function(){
  return Roles.userIsInRole(Meteor.user(),['admin']);
}
