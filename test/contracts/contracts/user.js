describe('Test contracts User', () => {
  const User = app.datasource.models.User;
  let token = '';

  const defaultUser = {
    id: 2,
    name: 'Default User',
    email: 'teste@teste.com.br',
    department: '12345678',
  };

  beforeEach((done) => {
    User.destroy({ where: {} })
    .then(() => User.create({
      id: 1,
      name: 'John',
      email: 'embura@mail.com',
      department: '123456',
    }))
    .then((user) => {
      User.create(defaultUser)
      .then(() => {
        done();
      });
    });
  });

  describe('Route GET /user', () => {
    it('should return a list of user', (done) => {
      const usersList = Joi.array().items(
        Joi.object().keys({
          id: Joi.number(),
          name: Joi.string(),
          email: Joi.string().email(),
          department: Joi.string(),
          createdAt: Joi.date().iso(),
          updatedAt: Joi.date().iso(),
        }));

      request
      .get('/user')
      .end((err, res) => {
        joiAssert(res.body, usersList);
        done(err);
      });
    });
  });


  describe('Route GET /user/{id}', () => {
    it('should return a user', (done) => {
      const user = Joi.object().keys({
        id: Joi.number(),
        name: Joi.string(),
        email: Joi.string().email(),
        department: Joi.string(),
        createdAt: Joi.date().iso(),
        updatedAt: Joi.date().iso(),
      });
      request
      .get('/user/2')
      .set('Authorization', `JWT ${token}`)
      .end((err, res) => {
        joiAssert(res.body, user);
        done(err);
      });
    });
  });

  describe('Route POST /user', () => {
    it('should create a user', (done) => {
      const newUsers = {
        id: 3,
        name: 'Create User',
        email: 'teste@gmail.com',
        department: '12345678',
      };

      const user = Joi.object().keys({
        id: Joi.number(),
        name: Joi.string(),
        email: Joi.string().email(),
        department: Joi.string(),
        createdAt: Joi.date().iso(),
        updatedAt: Joi.date().iso(),
      });

      request
      .post('/user')
      .set('Authorization', `JWT ${token}`)
      .send(newUsers)
      .end((err, res) => {
        joiAssert(res.body, user);
        done(err);
      });
    });
  });

  describe('Route PUT /user/{id}', () => {
    it('should update a user', (done) => {
      const updateUsers = {
        id: 2,
        name: 'update User',
      };

      const updateCount = Joi.array().items(1);
      request
      .put('/user/2')
      .set('Authorization', `JWT ${token}`)
      .send(updateUsers)
      .end((err, res) => {
        joiAssert(res.body, updateCount);
        done(err);
      });
    });
  });


  describe('Route DELETE /user/{id}', () => {
    it('should delete a user', (done) => {
      request
      .delete('/user/2')
      .set('Authorization', `JWT ${token}`)
      .end((err, res) => {
        expect(res.statusCode).to.be.eql(204);

        done(err);
      });
    });
  });
});
