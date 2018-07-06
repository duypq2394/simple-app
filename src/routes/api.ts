import * as express from 'express';
let passport = require('passport');
let router = express.Router();

module.exports = function (app: express.Express) {
  app.use('/api', router);
};

router.get('/items', (req, res, next) => {
  res.json([
    {id: 1, text: 'first'},
    {id: 2, text: 'second'},
    {id: 3, text: 'third'}
  ]);
});

router.get('/course', (req, res, next) => {
  res.json([
    {
      id: 1,
      name: 'first',
      url: 'https://www.youtube.com/watch?v=4Q46xYqUwZQ',
      fee: '11111',
      imgUrl: 'https://static1.squarespace.com/static/550ba261e4b0215d222516fe/t/552012fee4b02bbbd561440e/1428165393729/musictheory.jpg?format=1500w'
    },
    {
      id: 2,
      name: 'second',
      url: 'https://www.youtube.com/watch?v=4Q46xYqUwZQ',
      fee: '11111',
      imgUrl: 'https://static1.squarespace.com/static/550ba261e4b0215d222516fe/t/552012fee4b02bbbd561440e/1428165393729/musictheory.jpg?format=1500w'
    }
  ]);
});

router.get('/todos', (req, res, next) => {
  // Be careful of security when use this headres !!
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.json([
    { id: 1, text: 'first feched todo', completed: false },
    { id: 2, text: 'second feched todo', completed: true },
    { id: 3, text: 'third feched todo', completed: false }
  ]);
});

router.get('/me', isAuthenticated, (req: any, res, next) => {
  res.json(
    {
      id : req.user.id,
      userid : req.user.userid,
      username : req.user.username
    }
  );
  //res.json(req.user);
});

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401);
  res.render('error', {
      message: 'Unauthorized',
      error: {}
  });
}
