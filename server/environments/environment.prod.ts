import * as Gafrome from 'gafrome-core';
import * as Constants from './environment.constants';
import * as Interfaces from './environment.interfaces';

export const environment: Interfaces.Environment = {
  mode: Gafrome.Shared.Enums.Environment.Mode.Production,
  nats: {
    url: process.env.NATS_URL || Constants.Environment.Nats.Url,
  },
  database: {
    mongodb: {
      username: process.env.DB_MONGODB_USERNAME || Constants.Environment.Mongodb.Username,
      password: process.env.DB_MONGODB_PASSWORD || Constants.Environment.Mongodb.Password,
      host: process.env.DB_MONGODB_HOST || Constants.Environment.Mongodb.Host,
      port: process.env.DB_MONGODB_PORT || Constants.Environment.Mongodb.Port,
      database: process.env.DB_MONGODB_DATABASE || Constants.Environment.Mongodb.Database,
    },
  },
  logger: {
    level: +process.env.LOGGER_LEVEL || Constants.Environment.Logger.Level,
  },
};
