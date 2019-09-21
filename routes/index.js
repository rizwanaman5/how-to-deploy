var express = require('express');
var router = express.Router();
const db = require('../models')

/* GET home page. */
router.get('/form', function (req, res) {
  db.Form.find()
    .then((data) => res.json(data))
    .catch((err) => res.send(err))
});

router.post('/form', function (req, res) {
  db.Form.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.send(err))
});

module.exports = router;
