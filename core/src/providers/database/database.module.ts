import { Inject, Module, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { InjectionToken } from '@core';
import { DrizzleProvider, drizzleProvider } from './drizzle.provider';

@Module({
  providers: [drizzleProvider],
})
export class DatabaseModule implements OnModuleInit, OnModuleDestroy {
  constructor(
    @Inject(InjectionToken.DRIZZLE) private readonly drizzle: DrizzleProvider,
  ) {}

  async onModuleInit() {}

  async onModuleDestroy() {}
}
