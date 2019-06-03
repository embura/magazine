const httpStatus = require('http-status');
const log = require('../../config/log');

const defaultResponse = (data, statusCode = httpStatus.OK) => ({
  data,
  statusCode,
});

const errorResponse = (error, statusCode = httpStatus.BAD_REQUEST) => ({
  data: error.parent ? error.parent.sqlMessage : error.message,
  statusCode,
});

module.exports = class UserController {

  constructor(Users) {
    this.Users = Users;
  }

  getAll() {
    return this.Users.findAll({})
    .then(result => {
      log.info('[UserController] getAll: ', !!result);

      return defaultResponse(result);
    }).catch(error => {
      log.error('[UserController] getAll: ', error);

      return errorResponse(error);
    });
  }

  getById(params) {
    return this.Users.findOne({ where: params })
    .then(result =>{
      log.info('[UserController] getById: ', params);

      return defaultResponse(result);
    }).catch(error => {
      log.error(`[UserController] getById:[${params}] `, error);

      return errorResponse(error)
    });
  }

  create(data) {
    return this.Users.create(data)
    .then(result => {
      log.info('[UserController] create: ', data);
      return defaultResponse(result, httpStatus.CREATED);
    }).catch(error =>  {
      log.error(`[UserController] create:[${data}],  `, error);
      return errorResponse(error, httpStatus.UNPROSSABLE_ENTITY)
    });
  }

  update(data, params) {
    return this.Users.update(data, { where: params })
    .then(result => {
      log.info(`[UserController] update  param[${params}]`, data);

      return defaultResponse(result)
    }).catch(error => {
      log.error(`[UserController] update - params[${params}] data[${data}] `, error);

      return errorResponse(error.message, httpStatus.UNPROSSABLE_ENTITY)
    });
  }

  delete(params) {
    return this.Users.destroy({ where: params })
    .then(result => {
      log.info('[UserController] delete: ', params);

      return defaultResponse(result, httpStatus.NO_CONTENT)
    }).catch(error => {
      log.error(`[UserController] delete:[${params}] `, error);

      return errorResponse(error.message, httpStatus.UNPROSSABLE_ENTITY)
    });
  }
};
