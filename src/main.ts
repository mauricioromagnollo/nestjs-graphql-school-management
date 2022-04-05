import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = new ConfigService();

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: configService.get('CORS_ORIGIN'),
    credentials: true,
  });

  await app.listen(configService.get('PORT'));
}
bootstrap();
