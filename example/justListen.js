var Stream = require('../index.js');
var conf = require('./config')

var stream = new Stream({
    consumer_key:conf.consumer_key,
    consumer_secret:conf.consumer_secret,
    access_token_key:conf.access_token_key,
    access_token_secret:conf.access_token_secret,
    track:conf.track
});

//listen stream data
stream.on('data', function(json) {
    console.log('@' + json.user.screen_name + ' - ' + json.created_at + ' - ' + json.text);
    //if any error please check the limits of API
});

//create stream
stream.stream();
console.log('stream started')