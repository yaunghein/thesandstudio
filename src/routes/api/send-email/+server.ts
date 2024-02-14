import { json } from "@sveltejs/kit";
import SibApiV3Sdk from "@getbrevo/brevo";
import { BREVO_API_KEY } from "$env/static/private";
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({ request }) => {
  const { name, email: emailAddress, message } = await request.json();
  let brevo = new SibApiV3Sdk.TransactionalEmailsApi();

  // @ts-ignore
  let brevoAuth = brevo.authentications["apiKey"];
  brevoAuth.apiKey = BREVO_API_KEY;

  let email = new SibApiV3Sdk.SendSmtpEmail();
  email.subject = `Website Form Submission: ${name}`;
  email.htmlContent = `<html><body><div>${name}</div><div>${emailAddress}</div><div>${message}</div></body></html>`;
  email.sender = { name, email: emailAddress };
  email.to = [{ email: "yan@thesandstudio.com", name: "The SAND Studio" }];
  email.replyTo = { email: "yan@thesandstudio.com", name: "The SAND Studio" };

  const data = await brevo.sendTransacEmail(email);
  return json(data);
};
