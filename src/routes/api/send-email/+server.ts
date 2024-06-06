import { json } from "@sveltejs/kit";
import { BREVO_API_KEY } from "$env/static/private";
import type { RequestHandler } from "./$types";
import SibApiV3Sdk from "@getbrevo/brevo";
import getEmailTemplate from "$lib/server/emails/getEmailTemplate";

export const POST: RequestHandler = async ({ request }) => {
  const data = await request.json();
  const { subject, sender, to, attachments } = data;
  let brevo = new SibApiV3Sdk.TransactionalEmailsApi();

  // @ts-ignore
  let brevoAuth = brevo.authentications["apiKey"];
  brevoAuth.apiKey = BREVO_API_KEY;

  let emailObj = new SibApiV3Sdk.SendSmtpEmail();
  emailObj.subject = subject;
  emailObj.sender = sender;
  emailObj.to = [to];
  emailObj.replyTo = sender;
  emailObj.htmlContent = getEmailTemplate(data);

  if (attachments) emailObj.attachment = attachments;

  await brevo.sendTransacEmail(emailObj);
  return json({ success: true });
};
