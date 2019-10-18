import { Body, Controller, Delete, Get, Head, Header, Logger, Param, Post, Put, Query } from '@nestjs/common';
import { ConfigService } from '../../services/config/config.service';
import { User } from '../../models/User';

@Controller('home')
export class HomeController {
  constructor(private readonly configSrv: ConfigService) {
  }

  @Post('add')
  create(@Body() user: User) {
    return 'This action adds a new user';
  }

  @Get()
  @Header('Cache-Control', 'none')
  findAll(@Query() query: any) {
    return `This action returns all users ${query.limit}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} user`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUser: User) {
    return `This action updates a #${id} user`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} user`;
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
