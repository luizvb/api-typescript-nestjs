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
import { Player } from './interfaces/player.interface';
import { PlayerParametersValidators } from './pipes/players-parameters-validators';
import { PlayersService } from './players.service';

@Controller('api/v1/players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createPlayer(@Body() CreatePlayerDto: CreatePlayerDto) {
    await this.playersService.create(CreatePlayerDto);
  }
  @Put('/:id')
  async updatePlayer(
    @Body() CreatePlayerDto: CreatePlayerDto,
    @Param('id', PlayerParametersValidators) id: string,
  ) {
    return this.playersService.update(id, CreatePlayerDto);
  }

  @Get()
  async listPlayers(): Promise<Player[]> {
    return this.playersService.listAll();
  }

  @Get('/:id')
  async listPlayerById(
    @Param('id', PlayerParametersValidators) id: string,
  ): Promise<Player> {
    return this.playersService.listOne(id);
  }

  @Delete()
  async deletePlayer(@Param('id', PlayerParametersValidators) id: string) {
    return this.playersService.deleteOne(id);
  }
}
