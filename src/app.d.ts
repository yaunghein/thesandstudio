import { SupabaseClient, Session } from "@supabase/supabase-js";

declare global {
  namespace App {
    interface Locals {
      supabase: SupabaseClient;
      getSession(): Promise<Session | null>;
    }
    interface PageData {
      session: Session | null;
    }
  }

  interface Window {
    grained: (selector: string, options: GrainedOptions) => void;
  }

  interface GrainedOptions {
    animate: boolean;
    patternWidth: number;
    patternHeight: number;
    grainOpacity: number;
    grainDensity: number;
    grainWidth: number;
    grainHeight: number;
  }
}

export {};
