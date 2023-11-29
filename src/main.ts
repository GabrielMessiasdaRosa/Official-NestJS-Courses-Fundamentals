import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // useGlobalPipes() is a method that sets up pipes that apply to every route
  app.useGlobalPipes(
    // ValidationPipe is a built-in pipe that uses class-validator to transform and validate incoming data
    new ValidationPipe({
      // whitelist: true will remove any properties that don't have any decorators
      whitelist: true,
      // forbidNonWhitelisted: true will throw an error if there are properties that don't have any decorators
      forbidNonWhitelisted: true,
      // transform: true will transform the incoming data to the correct type (e.g., from string to number)
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
