import { Controller } from '@nestjs/common';
import { BaseController } from 'src/common/interfaces/base.controller';
import { TeamsService } from './teams.service';
import { Team } from './interfaces/teams.interface';

@Controller('api/teams')
export class TeamsController extends BaseController {
  constructor(private readonly teamsService: TeamsService) {
    super(teamsService);
  }
}
