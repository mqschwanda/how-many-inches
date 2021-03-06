let startup = () => {
  _setEnvironmentVariables();
  _setBrowserPolicies();
  _generateAccounts();
  _setAdmins();
};

let _setEnvironmentVariables = () => {
  // let settings = Meteor.settings.private;
  let settings = {
    "mail_gun": "smtp://postmaster%40sandbox4f4770bff2004a619fa6400a0a860316.mailgun.org:87f244951d37a9558a3074710f50aa73@smtp.mailgun.org:587",
    "domain": "localhost:3000",
    "weather_underground": [ "fd3336ea08ec00ad" ]
  }
  // process.env.push( settings );
};

let _setBrowserPolicies = () => Modules.server.setBrowserPolicies();

let _generateAccounts = () => Modules.server.generateAccounts();

let _setAdmins = () => Modules.server.setAdmins();

Modules.server.startup = startup;
