import { Module } from '@nestjs/common';
import { ConfigService } from '../../services/config/config.service';

@Module({
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService(`${'src/environments/development'}.env`),
    },
  ],
  exports: [ConfigService],
})

export class ConfigModule {
}
