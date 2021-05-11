var express = require('express');
var router = express.Router();
const Storage = require('../storage')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Redux Express | Index' });
});

router.get('/add', function(req, res, next) {
  res.render('add', { title: 'Redux Express | Add' });
})

router.post('/add', function(req, res, next) {
  Storage.add(req.body.data)
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
