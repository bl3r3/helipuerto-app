"use client";
import { useState } from "react";
// import sendEmail from "../app/lib/sendEmail";

type FormProps = {
  textArea?: boolean;
};

export const FormComponent = (props: FormProps) => {
  const { textArea } = props;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState({
    isSuccessful: true,
    message: "",
  });

  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();

  //   try {
  //     const req = await sendEmail(name, email, phone, subject, message);
  //     if (req.status === 250) {
  //       setResponseMessage({
  //         isSuccessful: true,
  //         message: "Thank you for your message.",
  //       });
  //     }
  //   } catch (e) {
  //     console.log(e);
  //     setResponseMessage({
  //       isSuccessful: false,
  //       message: "Su mensaje ha sido enviado correctamente.",
  //     });
  //   }
  // };

  return (
    <form className="w-full md:w-1/2">
      <div className="grid gap-6 mb-6 md:grid-cols-1">
        <div className="flex flex-col gap-6 mt-9">
          <input
            type="text"
            id="first_name"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="bg-lime-50 border border-lime-500 text-black text-sm rounded-lg focus:ring-lime-400 focus:border-coporativo block w-full p-2.5   placeholder-black text-content"
            placeholder="Nombre y Apellidos*"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            className="bg-lime-50 border border-lime-500 text-black text-sm rounded-lg focus:ring-lime-400 focus:border-coporativo block w-full p-2.5 placeholder-black text-content"
            placeholder="Telefono de contacto*"
            required
          />
          <textarea
            id="message"
            name="message"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-lime-50 border border-lime-500 text-black text-sm rounded-lg focus:ring-lime-400 focus:border-coporativo block w-full p-2.5 placeholder-black text-content"
            placeholder="Correo electronico*"
            required
          />
          <button
            onClick={(e) => {
              // handleSubmit(e);
            }}
            type="submit"
            className="text-black bg-lime-400 hover:bg-black hover:text-lime-400 focus:ring-4 focus:outline-none  focus:ring-blue-300 font-medium rounded-3xl text-sm sm:w-28 px-5 py-2.5 text-center text-content"
          >
            Enviar
          </button>
        </div>

        {/* <div className="w-full flex justify-end"></div>
        {!responseMessage.isSuccessful && (
          <div className="w-full flex justify-end">
            <p className="text-green  text-sm">{responseMessage.message}</p>
          </div>
        )} */}
      </div>
    </form>
  );
};
