"use client"

import axios from "axios";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export const FormComponent = () => {
  const [ isSubmitting, setIsSubmitting ] = useState( false );
  const [ formSubmitted, setFormSubmitted ] = useState( false );
  const [ form, setForm ] = useState({
    name: "",
    phone: "",
    email: "",
    carModel: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if ( name === "phone" ) {
      // Remove any non-digit characters
      const phoneValue = value.replace(/\D/g, '');
      setForm((prevForm) => ({
        ...prevForm,
        [name]: phoneValue,
      }));
      return;
    }

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));

    return
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      const htmlContent = `
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                padding: 20px;
                margin: 0;
              }
              .container {
                max-width: 600px;
                background-color: #ffffff;
                padding: 30px;
                margin: 0 auto;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0,0,0,0.1);
              }
              h2 {
                color: #333333;
                margin-top: 0;
              }
              .info {
                margin-bottom: 20px;
              }
              .label {
                font-weight: bold;
                color: #555555;
              }
              .value {
                color: #000000;
              }
              .footer {
                text-align: center;
                font-size: 12px;
                color: #999999;
                margin-top: 30px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h2>Nuevo mensaje desde el formulario de contacto</h2>
              <div class="info"><span class="label">Nombre:</span> <span class="value">${form.name}</span></div>
              <div class="info"><span class="label">Email:</span> <span class="value">${form.email}</span></div>
              <div class="info"><span class="label">Teléfono:</span> <span class="value">${form.phone}</span></div>
              <div class="info"><span class="label">Marca y modelo:</span><br/><div class="value">${form.carModel.replace(/\n/g, '<br/>')}</div></div>
              <div class="footer">Este correo fue enviado automáticamente desde pasatullave.com</div>
            </div>
          </body>
        </html>
        `;
      const body = {
         sender: {
            name: 'PasaTuLlave - Contact Form',
            email: 'pasatullave@gmail.com',
         },
         to: [
            {
               email: 'pasatullave@gmail.com',
               name: 'PasaTuLlave',
            },
         ],
         subject: 'Nuevo Contacto - PasaTuLlave',
         htmlContent: htmlContent,
      };

      try {
          setIsSubmitting( true )
          await axios.post('https://api.brevo.com/v3/smtp/email', body, {
             headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'api-key': process.env.NEXT_PUBLIC_BREVO_APIKEY,
             },
          });

          setIsSubmitting( false )
          setFormSubmitted( true )
          setForm({
            name: "",
            email: "",
            phone: "",
            carModel: ""
          });

          setTimeout(() => setFormSubmitted( false ) , 4000)
      } catch (error) {
         console.log(error);
         setIsSubmitting( false )
      }
  }

  return (
    <form onSubmit={ handleSubmit } className="rounded-2xl bg-white p-6 text-[#0B2B45] shadow-2xl sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-bold">
          Nombre
          <input
            required
            name="name"
            value={form.name}
            onChange={handleInputChange}
            className="rounded-lg border border-[#0B2B45]/15 px-4 py-3 font-normal outline-none focus:border-[#D4A72C]"
            placeholder="Tu nombre"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-bold">
          Teléfono
          <input
            required
            name="phone"
            value={form.phone}
            onChange={handleInputChange}
            type="tel"
            className="rounded-lg border border-[#0B2B45]/15 px-4 py-3 font-normal outline-none focus:border-[#D4A72C]"
            placeholder="999 123 456"
          />
        </label>
      </div>
      <label className="mt-4 flex flex-col gap-2 text-sm font-bold">
        Correo electrónico
        <input
          required
          type="email"
          name="email"
          value={form.email}
          onChange={handleInputChange}
          className="rounded-lg border border-[#0B2B45]/15 px-4 py-3 font-normal outline-none focus:border-[#D4A72C]"
          placeholder="mail@mail.com"
        />
      </label>
      <label className="mt-4 flex flex-col gap-2 text-sm font-bold">
        Marca y modelo
        <input
          required
          name="carModel"
          value={form.carModel}
          onChange={handleInputChange}
          className="rounded-lg border border-[#0B2B45]/15 px-4 py-3 font-normal outline-none focus:border-[#D4A72C]"
          placeholder="Ej. Mazda CX-5 2021"
        />
      </label>
      <button
        type="submit"
        disabled={ isSubmitting }
        className="cursor-pointer mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-[#D4A72C] px-5 py-3.5 font-black text-[#0B2B45] hover:bg-[#e2b83e] disabled:backdrop:grayscale disabled:opacity-70"
      >
        { isSubmitting ? "Enviando..." : "Solicitar inspección gratuita" }
        <ArrowRight className="size-4" />
      </button>
    </form>
  );
};
