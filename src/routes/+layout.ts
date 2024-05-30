import {
  PUBLIC_SUPABASE_ANON_KEY,
  PUBLIC_SUPABASE_URL,
} from "$env/static/public";
import { createSupabaseLoadClient } from "@supabase/auth-helpers-sveltekit";

export const load = async ({ fetch, data, depends }) => {
  // depends("supabase:auth");

  // const supabase = createSupabaseLoadClient({
  //   supabaseUrl: PUBLIC_SUPABASE_URL,
  //   supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
  //   event: { fetch },
  //   serverSession: data.session,
  // });

  // const {
  //   data: { session },
  // } = await supabase.auth.getSession();

  const isMac = data.isMac;
  const isMobile = data.isMobile;
  const shouldShowLoadingScreen = data.shouldShowLoadingScreen;

  // return { supabase, session, isMac, isMobile };
  return { isMac, isMobile, shouldShowLoadingScreen };
};
