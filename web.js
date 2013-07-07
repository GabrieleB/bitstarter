var express = require('express');
var app = express.createServer(express.logger());

/* Keep the cache for one day */
var oneDay = 86400000;

app.use(express.compress());

app.use(express.static(__dirname + '/static', {maxAge: oneDay}));

app.listen(process.env.PORT || 3000);

