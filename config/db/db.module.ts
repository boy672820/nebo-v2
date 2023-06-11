import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DBConfigService } from './db.service';
import configuration from './db.configuration';

@Module({
  imports: [ConfigModule.forFeature(configuration)],
  providers: [DBConfigService, ConfigService],
  exports: [DBConfigService],
})
export class DBConfigModule {}
