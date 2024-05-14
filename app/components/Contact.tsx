import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  function sendEmail(e: { preventDefault: () => void }) {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_13p25f8",
        "template_qj5ast2",
        templateParams,
        "6W059NkiXAAhRHg_y",
      )
      .then(
        (response) => {
          console.log("Email enviado", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("Erro: ", error);
        },
      )
      .finally(() => {
        setIsSending(false);
      });
  }

  return (
    <div id="contato" className="bg-gray-900 pb-[5rem] pt-[7.5rem]">
      <div className="mx-auto grid w-[80%] grid-cols-1 items-center gap-[2rem] md:grid-cols-2">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
        >
          <p className="heading_mini">Deixe uma mensagem</p>
          <h1 className="text-[28px] font-bold uppercase text-white sm:text-[33px] md:text-[45px]">
            Meu <span className="text-yellow-400">Contato</span>
          </h1>
          <p className="mt-[1rem] text-[15px] text-white opacity-75">
            Vamos conversar! Estou disponível para colaborações, oportunidades e
            para responder qualquer dúvida que você possa ter. Aguardo seu
            contato!
          </p>
          <h1 className="mb-[2rem] mt-[2rem] text-[30px] font-bold text-yellow-300 underline">
            +55 92 98462-6960
          </h1>
        </motion.div>
        <motion.form
          onSubmit={sendEmail}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
        >
          <input
            type="text"
            placeholder="Nome"
            required
            maxLength={500}
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="mb-[1.5rem] h-14 w-full rounded-md bg-gray-800 px-4 py-[0.7rem] text-white outline-none"
          />
          <input
            type="email"
            required
            maxLength={500}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
            className="h-14 w-full rounded-md bg-gray-800 px-4 py-[0.7rem] text-white outline-none"
          />
          <textarea
            placeholder="Mensagem"
            name="message"
            required
            maxLength={500}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="mb-[1.5rem] mt-[1.5rem] h-52 w-full rounded-md bg-gray-800 px-4 py-[1rem] text-white outline-none"
          ></textarea>
          <button
            type="submit"
            disabled={isSending}
            className={`group flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full bg-[#55e6a5] font-bold text-black outline-none transition-all hover:scale-110 focus:scale-110 ${
              isSending
                ? "cursor-not-allowed bg-gray-400"
                : "hover:bg-[#41b983]"
            } active:scale-105`}
          >
            {isSending ? "Enviando..." : "Enviar"}
            <FaPaperPlane className="text-xs opacity-90" />
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;