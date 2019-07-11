import * as GafromeLogger from 'gafrome-core/modules/logger';

export namespace Environment {
  export namespace Nats {
    export const Url: string = 'nats://nats-container:4222';
  }

  export namespace Mongodb {
    export const Username = `root`;
    export const Password = `12345`;
    export const Host = `mongo-container`;
    export const Port = `27017`;
    export const Database = `gafrome`;
  }

  export namespace Logger {
    export const Level = GafromeLogger.Enums.LogLevel.Log;
  }
}
