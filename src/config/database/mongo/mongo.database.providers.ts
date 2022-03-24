import * as mongoose from 'mongoose';
import { connectionMongoProvider } from 'src/common/constants';

export const databaseProviders = [
  {
    provide: connectionMongoProvider,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://localhost:27017/playerapi'),
  },
];
