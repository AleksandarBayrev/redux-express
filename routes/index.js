var express = require('express');
const DBConnection = require('../db');
var router = express.Router();
const Storage = require('../storage')
const { Queries } = require('../constants');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Redux Express | Index' });
});

router.get('/add', function(req, res, next) {
  res.render('add', { title: 'Redux Express | Add' });
})

router.post('/add', function(req, res, next) {
  DBConnection.query(Queries.INSERT('storage', ['data'], [req.body.data]))
  DBConnection.query(Queries.SELECT('storage'), function(err, results, fields) {
    results && results.map(row => Storage.add(row))
  })
  res.redirect('/');
})

router.get('/clear', function(req, res, next) {
  res.render('clear', { title: 'Redux Express | Clear' });
})

router.post('/clear', function(req, res, next) {
  Storage.clear()
  res.redirect('/');
})

router.get('/getstorage', function(req, res, next) {
  res.send(Storage.getStorage());
})

module.exports = router;
