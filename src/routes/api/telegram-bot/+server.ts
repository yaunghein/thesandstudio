import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import TelegramBot from "node-telegram-bot-api";

const token = "";
const bot = new TelegramBot(`${token}`, {
  polling: true,
});

export const POST: RequestHandler = async ({ request, cookies }) => {
  console.dir(await request.json(), { depth: null });

  bot.on("message", async (msg) => {
    const chatId = msg.chat.id;

    if (msg.text === "🌴 The Sand Studio Website") {
      bot.sendMessage(chatId, "Click to Enter to The Sand Studio Website! 🌴", {
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "The Sand Studio Website! 🌴",
                web_app: { url: "https://76da-171-6-144-226.ngrok-free.app" },
              },
            ],
          ],
        },
      });
      return json({ success: true });
    }

    await bot.sendMessage(chatId, "Received your message, hehe 👌.");
    await bot.sendMessage(chatId, "Welcome to The Sand Studio! 🌴", {
      reply_markup: {
        keyboard: [[{ text: "🌴 The Sand Studio Website" }]],
      },
    });
  });

  return json({ success: true });
};
