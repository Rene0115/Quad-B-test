import { DataSource } from 'typeorm';
import logger from '../app.js';
import UserEntity from './entity.js';
import dotenv from 'dotenv';

dotenv.config();

const database = async () => {
 const dataSource = new DataSource({
    type: 'mysql',
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    logging: true,
    synchronize: false,
    entities: [UserEntity]
  });
  await dataSource.initialize()
  logger.info('Database Connected')
};
export default database;