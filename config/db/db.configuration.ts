import { registerAs } from '@nestjs/config';

export default registerAs('db', () => ({
  engine: process.env.DB_ENGINE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  name: process.env.DB_NAME,
}));
