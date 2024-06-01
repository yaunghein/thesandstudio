import { json, error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { OPENAI_API_KEY } from "$env/static/private";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

export const POST: RequestHandler = async ({ request }) => {
  try {
    const { messages } = await request.json();
    const data = await openai.chat.completions.create({
      model: "gpt-4o",
      messages,
      temperature: 1,
      max_tokens: 500,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    return json({
      success: true,
      reply: data.choices?.[0].message.content,
      role: "assistant",
    });
  } catch (err: any) {
    throw error(500, err.message);
  }
};
