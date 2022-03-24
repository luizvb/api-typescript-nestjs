import { Connection } from 'mongoose';
import {
  ModelPlayerProvider,
  connectionMongoProvider,
} from 'src/common/constants';
import { PlayerSchema } from './interfaces/player.schema';

export const PlayersProvider = [
  {
    provide: ModelPlayerProvider,
    useFactory: (connection: Connection) =>
      connection.model('Players', PlayerSchema),
    inject: [connectionMongoProvider],
  },
];
