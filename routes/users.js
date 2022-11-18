var express = require('express');
const res = require('express/lib/response');
const { routes } = require('../app');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var users = [
    {name: 'Juan David',info: {age: 30, school:'Universidad ECCI'}},
    {name: 'Josue David',info: {age: 28, school:'Universidad ECCI'}},
    {name: 'Carlos Porras',info: {age: 33, school:'Universidad ECCI'}},
  ];
  res.json({ students: users });
  
});

router.get('/list',function(req,res){
  res.render('user-list')
})



module.exports = router;
