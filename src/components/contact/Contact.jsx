import React, { useRef } from 'react';
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelegram } from 'react-icons/bs'
import { AiOutlineWhatsApp } from 'react-icons/ai'
// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef()
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_38d7j7q', 'template_v6uzjdn', form.current, 'sWQQgQGZsI2P5Ot3F')

      e.target.reset()
    };
  
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>gula2798@mail.ru</h5>
            <a href="mailto:gula2798@mail.ru">Send a message</a>
          </article>
          <article className="contact__option">
            <BsTelegram className="contact__option-icon"/>
            <h4>Messanger</h4>
            <h5>Telegram</h5>
            <a href="https://t.me/BanuIbadova">Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <a href="https://api.whatsapp.com/send?phone=79309504647">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Your Full Name" target='blank' required />
          <input type="email" name='email' placeholder="Your Email" required />
          <textarea name="message" rows='7' placeholder="Your Message" required />
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
