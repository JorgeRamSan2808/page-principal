"use client";
import AvatarServices from "@/components/avatar-services";
import { useState } from "react";
import { MotionTransition } from "./transition-components";

const AvatarContactMe = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validaciones personalizadas
    if (!form.name.trim()) {
      alert("El nombre es obligatorio.");
      return;
    }

    if (!form.message.trim()) {
      alert("El mensaje es obligatorio.");
      return;
    }

    if (!form.phone.trim() && !form.email.trim()) {
      alert("Debe ingresar al menos un teléfono o un correo electrónico.");
      return;
    }

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      alert("Mensaje enviado");

      if (data.success) {
        setForm({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error(error);
      alert("Ocurrió un error al enviar el mensaje.");
    }
  };

  return (
    <>
      <MotionTransition
        position="right"
        className="relative z-30 w-full px-4 pt-24 pb-20 sm:pt-28 sm:pb-28 flex justify-center"
      >
        <div className="w-full max-w-md mx-auto p-4 rounded-lg backdrop-blur bg-white/5 shadow-md">
          <form
            onSubmit={handleSubmit}
            className="space-y-3 text-sm sm:text-base"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-center text-white">
              Contáctame
            </h2>
            <p className="text-base sm:text-base text-center text-white">
              Si requieres de algo en que te pueda ayudar o requieres que te
              comparta mi CV, escríbeme, estoy a tus ordenes.
            </p>

            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={form.name}
              onChange={handleChange}
              className="w-full p-2 rounded bg-white/10 text-white placeholder-gray-300 focus:outline-none"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Teléfono (opcional)"
              value={form.phone}
              onChange={handleChange}
              className="w-full p-2 rounded bg-white/10 text-white placeholder-gray-300 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico (opcional)"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 rounded bg-white/10 text-white placeholder-gray-300 focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Tu mensaje"
              value={form.message}
              onChange={handleChange}
              rows={3}
              className="w-full p-2 rounded bg-white/10 text-white placeholder-gray-300 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="w-full py-2 bg-secondary rounded text-white hover:bg-secondary/90 transition"
            >
              Enviar
            </button>
          </form>
        </div>
      </MotionTransition>

      <AvatarServices />
    </>
  );
};

export default AvatarContactMe;
