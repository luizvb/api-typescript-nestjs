import { Injectable, Inject } from '@nestjs/common';
import { SchemaTeamsProvider } from 'src/_shared/constants';
import { BaseService } from 'src/_shared/interfaces/base.service';
import { Repository } from 'typeorm';
import { CreateTeamDto } from './dtos/create-team.dto';
import { TeamSchema } from './interfaces/teams.schema';

@Injectable()
export class TeamsService extends BaseService {
  constructor(
    @Inject(SchemaTeamsProvider)
    private teamRepository: Repository<TeamSchema>,
  ) {
    super(teamRepository);
  }
}
