const express = require('express');
const router = express.Router();
const models = require('../models');
const Page = models.Page;
const User = models.User;

router.get('/', function(req, res, next) {
    res.send('response to GET request to /wiki/');
  });
  
router.post('/', function(req, res, next) {
    var formData = req.body;
    console.log(formData.title, formData.content);
    const page = Page.build({
        title: formData.title,
        content: formData.content
      });
    page.save()
    .then( () => {
        console.log('saved!')
        res.redirect('/wiki')
    });
});

router.get('/add', function(req, res) {
    res.render('addpage');
  });






module.exports = router