'use strict'

const express = require('express')
const fs = require('fs')

const NotFound = require('./notFound')
const exercises = require('./exercises')

// Constants
const PORT = process.env.APP_PORT
const HOST = '0.0.0.0'

// App
const app = express()

app.set('views', './views')
app.set('view engine', 'pug')

app.use(express.static('public'))
app.get('/about', function (req, res) {
  res.render('about', { })
})

app.get('/start', function (req, res) {
  res.render('start', { exercises: exercises.list() })
})

app.get('/', function (req, res) {
  res.render('index', { })
})

var sample = function (items) {
  return items[Math.floor(Math.random() * items.length)]
}

app.get('/exercise/:exerciseId', function (req, res) {
  try {
    var exercise = exercises.load(req.params.exerciseId)
    res.render('exercise', { exercise: exercise })
  }
  catch(e) {
    if (e instanceof NotFound) {
      res.status(404);
      res.render('error', { status: 404, message: "Terribly sorry but it seems as though there isn't any exercise like what you were looking for." })
    }
    throw e;
  }
})

app.get('/grammar/next-question', function (req, res) {
  fs.readFile('lessons/data.json', function (err, jsonContents) {
    if (err) {
      throw new NotFound()
    }
    var json = JSON.parse(jsonContents)
    var question = sample(json.questions)
    var data = {
      questionDescription: json.guide,
      questionTitle: question.guide
    }
    res.json(data)
  })
})

app.get('/grammar', function (req, res) {
  res.render('grammar')
})

app.listen(PORT, HOST)

console.log(`Running on http://${HOST}:${PORT}`)
