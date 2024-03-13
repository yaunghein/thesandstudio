import { json, redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { TEMP_PASSWORD } from "$env/static/private";

export const GET: RequestHandler = async ({ request, cookies }) => {
  return json({ success: true });
};

export const POST: RequestHandler = async ({ request, cookies }) => {
  const { password } = await request.json();
  if (!password) {
    return json({ success: false, message: "Password is required." });
  }
  if (password !== TEMP_PASSWORD) {
    return json({ success: false, message: "Invalid password." });
  }

  cookies.set("sand-fake-auth-cookie", "du-mat-char-lay-du-mat-char-lay-duuu", {
    path: "/",
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 3, // 3 days
    secure: true,
    sameSite: "strict",
  });

  return json({ success: true });
};
