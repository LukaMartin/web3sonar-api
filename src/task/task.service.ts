import { Injectable } from '@nestjs/common';
import { GlobalDataService } from '../global-data/global-data.service';
//import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class TaskService {
  constructor(private readonly globalDataService: GlobalDataService) {}

  // @Cron(CronExpression.EVERY_6_HOURS)
  // async updateGlobalData() {
  //   try {
  //     await this.globalDataService.getGlobalData();
  //   } catch (error) {
  //     console.log('Error updating global data', error);
  //   }
  // }
}
