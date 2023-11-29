import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CoffeeEntity } from './coffee.entity';

@Entity('Flavors')
export class FlavorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToMany((type) => CoffeeEntity, (coffee) => coffee.flavors)
  coffees: CoffeeEntity[];
}
