import { NextResponse } from "next/server";
import mail from "@sendgrid/mail";

mail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(request: Request) {
  try {
    const ReceivedResponse = await request.json();

    if (!ReceivedResponse.email || !ReceivedResponse.username) {
      return NextResponse.json(
        { sent: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const services = Array.isArray(ReceivedResponse.services)
      ? ReceivedResponse.services.join(", ")
      : ReceivedResponse.services;

    const adminEmail = {
      to: ["muqqadas.codefyu@gmail.com", "adnaannazir@gmail.com"],
      from: "codefyu.inquiries@gmail.com",
      subject: "Services Form Details",
      templateId: "d-e93c89857c654e7d8b7a4ead31f3a7bd",
      dynamicTemplateData: {
        name: ReceivedResponse.username,
        email: ReceivedResponse.email,
        services,
      },
    };

    const userEmail = {
      to: ReceivedResponse.email,
      from: "codefyu.inquiries@gmail.com",
      subject: "Thank You for Contacting Us",
      templateId: "d-7b051f274e8747c3a3d2351139fa1c30",
      dynamicTemplateData: { name: ReceivedResponse.username },
    };

    await Promise.all([mail.send(adminEmail), mail.send(userEmail)]);

    return NextResponse.json({ sent: true });

  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json({ sent: false, error: error.message }, { status: 500 });
  }
}
