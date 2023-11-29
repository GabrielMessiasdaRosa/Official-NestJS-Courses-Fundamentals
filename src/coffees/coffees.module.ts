import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { CoffeeEntity } from './entities/coffee.entity';
import { FlavorEntity } from './entities/flavor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CoffeeEntity, FlavorEntity])],
  controllers: [CoffeesController],
  providers: [CoffeesService],
})
export class CoffeesModule {}
