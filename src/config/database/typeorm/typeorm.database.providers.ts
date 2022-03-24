import { createConnection } from 'typeorm';
import { join } from 'path';
import { connectionTypeOrmProvider } from 'src/common/constants';
export const databaseProviders = [
  {
    provide: connectionTypeOrmProvider,
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'postgres',
        entities: [join(__dirname, '../../../**/interfaces/*.schema{.ts,.js}')],
        synchronize: true,
      }),
  },
];
