import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DbConfigService } from './db.config.service';
import configuration from './db.configuration';

@Module({
  imports: [ConfigModule.forFeature(configuration)],
  providers: [DbConfigService, ConfigService],
  exports: [DbConfigService],
})
export class DbConfigModule {}
