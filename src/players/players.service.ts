import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { Player } from './interfaces/player.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PlayersRepository } from './players.repository';

@Injectable()
export class PlayersService {
  private players: Player[] = [];

  constructor(
    @InjectModel('Player') private readonly PlayerModel: Model<Player>,
  ) {}

  private Repository: PlayersRepository = new PlayersRepository(
    this.PlayerModel,
  );
  private readonly logger = new Logger(PlayersService.name);

  async create(CreatePlayerDto: CreatePlayerDto): Promise<Player> {
    const player = await this.Repository.findOne({
      email: CreatePlayerDto.email,
    });
    if (player)
      throw new BadRequestException(`Player ${CreatePlayerDto.email} exists`);

    const new_player = new this.PlayerModel(CreatePlayerDto);
    this.logger.log(`CriaPlayerDto: ${JSON.stringify(CreatePlayerDto)}`);

    return new_player.save();
  }

  async update(id, createPlayerDto: CreatePlayerDto): Promise<Player> {
    const playerFound = await this.Repository.findById(id);
    if (!playerFound) throw new NotFoundException(`Player ${id} not found`);

    return this.Repository.updateOneById(playerFound.id, {
      nome: createPlayerDto.nome,
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
