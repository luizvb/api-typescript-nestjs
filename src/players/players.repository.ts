import { BaseMongoRepository } from 'src/common/interfaces/mongo.repository';

export class PlayersRepository extends BaseMongoRepository {
  constructor(model) {
    super(model);
  }
}
