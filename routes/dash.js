var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  datos={
    "nombre":"DiegoAndyGianluca",
    "email":"diego.andy.gianluca@gmail.com"
  };
  res.render('dash',function(err,html){
    res.render('templates/layout',{
      'usuario':datos,
      'tituloSeccion':'Desarrolo de Aplicaciones Web',
      'seccion':html
    });
  });
});

module.exports = router;