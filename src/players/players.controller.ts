import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Param,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { UpdatePlayerDto } from './dtos/update-player.dto';
import { Player } from './interfaces/player.interface';
import { ParametersValidators } from '../_shared/pipes/parameters-validators';
import { PlayersService } from './players.service';

@Controller('api/players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createPlayer(@Body() CreatePlayerDto: CreatePlayerDto) {
    await this.playersService.create(CreatePlayerDto);
  }
  @Put('/:id')
  async updatePlayer(
    @Body() UpdatePlayerDto: UpdatePlayerDto,
    @Param('id', ParametersValidators) id: string,
  ) {
    return this.playersService.update(id, UpdatePlayerDto);
  }

  @Get()
  async listPlayers(): Promise<Player[]> {
    return this.playersService.listAll();
  }

  @Get('/:id')
  async listPlayerById(
    @Param('id', ParametersValidators) id: string,
  ): Promise<Player> {
    return this.playersService.listOne(id);
  }

  @Delete()
  async deletePlayer(@Param('id', ParametersValidators) id: string) {
    return this.playersService.deleteOne(id);
  }
}
