import { Injectable } from '@nestjs/common';
import { GlobalDataService } from '../global-data/global-data.service';

@Injectable()
export class TaskService {
  constructor(private readonly globalDataService: GlobalDataService) {}
}
