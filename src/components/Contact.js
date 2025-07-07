import React, { useRef, useState } from 'react';
import './Contact.css';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_xxxxxx', // ← Replace with your EmailJS service ID
        'template_xxxxxx', // ← Replace with your EmailJS template ID
        form.current,
        'user_xxxxxxxxxxxxx' // ← Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus('Message sent successfully ✅');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus('Something went wrong ❌');
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Contact Me</h2>
        <p>Let’s build something amazing together!</p>
      </motion.div>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required rows="6"></textarea>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="send-button"
          type="submit"
        >
          Send Message 🚀
        </motion.button>
        {status && <p className="form-status">{status}</p>}
      </motion.form>
    </section>
  );
};

export default Contact;
