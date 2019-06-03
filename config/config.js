const production = {
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  params: {
    host: 'db',
    dialect: 'mysql',
  },
};

const development = {
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  params: {
    dialect: 'sqlite',
    storage: 'database.sqlite',
  },
};


if (process.env.NODE_ENV === 'production') {
  module.exports = production;
} else {
  module.exports = development;
}
