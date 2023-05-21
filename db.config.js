const { DataSource } = require('typeorm');
const logger = require('./app.js');
const UserEntity = require('./entity.js');
const dotenv = require('dotenv');

dotenv.config();

const database = async () => {
  const dataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '',
    database: 'postgres',
    synchronize: false,
    entities: [UserEntity],
  });
  await dataSource.initialize();
  logger.info('Database Connected');
};

module.exports = database;
