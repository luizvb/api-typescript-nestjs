import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
  Inject,
} from '@nestjs/common';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { UpdatePlayerDto } from './dtos/update-player.dto';
import { Player } from './interfaces/player.interface';
import { Model } from 'mongoose';
import { PlayersRepository } from './players.repository';
import { ModelPlayerProvider } from 'src/_shared/constants';


@Injectable()
export class PlayersService {
  private players: Player[] = [];

  constructor(
    @Inject(ModelPlayerProvider)
    private readonly PlayerModel: Model<Player>,
  ) {}

  private Repository: PlayersRepository = new PlayersRepository(
    this.PlayerModel,
  );
  private readonly logger = new Logger(PlayersService.name);

  async create(CreatePlayerDto: CreatePlayerDto): Promise<Player> {
    const player = await this.Repository.findOne({
      email: CreatePlayerDto.email,
    });
    if (player) throw new BadRequestException(`Player ${CreatePlayerDto.email} exists`);

    const new_player = await this.Repository.create(CreatePlayerDto);
    this.logger.log(`CriaPlayerDto: ${JSON.stringify(CreatePlayerDto)}`);

    return new_player.save();
  }

  async update(id, updatePlayerDto: UpdatePlayerDto): Promise<Player> {
    const playerFound = await this.Repository.findById(id);
    if (!playerFound) throw new NotFoundException(`Player ${id} not found`);

    return this.Repository.updateOneById(playerFound.id, {
      nome: updatePlayerDto.nome,
    });
  }

  async listAll(): Promise<Player[]> {
    return this.Repository.findAll();
  }

  async listOne(id: string): Promise<Player> {
    const playerFind = await this.Repository.findById(id);
    if (!playerFind) throw new NotFoundException(`Player ${id} not found`);
    return playerFind;
  }

  async deleteOne(id: string): Promise<Player> {
    const playerFound = await this.Repository.findById(id);
    if (!playerFound) throw new NotFoundException(`Player ${id} not found`);

    return this.Repository.deleteOneById(playerFound._id);
  }
}
