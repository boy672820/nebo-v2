import { plainToInstance } from 'class-transformer';
import { IsEnum, IsNumber, IsString, validateSync } from 'class-validator';

export enum Enviroment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
}

export enum EnvKey {
  NODE_ENV = 'NODE_ENV',
  PORT = 'PORT',

  DB_ENGINE = 'DB_ENGINE',
  DB_USER = 'DB_USER',
  DB_PASSWORD = 'DB_PASSWORD',
  DB_HOST = 'DB_HOST',
  DB_PORT = 'DB_PORT',
  DB_NAME = 'DB_NAME',
}

class EnviromentVariables {
  @IsEnum(Enviroment)
  NODE_ENV: Enviroment;
  @IsNumber()
  PORT: number;

  @IsString()
  DB_ENGINE: string;
  @IsString()
  DB_USER: string;
  @IsString()
  DB_PASSWORD: string;
  @IsString()
  DB_HOST: string;
  @IsNumber()
  DB_PORT: number;
  @IsString()
  DB_NAME: string;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnviromentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return validatedConfig;
}
