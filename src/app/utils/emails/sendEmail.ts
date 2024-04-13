import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

const DEFAULT_FROM_EMAIL = "eylonshm@gmail.com";

const createMessage = ({ from, to }: { from: string; to: string }) => ({
  to,
  from,
  subject: "Sending with SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
});

export const sendEmail = async (formData: FormData) => {
  "use server";

  const email = formData.get("email");

  if (!email) return;

  const msg = createMessage({ from: DEFAULT_FROM_EMAIL, to: email as string });
  return sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error("Error sending email");
      console.error(error);
    });
};
