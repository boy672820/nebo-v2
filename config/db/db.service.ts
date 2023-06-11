import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DBConfigService {
  constructor(private readonly config: ConfigService) {}

  get url() {
    const engine = this.config.get<string>('db.engine');
    const user = this.config.get<string>('db.user');
    const password = this.config.get<string>('db.password');
    const host = this.config.get<string>('db.host');
    const port = this.config.get<string>('db.port');
    const name = this.config.get<string>('db.name');

    return `${engine}://${user}:${password}@${host}:${port}/${name}`;
  }
}
