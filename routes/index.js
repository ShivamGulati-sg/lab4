var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lab4' });
});


router.get('/anju', function(req, res, next) {
  res.render('anju', { title: 'Lab4',
    message: 'Anju, my mother, she is a very contented housewife and she loves what she does, an awesome chef and caring mother '
  });
});
router.get('/kishor', function(req, res, next) {
  res.render('kishor', { title: 'Lab4',
    message: 'Kishor, my father, a successful buisnessman and a very hardworking person. Wants to establish in Canada and start up a buisness '
  });
});
router.get('/shivam', function(req, res, next) {
  res.render('shivam', { title: 'Lab4',
    message: 'Pursuing diploma in Computer Programming , completed a successful Co-op in technical support looking for a better job opportunity to get valuable experince and find a successful carrer path.'
  });
});

router.get('/tanisha', function(req, res, next) {
  res.render('tanisha', { title: 'Lab4' ,
  message: 'Tanisha, my sister, continuing high school presently, she is motivated young girl who loves music and dance and aspires to become a chartered accountant '
  });

});



module.exports = router;
