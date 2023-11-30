import { Module } from '@nestjs/common';
import { CoffeesModule } from 'src/coffees/coffees.module';
import { CoffeeRatingService } from './coffee-rating.service';

@Module({
  imports: [CoffeesModule],
  controllers: [],
  exports: [CoffeeRatingService],
  providers: [CoffeeRatingService],
})
export class CoffeeRatingModule {}
