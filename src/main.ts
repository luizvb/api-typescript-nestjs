import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

const swaggerInitialize = (app) => {
  const config = new DocumentBuilder()
    .setTitle('MZ API')
    .setDescription('The MZ API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
};

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  swaggerInitialize(app);
  await app.listen(3000);
};

bootstrap();
