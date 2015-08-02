// Import all the needed modules
var express = require('express');

var app = express();

var sibers = {
  'Borstein': {
    first_name: 'Andrew',
    last_name: 'Borstein',
    cohort: 'Spring 2015',
    track: 'WebDev'
  },
  'Taylor': {
    first_name: 'Jennifer',
    last_name: 'Taylor',
    cohort: 'Summer 2015',
    track: 'Web Design'
  }
};

// Start code here

app.listen(1337);

console.log("Listening on port 1337...");
