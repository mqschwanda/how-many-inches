/***
  This function builds the server side terminal log function that are used
  throughout the application.
***/

export default log = {
  nonAdminUserTriedTo(message){ // log for unauthorized admin activity
    console.log(chalk.red.bgYellow.bold(`Non-Admin user tried to ${message}`));
  },
  error(message){ // general error log
    console.log(chalk.bgRed.bold(`ERROR: ${message}`));
  }
}
