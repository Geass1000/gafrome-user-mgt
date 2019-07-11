import * as Nest from '@nestjs/common';

import * as Gafrome from 'gafrome-core';

import { environment } from '../environments/environment';

const NestCacheModule = Nest.CacheModule.register({
  ttl: 0, max: 0,
});

const modules = [
  Gafrome.Modules.Logger.LoggerModule,
  Gafrome.Modules.Database.DatabaseModule,
  Gafrome.Modules.Nats.NatsModule,
];

@Nest.Global()
@Nest.Module({
  imports: [
    ...modules,
  ],
  providers: [
    {
      provide: Gafrome.Modules.Logger.Constants.DI.LoggerOptions,
      useValue: {
        ...environment.logger,
      },
    },
    {
      provide: Gafrome.Modules.Database.Constants.DI.Mongoose.Config,
      useValue: {
        ...environment.database.mongodb,
      },
    },
    {
      provide: Gafrome.Modules.Nats.Constants.DI.Config,
      useValue: {
        ...environment.nats,
      },
    },
  ],
  exports: [
    ...modules,
    Gafrome.Modules.Logger.Constants.DI.LoggerOptions,
    Gafrome.Modules.Database.Constants.DI.Mongoose.Config,
    Gafrome.Modules.Nats.Constants.DI.Config,
  ],
})
export class CoreModule {}
