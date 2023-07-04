const router = require('express').Router();
const db = require('../db/db.json');
const {uuidv4, writeFile} = require('../helpers/helpers');


router.get('/', (req, res) => {
  res.json(db);
});

router.post('/', (req, res) => {
  console.log(req.body);

  let keyIsUnique = true;
  let key;

  do {
    key = uuidv4();

    for (let i = 0; i < db.length; i++) {
      if(db[i].id === key)
        keyIsUnique = false;
    }
  } while (!keyIsUnique);

  const object = req.body;
  object.id = key;

  db.push(object);
  res.send(db);
  writeFile('./db/db.json', JSON.stringify(db), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
});


router.delete('/:id', (req, res) => {
  for (let i = 0; i < db.length; i++) {
    if(db[i].id === req.params.id)
      db.splice(i, 1);
  }
  res.send(db);
  writeFile('./db/db.json', JSON.stringify(db), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
});


module.exports = router;