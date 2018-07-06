import { Express, Router } from 'express';

let router = Router();

router.get('/', function (req, res, next) {
  res.render('index');
});

module.exports = function (app: Express) {
  app.use('/', router);
};
