var SteamUser = require('steam-user');


const config = require('./config');




var client = new SteamUser();


var logOnOptions = {
"accountName": config.accountName,
"password": config.password,
"twoFactorCode": ""};


//Login
client.logOn(logOnOptions);
client.on('loggedOn', function() {
console.log("Logged into Steam");
client.enableTwoFactor(function() {
for (var i = 0; i < arguments.length; i++) {
console.log(arguments[i]);
}
});


});