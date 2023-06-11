import { InjectionToken } from '@core';
import { DBConfigService } from '@config';
import { Client } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';

export type DrizzleProvider = {
  migration: ReturnType<typeof migrate>;
  db: ReturnType<typeof drizzle>;
};

export const drizzleProvider = {
  provide: InjectionToken.DRIZZLE,
  useFactory: async (dbConfig: DBConfigService): Promise<DrizzleProvider> => {
    const migrationConnection = new Client({ connectionString: dbConfig.url });
    const dbConnection = new Client({ connectionString: dbConfig.url });

    try {
      await Promise.all([
        migrationConnection.connect(),
        dbConnection.connect(),
      ]);

      const migration = migrate(drizzle(migrationConnection), {
        migrationsFolder: './migrations',
      });

      const db = drizzle(dbConnection);

      return { migration, db };
    } catch (e) {
      migrationConnection.end();
      dbConnection.end();

      throw e;
    }
  },
  inject: [DBConfigService],
};
