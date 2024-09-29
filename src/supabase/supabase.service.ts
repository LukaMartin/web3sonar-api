import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  constructor() {}

  initializeSupabase() {
    return createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
  }
}
