var express = require('express');
var router = express.Router();
const todoModel = require('./users')

router.get('/', function (req, res) {
  todoModel.find().then(function (tasks) {
    res.render('index', {
      tasks
    })
  })
})

router.post('/post', function (req, res) {
  todoModel.create({
    task: req.body.task
  }).then(function (data) {
    res.redirect("/")
  })
})

router.get('/delete/:id', function (req, res) {
  todoModel.findOneAndDelete({
    _id: req.params.id
  }).then(function (deleted) {
    res.redirect("/")
  })
})

module.exports = router;