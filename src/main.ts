import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import SecretManagerHandler from './config/secretManager/SecretManager';
import { AppModule } from './app.module';

const getSecrets = () => {
  const test = new SecretManagerHandler();
  test
    .getSecret(
      'arn:aws:kms:us-east-1:630412235690:key/b1c99a66-91b2-42ce-8b5e-344a01581714',
    )
    .then(console.log);
};

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
  // getSecrets();
  await app.listen(3000);
  console.log('LISTEN ON PORT 3000');
};

bootstrap();
