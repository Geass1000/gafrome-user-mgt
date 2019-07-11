import * as Nest from '@nestjs/common';

import { CoreModule } from './core.module';
import { UserModule } from './user/user.module';

@Nest.Module({
  imports: [
    CoreModule,
    UserModule,
  ],
  controllers: [
  ],
  providers: [
  ],
})
export class AppModule {}
