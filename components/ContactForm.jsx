import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const formRef = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_8hxf061",
        "template_chxap9c",
        formRef.current,
        "CjIg6hpwylDIC1ppb"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Message sent successfully");
          reset();
        },
        function (err) {
          // console.log("FAILED...", err);
          toast.error(`Error ${err.status}!
           Please contact me through other channels. `)
        }
      )
      
  };
  return (
    <section className="contact_form">
      <form onSubmit={handleSubmit(sendEmail)} id="form" ref={formRef}>
        <div className="form_align">
          <label htmlFor="name">Name</label>
          <input
            {...register("name", { required: true })}
            type="text"
            id="name"
            name="name"
            placeholder="Firstname Lastname"
            className="form_input"
          />
          {errors.name && <p className="error_text">Name is required</p>}
        </div>
        <div className="form_align">
          <label htmlFor="email">Email Address</label>
          <input
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            type="email"
            id="email"
            name="email"
            placeholder="example@email.com"
            className="form_input"
            // required
          />
          {errors.email && (
            <p className="error_text">Enter a valid email address</p>
          )}
        </div>
        <div className="form_align form_message">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Enter your message"
            className="form_input"
            cols="20"
            rows="3"
            required
          />
        </div>

        <div className="form_button">
          <button type="submit" className="button button-primary">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
export default ContactForm;
