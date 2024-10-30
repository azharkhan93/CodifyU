import { MailDataRequired } from "@sendgrid/mail";

const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request: Request, response: Response) {
  const ReceivedResponse = await request.json();
// if (!ReceivedResponse.services || ReceivedResponse.services.length === 0) {
//     console.error("No services selected.");
//     return Response.json({ sent: false, error: "No services selected." });
//   }
const services = Array.isArray(ReceivedResponse.services) 
      ? ReceivedResponse.services.join(", ") 
      : ReceivedResponse.services;

  const data = {
    to: ["muqqadas.codefyu@gmail.com"],
    // to: ["ak305368@gmail.com", "another@example.com", "someoneelse@example.com"],
    from: "codefyu.inquiries@gmail.com",
    subject: "Services Form Details",
    templateId: "d-e93c89857c654e7d8b7a4ead31f3a7bd",
    dynamicTemplateData: {
        name: ReceivedResponse .username,
        email: ReceivedResponse .email,
        services: services,
        
      },
  };
  const userData = {
    to: ReceivedResponse.email, 
    from: "codefyu.inquiries@gmail.com",
    subject: "Thank You for Contacting Us",
    templateId: "d-7b051f274e8747c3a3d2351139fa1c30", 
    dynamicTemplateData: {}
  };
  try {
    await mail.send(data);
    await mail.send(userData);
    return Response.json({ sent: true });
  } catch (e) {
    return Response.json({ sent: false });
  }
}