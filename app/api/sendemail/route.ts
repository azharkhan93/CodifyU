import { MailDataRequired } from "@sendgrid/mail";

const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request: Request, response: Response) {
  const ReceivedResponse = await request.json();
  const data = {
    to: ["muqqadas.codefyu@gmail.com"],
    from: "azharkhan.work101@gmail.com",
    subject: "Contact Form Details",
    templateId: "d-0dd53c7b88bc4f4bac91cd59bd0e2bcb",
    dynamicTemplateData: {
        name: ReceivedResponse.name,
        lastName: ReceivedResponse.lastName,  
        email: ReceivedResponse.email,
        phone: ReceivedResponse.phone, 
        subject: ReceivedResponse.subject,    
         message: ReceivedResponse.message,
    },
  };
  const userData = {
    to: ReceivedResponse.email, 
    from: "azharkhan.work101@gmail.com",
    subject: "Thank You for Contacting Us",
    templateId: "d-your-thank-you-template-id", 
    dynamicTemplateData: {
      name: ReceivedResponse.name,
      lastName: ReceivedResponse.lastName,
      message: "Thank you for reaching out! We appreciate your interest and will get back to you shortly.", 
    },
  };
  try {
    await mail.send(data);
    await mail.send(userData);
    return Response.json({ sent: true });
  } catch (e) {
    return Response.json({ sent: false });
  }
}