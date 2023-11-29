import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { FlavorEntity } from './flavor.entity';

@Index(['name', 'brand', 'id'])
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

  @JoinTable()
  @ManyToMany((type) => FlavorEntity, (flavor) => flavor.coffees, {
    cascade: true, // ['insert']
  })
  flavors: FlavorEntity[];

  @Column({ default: 0 })
  recommendations: number;
}
