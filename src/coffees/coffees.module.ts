import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeRatingService } from 'src/cofee-rating/coffee-rating.service';
import { EventEntity } from 'src/events/entities/event.entity';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { CoffeeEntity } from './entities/coffee.entity';
import { FlavorEntity } from './entities/flavor.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CoffeeEntity, FlavorEntity, EventEntity]),
  ],
  exports: [CoffeesService],
  controllers: [CoffeesController],
  providers: [CoffeesService, CoffeeRatingService],
})
export class CoffeesModule {}
