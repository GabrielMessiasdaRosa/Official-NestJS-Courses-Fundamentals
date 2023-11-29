import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// each entity is a class that maps to a database table
@Entity('Coffees')
export class CoffeeEntity {
  // each property is a database column
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column('json', { nullable: true })
  flavors: string[];
}
