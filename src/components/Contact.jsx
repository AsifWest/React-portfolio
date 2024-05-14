import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const url = "https://api.web3forms.com/submit";
    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        alert("ASIF has recieved your message!");
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred while sending the message. Please try again later.");
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 2 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      {/* <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>

        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          href={`mailto:${CONTACT.email}`}
          className="border-b"
        >
          {CONTACT.email}
        </motion.a>
      </div> */}
      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        className="mt-10 mx-auto max-w-lg"
      >
        <input type="hidden" name="access_key" value="d4cb0626-d548-405e-a942-7b848a16f8d8" />
        <div className="flex flex-col mb-6">
          <label htmlFor="name" className="mb-1 text-lg">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="p-2 border rounded text-black"
            placeholder="Enter your name"
          />
        </div>
        <div className="flex flex-col mb-6">
          <label htmlFor="email" className="mb-1 text-lg">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="p-2 border rounded text-black"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col mb-6">
          <label htmlFor="message" className="mb-1 text-lg">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="p-2 border rounded text-black"
            placeholder="Enter your message"
            rows="5"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Send Message
        </button>
      </motion.form>
    </div>
  );
};

export default Contact;
