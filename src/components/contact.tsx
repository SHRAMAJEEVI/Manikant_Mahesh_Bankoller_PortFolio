import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState, useRef, type FormEvent, type ChangeEvent } from "react";
import { toast } from "sonner";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

// Contact
export const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // handle form change
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  // validate form on submit
  const validateForm = () => {
    // form fields
    const { name, email, message } = form;

    // Clear previous errors
    const nameError = document.querySelector("#name-error");
    const emailError = document.querySelector("#email-error");
    const messageError = document.querySelector("#message-error");
    
    if (nameError) nameError.classList.add("hidden");
    if (emailError) emailError.classList.add("hidden");
    if (messageError) messageError.classList.add("hidden");

    type Current = {
      name: boolean;
      email: boolean;
      message: boolean;
    };
    const current: Current = { name: false, email: false, message: false };

    // validate name
    if (!name || name.trim().length < 3) {
      if (nameError) nameError.classList.remove("hidden");
      current["name"] = false;
      return false;
    } else {
      if (nameError) nameError.classList.add("hidden");
      current["name"] = true;
    }

    const email_regex =
      /^(([^<>()[\]\\.,;:\s@\"]+([^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // validate email
    if (!email || !email.trim().toLowerCase().match(email_regex)) {
      if (emailError) emailError.classList.remove("hidden");
      current["email"] = false;
      return false;
    } else {
      if (emailError) emailError.classList.add("hidden");
      current["email"] = true;
    }

    // validate message
    if (!message || message.trim().length < 5) {
      if (messageError) messageError.classList.remove("hidden");
      current["message"] = false;
      return false;
    } else {
      if (messageError) messageError.classList.add("hidden");
      current["message"] = true;
    }

    // True if all fields are validated
    return Object.keys(current).every(
      (k) => current[k as keyof typeof current],
    );
  };

  // handle form submit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // prevent default page reload
    e.preventDefault();

    // validate form
    const isValid = validateForm();
    if (!isValid) {
      toast.error("Please fill all fields correctly.");
      return;
    }

    // Check if all fields have content (basic validation)
    const { name, email, message } = form;
    if (name.trim() && email.trim() && message.trim()) {
      // show loader
      setLoading(true);

      // send email
      emailjs
        .send(
          import.meta.env.VITE_APP_SERVICE_ID,
          import.meta.env.VITE_APP_TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: "Manikant Mahesh Bankoller",
            from_email: form.email.trim().toLowerCase(),
            to_email: import.meta.env.VITE_APP_EMAILJS_RECIEVER,
            message: form.message,
          },
          import.meta.env.VITE_APP_EMAILJS_KEY,
        )
        .then(() => {
          toast.success("Message sent successfully!");
          console.log("Email sent successfully");
          // Clear form
          setForm({
            name: "",
            email: "",
            message: "",
          });
        })
        .catch((error) => {
          // Error handle
          console.log("[CONTACT_ERROR]: ", error);
          
          // Show specific error message
          if (error.text === "Too many requests.") {
            toast.error("Too many requests. Please try again later.");
          } else if (error.text === "First name is required.") {
            toast.error("Please enter your name.");
          } else if (error.text === "Email address is required.") {
            toast.error("Please enter a valid email address.");
          } else if (error.text === "Message is required.") {
            toast.error("Please enter a message.");
          } else {
            toast.error("Failed to send message. Please try again.");
          }
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      toast.error("Please fill all fields before sending.");
    }
  };

  return (
    <SectionWrapper idName="contact">
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          {/* Title */}
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            {/* Name */}
            <label htmlFor="name" className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name*</span>
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                title="What's your name?"
                disabled={loading}
                aria-disabled={loading}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium disabled:bg-tertiary/20 disabled:text-white/60"
              />

              {/* Invalid Name */}
              <span className="text-red-400 mt-2 hidden" id="name-error">
                Invalid Name!
              </span>
            </label>

            {/* Email */}
            <label htmlFor="email" className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email*</span>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                placeholder="johndoe@email.com"
                title="What's your email?"
                disabled={loading}
                aria-disabled={loading}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium disabled:bg-tertiary/20 disabled:text-white/60"
              />

              {/* Invalid Email */}
              <span className="text-red-400 mt-2 hidden" id="email-error">
                Invalid E-mail!
              </span>
            </label>

            {/* Message */}
            <label htmlFor="message" className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message*</span>
              <textarea
                rows={7}
                name="message"
                id="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Hello there!"
                title="What do you want to say?"
                disabled={loading}
                aria-disabled={loading}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium disabled:bg-tertiary/20 disabled:text-white/60 disabled:resize-none"
              />

              {/* Invalid Message */}
              <span className="text-red-400 mt-2 hidden" id="message-error">
                Invalid Message!
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              title={loading ? "Sending..." : "Send"}
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl disabled:bg-tertiary/20 disabled:text-white/60"
              disabled={loading}
              aria-disabled={loading}
            >
              {/* check loader state */}
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        {/* Earth Model */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
