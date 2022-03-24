import { Module } from '@nestjs/common';
import { PlayersController } from './players.controller';
import { PlayersService } from './players.service';
import { DatabaseModule } from 'src/config/database/mongo/mongo.database.module';
import { PlayersProvider } from './players.providers';
@Module({
  imports: [DatabaseModule],
  controllers: [PlayersController],
  providers: [...PlayersProvider, PlayersService],
})
export class PlayersModule {}
