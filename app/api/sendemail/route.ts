import { NextResponse } from "next/server";
import mail from "@sendgrid/mail";

mail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(request: Request) {
  try {
    const { name, lastName, email, phone, subject, message } =
      await request.json();

    // Validate required fields
    if (!email || !name || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email for admin
    const adminEmail = {
      to: ["muqqadas.codefyu@gmail.com", "adnaannazir@gmail.com"],
      from: "codefyu.inquiries@gmail.com",
      subject: "Contact Form Details",
      templateId: "d-ce91e7838ef14cec83cde27aca9d9412",
      dynamicTemplateData: { name, lastName, email, phone, subject, message },
    };

    // Email for user
    const userEmail = {
      to: email,
      from: "codefyu.inquiries@gmail.com",
      subject: "Thank You for Contacting Us",
      templateId: "d-7b051f274e8747c3a3d2351139fa1c30",
      dynamicTemplateData: { name },
    };

    // Send emails concurrently
    await Promise.all([mail.send(adminEmail), mail.send(userEmail)]);

    return NextResponse.json({ success: true, message: "Emails sent successfully" });

  } catch (error: any) {
    console.error("Error sending email:", error);

    return NextResponse.json(
      { success: false, error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
