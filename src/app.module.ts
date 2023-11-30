import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeeRatingModule } from './cofee-rating/coffee-rating.module';
import { CoffeeRatingService } from './cofee-rating/coffee-rating.service';
import { CoffeesModule } from './coffees/coffees.module';
import { pgsqlConfig } from './database/pgsql.config';

@Module({
  imports: [
    CoffeesModule,
    TypeOrmModule.forRoot(pgsqlConfig),
    ConfigModule.forRoot({
      envFilePath: '.env.local',
      isGlobal: true,
    }),
    CoffeeRatingModule,
  ],
  controllers: [AppController],
  providers: [AppService, CoffeeRatingService],
})
export class AppModule {}
