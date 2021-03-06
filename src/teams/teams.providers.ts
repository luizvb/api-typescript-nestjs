import {
  connectionTypeOrmProvider,
  SchemaTeamsProvider,
} from 'src/_shared/constants';
import { Connection } from 'typeorm';
import { TeamSchema } from './interfaces/teams.schema';
export const TeamsProviders = [
  {
    provide: SchemaTeamsProvider,
    useFactory: (connection: Connection) =>
      connection.getRepository(TeamSchema),
    inject: [connectionTypeOrmProvider],
  },
];
