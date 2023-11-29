import { CoffeeEntity } from 'src/coffees/entities/coffee.entity';
import { FlavorEntity } from 'src/coffees/entities/flavor.entity';
import { EventEntity } from 'src/events/entities/event.entity';
import { DataSource } from 'typeorm';
export default new DataSource({
  type: 'postgres', // type of our database
  host: 'localhost', // database host
  port: 5432, // database host
  username: 'postgres', // username
  password: 'postgres', // user password
  database: 'nestjs_db', // name of our database,
  entities: [CoffeeEntity, FlavorEntity, EventEntity],
  migrations: [],
});
