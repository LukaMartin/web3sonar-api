import { Module } from '@nestjs/common';
import { GlobalDataService } from './global-data.service';
import { SupabaseModule } from '../supabase/supabase.module';

@Module({
  imports: [SupabaseModule],
  providers: [GlobalDataService],
  exports: [GlobalDataService],
})
export class GlobalDataModule {}
