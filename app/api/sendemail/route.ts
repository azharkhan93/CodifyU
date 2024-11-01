import { MailDataRequired } from "@sendgrid/mail";

const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request: Request, response: Response) {
  const ReceivedResponse = await request.json();
  const data = {
    to: ["muqqadas.codefyu@gmail.com", "adnaannazir@gmail.com"],
    from: "codefyu.inquiries@gmail.com",
    subject: "Contact Form Details",
    templateId: "d-ce91e7838ef14cec83cde27aca9d9412",
    
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