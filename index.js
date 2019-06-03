const app = require('./app');
const log = require('./config/log');

app.listen(app.get('port'), app.get('port'), () => {
  log.info(`app running on port ${app.get('port')}`);
});
