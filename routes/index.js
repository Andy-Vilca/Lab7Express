var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.post("/login", function(req, res) {
  let usuario = req.body.inputEmail;
  let clave = req.body.inputPassword;
  if (usuario != "" && clave == "tecsup") {
    res.app.locals.usuario = req.body.inputEmail;
    res.redirect("/dashboard");
  } else {
    res.redirect('/');
  }
})

router.get("/logout", function(req, res) {
  res.redirect('/');
})

module.exports = router;
