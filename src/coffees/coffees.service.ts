import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { CoffeeEntity } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  constructor(
    @InjectRepository(CoffeeEntity)
    private readonly coffeeRepository: Repository<CoffeeEntity>,
  ) {}

  async create(createCoffeeDto: CreateCoffeeDto): Promise<CoffeeEntity> {
    const newCoffee = this.coffeeRepository.create(createCoffeeDto);
    console.log('newcoffee', newCoffee);
    await this.coffeeRepository.save(newCoffee);
    return {
      id: newCoffee.id,
      ...createCoffeeDto,
    };
  }

  async findAll() {
    return await this.coffeeRepository.find();
  }

  async findOne(id: string): Promise<CoffeeEntity> {
    const checkUUID = new RegExp(
      '^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$',
    );
    if (!checkUUID.test(id)) {
      throw new BadRequestException(`Invalid ID`);
    }
    const coffee = await this.coffeeRepository.findOne({
      where: { id },
    });
    console.log(coffee);
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  async update(
    id: string,
    updateCoffeeDto: UpdateCoffeeDto,
  ): Promise<CoffeeEntity> {
    const coffee = await this.coffeeRepository.preload({
      id,
      ...updateCoffeeDto,
    });
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    await this.coffeeRepository.update(id, coffee);
    return coffee;
  }

  async remove(id: string): Promise<void> {
    const existingCoffee = await this.findOne(id);
    if (!existingCoffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    await this.coffeeRepository.delete(id);
    return;
  }

  async clearCoffees(): Promise<void> {
    await this.coffeeRepository.clear();
  }
}
