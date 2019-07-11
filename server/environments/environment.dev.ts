import * as Gafrome from 'gafrome-core';
import * as Constants from './environment.constants';
import * as Interfaces from './environment.interfaces';

export const environment: Interfaces.Environment = {
  mode: Gafrome.Shared.Enums.Environment.Mode.Development,
  nats: {
    url: Constants.Environment.Nats.Url,
  },
  database: {
    mongodb: {
      username: Constants.Environment.Mongodb.Username,
      password: Constants.Environment.Mongodb.Password,
      host: Constants.Environment.Mongodb.Host,
      port: Constants.Environment.Mongodb.Port,
      database: Constants.Environment.Mongodb.Database,
    },
  },
  logger: {
    level: Constants.Environment.Logger.Level,
  },
};
