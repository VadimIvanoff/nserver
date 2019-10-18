import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from './services/config/config.service';
import { ConfigModule } from './modules/config/config.module';
import { HomeController } from './controllers/home/home.controller';

@Module({
  imports: [ConfigModule],
  controllers: [AppController, HomeController],
  providers: [AppService],
})
export class AppModule {}
