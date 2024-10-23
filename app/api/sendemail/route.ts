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
  try {
    await mail.send(data);
    // await mail.send(userData);
    return Response.json({ sent: true });
  } catch (e) {
    return Response.json({ sent: false });
  }
}