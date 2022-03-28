import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { PlayersModule } from './players/players.module';
import { TeamsModule } from './teams/teams.module';
@Module({
  imports: [ConfigModule.forRoot(), PlayersModule, TeamsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

// const dbUser = this.configService.get<string>('DATABASE_USER');
