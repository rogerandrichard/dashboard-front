var config = require('./config');
var client = require('twilio')(config.accountSid, config.authToken);

module.exports.sendSms = function(to, message, callback) {
  client.messages.create({
    body: message,
    to: to,
    from: config.sendingNumber
    // mediaUrl: 'http://www.yourserver.com/someimage.png'
  }, function(err, data) {
    if (err) {
      console.error('Could not notify administrator');
      console.error(err);
      callback(err);
    } else {
      console.log('Administrator notified');
      callback(null, data);
    }
  });
};