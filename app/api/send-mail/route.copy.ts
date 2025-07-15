import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// OPCIONAL: Usa variables de entorno (.env.local)
const EMAIL_USER = process.env.EMAIL_USER || "thcjrs1980@gmail.com";
const EMAIL_PASS = process.env.EMAIL_PASS || "T2808Aerocab2099";
const EMAIL_TO = process.env.EMAIL_TO || EMAIL_USER; // destinatario final

export async function POST(req: Request) {
  try {
    const { name, phone, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail", // o cambia a otro (ej: "hotmail", "outlook")
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });
    //    const transporter = nodemailer.createTransport({
    //      host: "sandbox.smtp.mailtrap.io",
    //      port: 587,
    //      auth: {
    //        user: process.env.MAILTRAP_USER,
    //        pass: process.env.MAILTRAP_PASS,
    //      },
    //    });

    const mailOptions = {
      from: `"Formulario Contacto" <${EMAIL_USER}>`,
      to: EMAIL_TO,
      subject: "Nuevo mensaje desde la web",
      html: `
        <h3>Nuevo mensaje desde el formulario de contacto:</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Teléfono:</strong> ${phone || "No proporcionado"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Mensaje enviado correctamente" });
  } catch (error) {
    console.error("Error al enviar correo:", error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje" },
      { status: 500 }
    );
  }
}
