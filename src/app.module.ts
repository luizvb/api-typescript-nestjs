import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayersModule } from './players/players.module';

const uri = 'mongodb://localhost:27017/playerapi';
@Module({
  imports: [
    PlayersModule,
    MongooseModule.forRoot(uri, { useNewUrlParser: true }),
  ],
  controllers: [],
})
export class AppModule {}
