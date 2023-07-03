const router = require('express').Router();
const db = require('../db/db.json');
const {writeFile} = require('fs');

router.get('/', (req, res) => {
  res.json(db);
});

router.post('/', (req, res) => {
  console.log(req.body);

  db.push(req.body);
  writeFile('./db/db.json', JSON.stringify(db), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
});

module.exports = router;