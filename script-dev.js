var http = require('http');

var options = {
  host: 'dev.autumnapp.com',
  path: '/api/external/v1/sensors/senhWN7e2weL/sensordata/',
  port: '80',
  method:'post',
  headers: {
    'ORGANIZATION-ID': 'enh2bWdxdHh5QGd3eGJjZmd5dXVuLnFlZQ==',
    'ORGANIZATION-API-KEY': '1f342d78-5ee1-4add-89e0-01a413f0565d',
    'Content-Type':'application/vnd.api+json'
  }
};
var data = JSON.stringify({
  "data":{
    "type":"SensorData",
    "id":"39460",
    "attributes":{
      "is_public":false,
      "timestamp":"2016-05-12T13:08:46.101226Z",
      "value":"157"
    },
    "relationships":{
      "sensor":{
        "data":{
          "type":"Sensor",
          "id":"senhWN7e2weL"
        }
      }
    }
  }
});

callback = function(response) {
  var str = ''
  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    console.log(str);
  });
}

var req = http.request(options, callback);
req.write(data);
req.end();

