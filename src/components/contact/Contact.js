import { useRef, useState,useContext} from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import UserContext from "../../context/UserContext";



const Contact = () => {

  const {darkMode} = useContext(UserContext)
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_17eo90u",
        "template_iacueu8",
        formRef.current,
        "wVF-A_bGAkjQKn5l-"
      )
      .then(
        (result) => {
          setSuccess(true)
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <div
      ref={ref}
      className={darkMode ? "contact dark-mode" : "contact"}
    >
    <div className="yo">
      <div className="textContainer" >
        <h1 >Let’s work together</h1>
        <div className="item">
          <h2>Mail</h2>
          <span>prakharagrawal2001@gmail.com</span>
        </div>
        <div className="item">
          <h2>Address</h2>
          <span>1675 Wright Town Gate No.2 Jabalpur</span>
        </div>
        <div className="item" >
          <h2>Phone</h2>
          <span>+917803047071</span>
        </div>
      </div>
      <div className="formContainer">
        
        <form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <input type="text" required placeholder="Name" name="name"/>
          <input type="email" required placeholder="Email" name="email"/>
          <textarea rows={8} placeholder="Message" name="message"/>
          <button>Submit</button>
          {error && "Email not sent"}
          {success && "Email sent"}
        </form>
      </div>
      </div>
    </div>
  );
};

export default Contact;
