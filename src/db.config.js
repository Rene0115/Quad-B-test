import { DataSource } from 'typeorm';
import { info } from './app.js';
import UserEntity from './entity.js';
import { config } from 'dotenv';

config();

const database = async () => {
  const dataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'rene',
    database: 'postgres',
    synchronize: false,
    entities: [UserEntity],
  });
  await dataSource.initialize();
  info('Database Connected');
};

export default database;
