import mail from "@sendgrid/mail";

mail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(request: Request) {
  try {
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
      dynamicTemplateData: {},
    };

    await mail.send(data);
    await mail.send(userData);

    return new Response(JSON.stringify({ sent: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error: any) {
    console.error("Error sending email:", error);

    return new Response(JSON.stringify({ sent: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
