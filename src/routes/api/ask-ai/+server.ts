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
      content: data.choices?.[0].message.content,
    });
  } catch (err: any) {
    throw error(500, err);
  }
};

// return json({
//   success: true,
//   content:
//     'In the context of our company, "The Sand Studio" is a creative agency crafted by talented individuals from around the globe, based in Bangkok. We offer a wide range of design, development, and consultation services.\n\nIf you\'re inquiring about the material "sand," it commonly refers to granular material composed of finely divided rock and mineral particles, typically found on beaches and deserts.\n\nHow else may I assist you today?',
// });

// const sleep: any = (time) => {
//   return new Promise((res, _) => setTimeout(() => res(""), time));
// };
// await sleep(3000);
