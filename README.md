twitter-public-stream - 0.0.2
=============================

Simple Node.js Twitter (API 1.1) public stream client https://dev.twitter.com/docs/streaming-apis/streams/public

Install
---------
```npm install twitter-public-stream```

Usage
---------
```javascript
var Stream = require('twitter-public-stream');
var stream = new Stream({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: '',
	track:''
});

//create stream
stream.stream();

//listen stream data
stream.on('data', function(json) {
  console.log(json);
});
```

Events
---------
- ```data```        - stream data in JSON format
- ```garbage```     - stream data who can't be parsed to JSON
- ```close```       - stream close event (stream connection closed)
- ```error```       - error event (request error, response error, response status code greater than 200)
- ```connected```   - stream created
- ```heartbeat```   - twitter emitted heartbeat

Methods
---------
- ```stream```  - create stream connection
- ```destroy``` - destroy/close stream connection

ChangeLog 
---------

### Version: 0.0.2 ###

Added new examples and ```changeParams``` method

### Version: 0.0.1 ###

forked from https://github.com/aivis/user-stream