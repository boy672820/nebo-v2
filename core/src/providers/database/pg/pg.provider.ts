import { DbConfigService } from '@config';
import knex from 'knex';

export const pgProvider = {
  provide: 'PG',
  useFactory: (dbConfig: DbConfigService) =>
    knex({
      client: 'pg',
      connection: dbConfig.connectionString,
      searchPath: ['knex', 'public'],
      pool: { min: 0, max: 7 },
    }),
  inject: [DbConfigService],
};
