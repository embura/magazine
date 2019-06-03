const UsersControllers = require('../../../src/controllers/user');

describe('Test Unit User', () => {
  describe('Get all user: getAll()', () => {
    it('should return a list user', () => {
      const User = {
        findAll: td.function(),
      };

      const expectedResponse = [{
        id: 1,
        name: 'getAll User',
        email: 'test@test.com.br',
        department: 'teste',
        created_at: '2016-10-13 17:43:21.879',
        updated_at: '2016-10-13 17:43:21.879',
      }];

      td.when(User.findAll({})).thenResolve(expectedResponse);

      const usersControllers = new UsersControllers(User);

      return usersControllers.getAll()
            .then(response => expect(response.data).to.be.eql(expectedResponse));
    });
  });

  describe('Get a user: getID()', () => {
    it('should return a user', () => {
      const User = {
        findOne: td.function(),
      };

      const expectedResponse = {
        id: 1,
        name: 'getID User',
        email: 'test@test.com.br',
        department: 'teste',
        created_at: '2016-10-13 17:43:21.879',
        updated_at: '2016-10-13 17:43:21.879',
      };

      td.when(User.findOne({ where: { id: 1 } })).thenResolve(expectedResponse);

      const usersControllers = new UsersControllers(User);

      return usersControllers.getById({ id: 1 })
            .then(response => expect(response.data).to.be.eql(expectedResponse));
    });
  });

  describe('Create a user: create()', () => {
    it('should create a user', () => {
      const User = {
        create: td.function(),
      };
      const requestBody = {
        name: 'Create User',
      };

      const expectedResponse = {
        id: 1,
        name: 'Create User',
        email: 'test@test.com.br',
        department: 'teste',
        created_at: '2016-10-13 17:43:21.879',
        updated_at: '2016-10-13 17:43:21.879',
      };

      td.when(User.create(requestBody)).thenResolve(expectedResponse);

      const usersControllers = new UsersControllers(User);

      return usersControllers.create(requestBody)
            .then((response) => {
              expect(response.statusCode).to.be.eql(201);
              expect(response.data).to.be.eql(expectedResponse);
            });
    });
  });


  describe('Update a user: update()', () => {
    it('should update a  user', () => {
      const User = {
        update: td.function(),
      };
      const requestBody = {
        id: 1,
        name: 'Update User',
        email: 'test1@test.com.br',
        department: 'teste1',
        created_at: '2016-10-13 17:43:21.879',
        updated_at: '2016-10-13 17:43:21.879',
      };

      const expectedResponse = {
        id: 1,
        name: 'Update User',
        email: 'test1@test.com.br',
        department: 'teste1',
        created_at: '2016-10-13 17:43:21.879',
        updated_at: '2016-10-13 17:43:21.879',
      };

      td.when(User.update(requestBody, { where: { id: 1 } })).thenResolve(expectedResponse);

      const usersControllers = new UsersControllers(User);

      return usersControllers.update(requestBody, { id: 1 })
            .then(response => expect(response.data).to.be.eql(expectedResponse));
    });
  });


  describe('Delete a user: delete()', () => {
    it('should delete a  user', () => {
      const User = {
        destroy: td.function(),
      };

      td.when(User.destroy({ where: { id: 1 } })).thenResolve({});

      const usersControllers = new UsersControllers(User);

      return usersControllers.delete({ id: 1 })
            .then(response => expect(response.statusCode).to.be.eql(204));
    });
  });
});
