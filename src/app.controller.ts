import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { getGlobalData } from './cron/getGlobalData';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/cron')
  getCron(): string {
    getGlobalData();
    return 'Cron job started';
  }

  @Get('/health')
  getHealth(): string {
    return this.appService.getHealth();
  }
}
