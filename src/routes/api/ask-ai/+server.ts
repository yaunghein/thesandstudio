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
//   content: "Certainly! Here are the services offered by The Sand Studio: 1. **Visual Identity** 2. **Motion Graphics and Animation** 3. **Packaging** 4. **Web Design and Development** 5. **Web Maintenance and Support** 6. **E-commerce Solutions** 7. **Architectural Design** 8. **Interior Design** 9. **3D Modeling and Visualization** 10. **App Design and Development** 11. **Graphic Design** 12. **Digital Marketing** 13. **Consultation** Please choose a specific service you're interested in, and I'll provide more detailed information about it.",
// });

// function sleep(time: number) {
//   return new Promise((res, _) => setTimeout(() => res(""), time));
// }
