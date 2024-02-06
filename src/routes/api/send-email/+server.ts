import SibApiV3Sdk from "@getbrevo/brevo";
import { BREVO_API_KEY } from "$env/static/private";
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = () => {
  let brevo = new SibApiV3Sdk.TransactionalEmailsApi();

  // @ts-ignore
  let brevoAuth = brevo.authentications["apiKey"];
  brevoAuth.apiKey = BREVO_API_KEY;

  let email = new SibApiV3Sdk.SendSmtpEmail();

  email.subject = "My {{params.subject}}";
  email.htmlContent =
    "<html><body><h1>This is my first transactional email using Brevo by Yaung Hein</h1></body></html>";
  email.sender = { name: "Yaung Hein", email: "example@yaunghein.com" };
  email.to = [{ email: "yan@thesandstudio.com", name: "Test Name" }];
  email.replyTo = { email: "replyto@domain.com", name: "John Doe" };

  brevo.sendTransacEmail(email).then(
    function (data) {
      console.log(
        "API called successfully. Returned data: " + JSON.stringify(data),
      );
    },
    function (error) {
      console.error(error);
    },
  );

  return new Response(String("1"));
};
