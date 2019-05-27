var express = require('express');
var router = express.Router();
const MongoHelper = require('../db/mongo_helper.js')

/* GET customer listing. */
router.get('/', function(req, res, next) {
  MongoHelper.get('customers').then(results =>{
    res.status(200).json(results);
  })

});

/* ADD customer's account*/

router.post('/', function(req, res){
  MongoHelper.create('customers', req.body).then(results =>{
    res.status(201).json('New account created');
  })
})

/*DELETE customer */

router.delete("/:id", function(req, res) {
  MongoHelper.delete("customers", req.params.id).then(results => {
    res.status(204).json("Account deleted");
  });
});

/* UPDATE customer */
router.put("/:id", function(req, res) {
  MongoHelper.update("customers", req.params.id, req.body).then(results => {
    res.status(200).json("Customer updated");
  });
});

module.exports = router;
