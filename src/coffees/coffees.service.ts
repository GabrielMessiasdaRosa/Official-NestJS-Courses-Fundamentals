import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { CoffeeEntity } from './entities/coffee.entity';
import { FlavorEntity } from './entities/flavor.entity';

@Injectable()
export class CoffeesService {
  constructor(
    @InjectRepository(CoffeeEntity)
    private readonly coffeeRepository: Repository<CoffeeEntity>,

    @InjectRepository(FlavorEntity)
    private readonly flavorRepository: Repository<FlavorEntity>,

    @InjectConnection() private readonly connection: Connection,
  ) {}

  // CRUD methods
  async create(createCoffeeDto: CreateCoffeeDto): Promise<CoffeeEntity> {
    const flavors: FlavorEntity[] = await Promise.all(
      createCoffeeDto.flavors.map((name) => this.preloadFlavorByName(name)),
    );

    const newCoffee = this.coffeeRepository.create({
      ...createCoffeeDto,
      flavors,
    });

    await this.coffeeRepository.save(newCoffee);
    return newCoffee;
  }

  async findAll() {
    return await this.coffeeRepository.find({
      relations: ['flavors'],
    });
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
      relations: ['flavors'],
    });

    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  async update(
    id: string,
    updateCoffeeDto: UpdateCoffeeDto,
  ): Promise<CoffeeEntity> {
    const flavors: FlavorEntity[] =
      updateCoffeeDto.flavors &&
      (await Promise.all(
        updateCoffeeDto.flavors.map((name) => this.preloadFlavorByName(name)),
      ));

    const coffee = await this.coffeeRepository.preload({
      id: id,
      ...updateCoffeeDto,
      flavors,
    });
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return await this.coffeeRepository.save(coffee);
  }

  async remove(id: string): Promise<void> {
    const existingCoffee = await this.findOne(id);
    if (!existingCoffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    await this.coffeeRepository.delete(id);
    return;
  }

  // Other methods
  async clearCoffees(): Promise<void> {
    await this.connection.query('TRUNCATE TABLE "Coffees" CASCADE');
  }

  private async preloadFlavorByName(name: string) {
    const existingFlavor = await this.flavorRepository.findOne({
      where: { name },
    });
    if (existingFlavor) {
      return existingFlavor;
    }
    const newFlavor = this.flavorRepository.create({ name });
    await this.flavorRepository.save(newFlavor);
    return newFlavor;
  }
}
