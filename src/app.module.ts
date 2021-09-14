import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayersModule } from './players/players.module';

const uri = 'mongodb+srv://luiz:PmaYWAikRQUGs93T@apptenis.fgica.mongodb.net/SmartTracking'

@Module({
  imports: [
    PlayersModule,
    MongooseModule.forRoot(uri, { useNewUrlParser: true})
  ],
})
export class AppModule {}
