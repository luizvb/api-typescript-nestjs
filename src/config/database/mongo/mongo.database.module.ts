import { Module } from '@nestjs/common';
import { databaseProviders } from './mongo.database.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
