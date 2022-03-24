import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/config/database/typeorm/typeorm.database.module';
import { TeamsController } from './teams.controller';
import { TeamsProviders } from './teams.providers';
import { TeamsService } from './teams.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TeamsController],
  providers: [...TeamsProviders, TeamsService],
})
export class TeamsModule {}
