import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { GlobalDataModule } from '../global-data/global-data.module';
import { SupabaseModule } from '../supabase/supabase.module';

@Module({
  imports: [GlobalDataModule, SupabaseModule],
  providers: [TaskService],
})
export class TaskModule {}
