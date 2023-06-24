import { Module } from '@nestjs/common';
import { DbConfigModule } from '@config';
import { pgProvider } from './pg.provider';

@Module({
  imports: [DbConfigModule],
  providers: [pgProvider],
})
export class PgModule {}
