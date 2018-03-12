const express = require('express')
const router = express.Router();
const wikiRouter = require('./wiki');
const userRouter = require('./user');



router.get('/', (req, res) => {
   // need a res render to populate homepage
   res.render('index', function(req, res){
   })   
});

router.get('/users/', function(req, res, next) {
    res.redirect('/wiki/');
  });

router.post('/users/', function(req, res, next) {
    console.log('users post');
    res.redirect('/');
  });

router.put('/users/', function(req, res, next) {
    res.redirect('/');
  });


router.use('/wiki', wikiRouter);
router.use('/user', userRouter);


module.exports = router;