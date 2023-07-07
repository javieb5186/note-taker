// import packages and js files.
const router = require('express').Router();
const db = require('../db/db.json');
const {uuidv4, writeFile} = require('../helpers/helpers');

// Return database at /notes/ GET
router.get('/', (req, res) => {
  res.json(db);
});

// Save to database at /notes/ POST
// Generate unique id, add id to note, push/return note, and save to database. 
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
  writeFile('Develop/db/db.json', JSON.stringify(db), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
});

// Delete from database at /notes/ DELETE
// Delete found id, send back new database, and save changes to database.
router.delete('/:id', (req, res) => {
  for (let i = 0; i < db.length; i++) {
    if(db[i].id === req.params.id)
      db.splice(i, 1);
  }
  res.send(db);
  writeFile('Develop/db/db.json', JSON.stringify(db), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
});


module.exports = router;