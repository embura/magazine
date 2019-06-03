const UsersController = require('../controllers/user');
const log = require('../../config/log');

module.exports = (app) => {
  const userController = new UsersController(app.datasource.models.User);

  app.route('/user')
    .get((req, res) => {
      userController.getAll()
        .then((response) => {
          log.info('[UserRoute]  getAll statusCode: ', response.statusCode);

          res.status(response.statusCode);
          res.json(response.data);
        });
    })
    .post((req, res) => {
      userController.create(req.body)
        .then((response) => {
          log.info('[UserRoute]  create statusCode: ', response.statusCode);

          res.status(response.statusCode);
          res.json(response.data);
        });
    });

  app.route('/user/:id')
    .get((req, res) => {
      userController.getById(req.params)
        .then((response) => {
          log.info(`[UserRoute]  getById[${req.params}] statusCode: `, response.statusCode);

          res.status(response.statusCode);
          res.json(response.data);
        });
    })
    .put((req, res) => {
      userController.update(req.body, req.params)
        .then((response) => {
          log.info('[UserRoute]  update statusCode: ', response.statusCode);

          res.status(response.statusCode);
          res.json(response.data);
        });
    })
    .delete((req, res) => {
      userController.delete(req.params)
        .then((response) => {
          log.info(`[UserRoute]  delete[${req.params}] statusCode: `, response.statusCode);

          res.sendStatus(response.statusCode);
        });
    });
};
