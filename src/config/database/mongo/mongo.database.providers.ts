import * as mongoose from 'mongoose';
import { connectionMongoProvider } from 'src/_shared/constants';

export const databaseProviders = [
  {
    provide: connectionMongoProvider,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://mongo-dev:27017/playerapi'),
  },
];
