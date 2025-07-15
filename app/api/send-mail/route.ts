import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io", // host de mailtrap
    port: 587,
    auth: {
      user: process.env.MAILTRAP_USER || "", // desde .env
      pass: process.env.MAILTRAP_PASS || "", // desde .env
    },
  });

  const mailOptions = {
    from: '"Formulario Contacto" <no-reply@tusitio.com>',
    to: "tucorreo@tudominio.com", // tu correo real o de pruebas
    subject: "Nuevo mensaje de contacto",
    html: `
      <h3>Nuevo mensaje de contacto</h3>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${phone}</p>
      <p><strong>Mensaje:</strong> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: "Correo enviado" });
  } catch (error) {
    console.error("Error al enviar correo:", error);
    return NextResponse.json(
      { success: false, message: "Error al enviar correo" },
      { status: 500 }
    );
  }
}
