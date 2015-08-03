// Import all the needed modules
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var parser = bodyParser.json();

var sibers = {
  'borstein': {
    first_name: 'Andrew',
    last_name: 'Borstein',
    cohort: 'Spring 2015',
    track: 'WebDev'
  },
  'taylor': {
    first_name: 'Jennifer',
    last_name: 'Taylor',
    cohort: 'Summer 2015',
    track: 'Web Design'
  }
};

app.get('/', function(request, response) {
  response.json(sibers);
});

app.get('/:name', function(request, response) {
  var name = request.params.name.toLowerCase();
  var siber = sibers[name];

  if(!siber) {
    response.status(404).send({'message': 'not found'});
  } else {
    response.json(siber);
  }
});

app.post('/', parser, function(request, response) {
    var name = request.body.last_name.toLowerCase;

    sibers[name] = {
    first_name: request.body.first_name,
    last_name: request.body.last_name,
    cohort: request.body.cohort,
    track: request.body.track
  };
  response.sendStatus(201);
});

app.delete('/:name', function(request, response){
  var name = request.params.name.toLowerCase();

  delete sibers[name];
  response.sendStatus(200).json({'message': 'deleted user ' + name});
});

app.listen(1337);

console.log("Listening on port 1337...");
