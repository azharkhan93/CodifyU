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
    to: ["ak305368@gmail.com"],
    from: "azharkhan.work101@gmail.com",
    subject: "Services Form Details",
    templateId: "d-b600ae40c72b49fa8b19a28848ad1534",
    dynamicTemplateData: {
        name: ReceivedResponse .username,
        email: ReceivedResponse .email,
        services: services,
        
      },
  };
//   const userData = {
//     to: ReceivedResponse.email, 
//     from: "azharkhan.work101@gmail.com",
//     subject: "Thank You for Contacting Us",
//     templateId: "d-your-thank-you-template-id", 
//     dynamicTemplateData: {
//         email: ReceivedResponse .email,
//       message: "Thank you for reaching out! We appreciate your interest and will get back to you shortly.", 
//     },
//   };
  try {
    await mail.send(data);
    // await mail.send(userData);
    return Response.json({ sent: true });
  } catch (e) {
    return Response.json({ sent: false });
  }
}