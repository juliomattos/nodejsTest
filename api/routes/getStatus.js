module.exports = app => {
  const controller = require('../controllers/statusController')();

  app.route('/api/v1/status')
    .post(controller.statusCode);
}