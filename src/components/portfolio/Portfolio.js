import { useRef,useContext } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import UserContext from "../../context/UserContext";



const items = [
  {
    id: 1,
    title: "Movix",
    img: "/movix.gif",
    demoLink:"https://movie-website-chi.vercel.app/",
    desc: "Movix is a dynamic and responsive movie application built using React JS, Redux, React Router DOM, and Scss. It integrates with the TMDB (The Movie Database) API to provide users with access to a vast collection of movies, TV shows, and more. The application incorporates features like infinite scrolling and a loading skeleton to enhance the user experience.",
  },
  {
    id: 2,
    title: "WhatsappChat Analyzer",
    img: "/WhatsappChatAnalyzer_gif.gif",
    demoLink:"https://github.com/prakharAgr2001/WhatsappChatAnalyzer",
    desc: "This is a WhatsApp chat analyzer tool that allows you to analyze the overall group chat as well as individual participants within the group. The analyzer is built using Python, numpy, pandas, and streamlit. It provides insights on a daily and monthly basis, highlights the most frequently used emojis, and displays a word cloud.",
  },
  {
    id: 3,
    title: "BmiCalculator",
    img: "/bmigif.gif",
    demoLink:"https://bmi-calculator-tau-bice.vercel.app/",
    desc: "BMI Calculator React App! This application harnesses the power of the State Hook to deliver a seamless and engaging user experience. Crafted with simplicity and functionality in mind, the BMI calculator not only calculates your BMI but also provides dynamic tips and colorful feedback based on your results",
  },
  {
    id: 4,
    title: "FlashTask",
    img: "/ToDoList.gif",
    demoLink:"https://todolistwith-flash.vercel.app/",
    desc: "To-Do-List React App brings together the power of the useEffect hook to elevate your task-tracking experience. This project is not just about ticking off items—it's about the seamless dance of visual feedback, local storage sync, and real-time task count updates.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const {darkMode} = useContext(UserContext);
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section id="Projects" >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div  className={darkMode ? "textContainer dark-mode" : "textContainer"} style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.demoLink} target="_blank" rel="noopener noreferrer">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  const {darkMode} = useContext(UserContext);
  return (
    
    <div className={darkMode ? "portfolio dark-mode" : "portfolio"} ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;