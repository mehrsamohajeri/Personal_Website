"use client";

import emailjs from "@emailjs/browser";
import { FormEvent, useEffect, useState } from "react";

const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "br2jrUQ3WlLDjNLUn";
const EMAILJS_SERVICE =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_74aoa4a";
const EMAILJS_TEMPLATE =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_xbu9z31";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = (form.elements.namedItem("user_name") as HTMLInputElement)
      .value;
    const email = (form.elements.namedItem("user_email") as HTMLInputElement)
      .value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    setStatus("loading");

    try {
      await emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, {
        from_name: name,
        from_email: email,
        message,
      });
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <div className="flex flex-wrap w-full">
        {status === "success" ? (
          <p
            className="w-full mb-4 p-3 rounded-md font-handlee text-lg text-[#212529] bg-white/80 border-2 border-[#212529]"
            role="status"
          >
            Your message has been sent successfully!
          </p>
        ) : null}
        {status === "error" ? (
          <p
            className="w-full mb-4 p-3 rounded-md font-handlee text-lg text-white bg-[#212529] border-2 border-[#212529]"
            role="alert"
          >
            Failed to send your message. Please try again.
          </p>
        ) : null}
        <div className="w-full flex-wrap flex mb-6">
          <label
            className="w-full mb-3 font-handlee text-[#212529] text-2xl text-center lg:text-start"
            htmlFor="name"
          >
            What is Your Name?
          </label>
          <input
            id="name"
            name="user_name"
            type="text"
            className="w-full p-2 rounded-md font-handlee text-xl"
            required
            disabled={status === "loading"}
          />
        </div>
        <div className="w-full flex-wrap flex mb-6">
          <label
            className="w-full mb-3 font-handlee text-[#212529] text-2xl text-center lg:text-start"
            htmlFor="email"
          >
            Your Email Address:
          </label>
          <input
            id="email"
            name="user_email"
            type="email"
            className="w-full p-2 rounded-md font-handlee text-xl"
            required
            disabled={status === "loading"}
          />
        </div>
        <div className="w-full flex-wrap flex mb-8">
          <label
            className="w-full mb-3 font-handlee text-[#212529] text-2xl text-center lg:text-start"
            htmlFor="form-message"
          >
            How can I Help you?
          </label>
          <textarea
            id="form-message"
            name="message"
            className="p-2 rounded-md w-full font-handlee text-xl"
            rows={4}
            required
            disabled={status === "loading"}
          />
        </div>
        <div className="flex flex-wrap w-full justify-center">
          <button
            type="submit"
            title="send"
            disabled={status === "loading"}
            className="font-patrick text-xl text-white w-fit rounded-md bg-[#212529] py-2 px-5 border-[3px] border-[#212529] hover:bg-transparent hover:text-[#212529] duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending…" : "Send"}
          </button>
        </div>
      </div>
    </form>
  );
}