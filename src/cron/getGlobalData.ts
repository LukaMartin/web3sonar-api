import { GlobalData } from '../global-data/types';
import { createClient } from '@supabase/supabase-js';

export const getGlobalData = async () => {
  try {
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_KEY,
    );

    const response = await fetch('https://api.coinlore.net/api/global/');
    const data: GlobalData[] = await response.json();

    const { error } = await supabase.from('global_crypto_data').insert({
      total_marketcap: data[0].total_mcap.toString(),
      btc_dominance: data[0].btc_d,
      eth_dominance: data[0].eth_d,
      market_cap_change_24h: data[0].mcap_change,
    });

    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    console.log('Error fetching global data', error);
  }
};
