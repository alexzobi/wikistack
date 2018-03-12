const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.send('response to GET request to /wiki/');
  });
  
router.post('/', function(req, res, next) {
    console.log('post from add form', req.body);
    return res.json(req.body);
});

router.get('/add', function(req, res) {
    res.render('addpage');

  });







module.exports = router