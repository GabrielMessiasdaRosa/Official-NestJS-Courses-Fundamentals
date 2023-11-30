import { Injectable } from '@nestjs/common';
import { CoffeesService } from 'src/coffees/coffees.service';

@Injectable()
export class CoffeeRatingService {
  constructor(private readonly coffeesService: CoffeesService) {}

  async rateUp(coffeeId: string) {
    const coffee = await this.coffeesService.findOne(coffeeId);
    return this.coffeesService.update(coffeeId, {
      recommendations: coffee.recommendations + 1,
    });
  }
}
