import {
  PUBLIC_SUPABASE_URL,
  PUBLIC_SUPABASE_ANON_KEY,
} from "$env/static/public";
import { createSupabaseServerClient } from "@supabase/auth-helpers-sveltekit";
import { redirect } from "@sveltejs/kit";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.supabase = createSupabaseServerClient({
    supabaseUrl: PUBLIC_SUPABASE_URL,
    supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
    event,
  });

  event.locals.getSession = async () => {
    const {
      data: { session },
    } = await event.locals.supabase.auth.getSession();
    return session;
  };

  // check auth with supabase
  if (event.url.pathname.startsWith("/yaung")) {
    const session = await event.locals.getSession();
    if (!session) {
      throw redirect(303, "/");
    }
  }

  // check auth with temp password - delete later
  if (
    event.url.pathname !== "/auth/temp-password/" &&
    !event.url.pathname.startsWith("/api")
  ) {
    const sandFakeAuthCookie = event.cookies.get("sand-fake-auth-cookie");
    if (!sandFakeAuthCookie) {
      throw redirect(303, "/auth/temp-password/");
    }
    if (sandFakeAuthCookie !== "du-mat-char-lay-du-mat-char-lay-duuu") {
      throw redirect(303, "/auth/temp-password/");
    }
  }
  if (event.url.pathname === "/auth/temp-password/") {
    const sandFakeAuthCookie = event.cookies.get("sand-fake-auth-cookie");
    if (sandFakeAuthCookie === "du-mat-char-lay-du-mat-char-lay-duuu") {
      throw redirect(303, "/");
    }
  }
  // delete till here

  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === "content-range";
    },
  });
};
