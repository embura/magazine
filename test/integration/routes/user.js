
describe('Test Integration User', () => {
  const User = app.datasource.models.User;

  const defaultUser = {
    id: 1,
    name: 'Default User',
    email: 'teste@teste.com.br',
    department: '12345678',
  };

  beforeEach((done) => {
    User.destroy({ where: {} })
    .then((user) => {
      User.create(defaultUser)
      .then(() => {
        done();
      });
    });
  });

  describe('Route GET /user', () => {
    it('should return a user', (done) => {
      request
      .get('/user')
      .end((err, res) => {
        expect(res.body[0].id).to.be.eql(defaultUser.id);
        expect(res.body[0].name).to.be.eql(defaultUser.name);

        done(err);
      });
    });
  });

  describe('Route GET /user/{id}', () => {
    it('should return a user', (done) => {
      request
      .get('/user/1')
      .end((err, res) => {
        expect(res.body.id).to.be.eql(defaultUser.id);
        expect(res.body.name).to.be.eql(defaultUser.name);
        expect(res.body.email).to.be.eql(defaultUser.email);

        done(err);
      });
    });
  });

  describe('Route POST /user', () => {
    it('should create a user', (done) => {
      
      const newUser = {
        id: 3,
        name: 'Create User',
        email: 'test@test.com.br',
        department: 'test',
      };

      request
      .post('/user')
      .send(newUser)
      .end((err, res) => {
        expect(newUser.id).to.be.eql(res.body.id);
        expect(newUser.name).to.be.eql(res.body.name);
        expect(newUser.email).to.be.eql(res.body.email);

        done(err);
      });

    });
  });

  describe('Route PUT /user/{id}', () => {
    it('should update a user', (done) => {
      const updateUser = {
        id: 1,
        name: 'update User',
      };

      request
      .put('/user/1')
      .send(updateUser)
      .end((err, res) => {
        expect(res.body).to.be.eql([1]);

        done(err);
      });
    });

  });

  describe('Route DELETE /user/{id}', () => {
    it('should delete a user', (done) => {
      request
      .delete('/user/1')
      .end((err, res) => {
        expect(res.statusCode).to.be.eql(204);
        done(err);
      });
    });
  });

  
});
