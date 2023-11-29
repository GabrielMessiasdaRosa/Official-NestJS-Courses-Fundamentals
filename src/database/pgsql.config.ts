import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const pgsqlConfig: TypeOrmModuleOptions = {
  type: 'postgres', // type of our database
  host: process.env.DB_HOST, // database host
  port: Number(process.env.DB_PORT), // database host
  username: process.env.DB_USERNAME, // username
  password: process.env.DB_PASSWORD, // user password
  database: process.env.DB_NAME, // name of our database,
  autoLoadEntities: true, // models will be loaded automatically
  synchronize: true, // your entities will be synced with the database(recommended: disable in prod)
};
