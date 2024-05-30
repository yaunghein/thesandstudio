import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({ request, cookies }) => {
  const { key, value, age } = await request.json();

  cookies.set(key, value, {
    path: "/",
    httpOnly: true,
    maxAge: age,
    secure: true,
    sameSite: "strict",
  });

  return json({ success: true });
};
