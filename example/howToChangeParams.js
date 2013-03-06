var Stream = require('../index');
var conf = require('./config')

var stream = new Stream({
    consumer_key:conf.consumer_key,
    consumer_secret:conf.consumer_secret,
    access_token_key:conf.access_token_key,
    access_token_secret:conf.access_token_secret,
    track:conf.track
});

//dummy checker for detect changing
var didUChangedParams = false;

//listen stream data
stream.on('data', function (json) {
    try {
        console.log('@' + json.user.screen_name + ' - ' + json.created_at + ' - ' + json.text);
    } catch (e) {
        //if any error please check the limits of API
        console.log(json)
    }
});

//if any close stream again
stream.on('close', function () {
    console.log('close');
    //restart after closing
    stream.stream();
});

//if any error please show me
stream.on('error', function (json) {
    console.log('error ' + json);
});

//yes we connected
stream.on('connected', function () {
    console.log('connected');
});

//lub-dub-lub-dub-lub-dub
stream.on('heartbeat', function (json) {
    console.log('heartbeat');
    if (!didUChangedParams) {
        //let's change tracks filter
        didUChangedParams = !didUChangedParams;
        stream.changeParams({track:'new,sample,track,keywords,to,new,streaming'});
        //close old one
        stream.destroy();
    }
});

//start engine
stream.stream();
console.log('stream started')