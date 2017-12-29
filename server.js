'use strict';

const express = require('express');
const fs = require('fs');

// Constants
const PORT = process.env.APP_PORT;
const HOST = '0.0.0.0';

// App
const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'))
app.get('/about', function (req, res) {
  res.render('about', { })
});

app.get('/start', function (req, res) {

  var exercises = [
    { 
      name: 'Exercise 1',
      id: 'exercise-1',
      description: 'do some exercise stuff'
    }
  ]

  res.render('start', { exercises: exercises })
});

app.get('/', function (req, res) {
  res.render('index', { })
});

var sample = function(items) {
  return items[Math.floor(Math.random()*items.length)];
}

app.get('/grammar/next-question', function(req, res) {
  fs.readFile('lessons/data.json', function(err, jsonContents) {
    var json = JSON.parse(jsonContents);
    var question = sample(json.questions);
    var data = {
      questionDescription: json.guide,
      questionTitle: question.guide
    };
    res.json(data);
  });
});

app.get('/grammar', function (req, res) {
  res.render('grammar', {  })
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);