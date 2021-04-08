var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.send({"success":true,'message':'Serverless nodejs started'})
});

/* GET home page. */
router.get('/:data', function(req, res, next) {
  let params = req.params;
  let s = typeof params.data;
  if(!isNaN(params.data)){
    s = typeof parseInt(params.data);
  }
  return res.send({"success":true, 'value':params.data, 'type':s});
});

router.get('/api/test', function(req, res, next) {
 
  return res.send({"success":true, 'msg':"Workig test"});
});

module.exports = router;
