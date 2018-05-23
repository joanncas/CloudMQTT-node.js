
var mqtt = require('mqtt');

var options = { 
    port: 17xxx,
    host: 'mqtt://m11.cloudmqtt.com',
    clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
    username: 'User_Name',
    password: 'User_Password',
    keepalive: 60,
    reconnectPeriod: 1000,
    protocolId: 'MQIsdp',
    protocolVersion: 3,
    clean: true,
    encoding: 'utf8'
};
                

var client = mqtt.connect('mqtt://m11.cloudmqtt.com', options);

client.on('connect', function() { 
    console.log("Connected");//The first connection will have a latency, so don't worry
    client.subscribe('test', function() {       
    client.on('message', function(topic, message, packet) {
          console.log("Received '" + message + "' on '" + topic + "'");
       });
    });
    
    /*client.publish('test', 'my message', function() { Uncomment if you want to test the publish function
        console.log("Published");
        client.end(); // Close the connection when published
    });*/

});
