const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db.js');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  try {
    const transactions = await db.any('SELECT * FROM transactions ORDER BY id DESC');
    res.render('index', { transactions });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.post('/add', async (req, res) => {
  const { type, description, amount } = req.body;
  try {
    await db.none('INSERT INTO transactions (type, description, amount) VALUES ($1, $2, $3)', [type, description, amount]);
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
