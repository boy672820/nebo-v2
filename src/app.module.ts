import { Module } from '@nestjs/common';
import { CoreModule } from '@core';
import { UserModule } from './user/user.module';

@Module({
  imports: [CoreModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
