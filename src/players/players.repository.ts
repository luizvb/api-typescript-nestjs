import { BaseMongoRepository } from 'src/_shared/interfaces/mongo.repository';

export class PlayersRepository extends BaseMongoRepository {
  constructor(model) {
    super(model);
  }
}
