import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
//
import { PgModule } from './providers/database/pg';
//
import { validate } from './env.validator';
//
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate,
      envFilePath: path.resolve(__dirname, '../../../.env'),
    }),
    PgModule,
  ],
})
export class CoreModule {}
