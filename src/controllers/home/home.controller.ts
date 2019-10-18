import { Controller, Get, Logger } from '@nestjs/common';
import { ConfigService } from '../../services/config/config.service';

@Controller('home')
export class HomeController {
  constructor(private readonly configSrv: ConfigService) {
  }

  @Get('test')
  get() {
    // Logger.log('Message from log', HomeController.name);
    // Logger.warn('Message from warn', HomeController.name);
    // Logger.error('something went wrong! ', 'test');
    // Logger.debug('Message from debug');
    // Logger.verbose('Message from verbose', HomeController.name);
    return this.configSrv.getAllSettings;
  }
}
