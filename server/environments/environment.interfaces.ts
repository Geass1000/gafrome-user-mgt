import * as GafromeDatabase from 'gafrome-core/modules/database';
import * as GafromeLogger from 'gafrome-core/modules/logger';

import * as Gafrome from 'gafrome-core';

export namespace Environment {
  export interface NatsOptions {
    url: string;
  }

  export interface Database {
    mongodb: GafromeDatabase.Interfaces.DatabaseConifg;
  }

  export interface Logger {
    level: GafromeLogger.Enums.LogLevel;
  }
}

export interface Environment {
  mode: Gafrome.Shared.Enums.Environment.Mode;
  nats: Environment.NatsOptions;
  database: Environment.Database;
  logger: Environment.Logger;
}
