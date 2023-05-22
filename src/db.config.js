import { DataSource } from 'typeorm';
import UserEntity from './entity.js';
import dotenv from 'dotenv';

dotenv.config();

  const dataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    synchronize: false,
    entities: [UserEntity],
  });

  export default dataSource;



