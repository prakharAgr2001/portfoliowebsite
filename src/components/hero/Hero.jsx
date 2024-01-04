import React ,{useState,useContext} from "react";
import { motion } from "framer-motion";
import "./hero.scss";
import UserContext from "../../context/UserContext";

function Hero() {
  

  const {darkMode} = useContext(UserContext);
    const textVariants = {
        initial: {
          x: -500,
          opacity: 0,
        },
        animate: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 1,
            staggerChildren: 0.1,
          },
        },
        scrollButton: {
          opacity: 0,
          y: 10,
          transition: {
            duration: 2,
            repeat: Infinity,
          },
        },
      };
      const sliderVariants = {
        initial: {
          x: 0,
        },
        animate: {
          x: "-220%",
          transition: {
            repeat: Infinity,
            repeatType:"mirror",
            duration: 20,
          },
        },
      };
      const item ="Contact";
    
  return (
    
    <div className={darkMode ? "hero dark-mode" : "hero"}>
      <div className="wrapper">
        <motion.div className="textContainer" 
          variants={textVariants}
          initial="initial"
          animate="animate" >
           
            <motion.h2 variants={textVariants}>Prakhar Agrawal</motion.h2>
            <motion.h1 variants={textVariants}>Software Developer</motion.h1>
            <motion.div variants={textVariants} className="buttons">
            <a href="https://drive.google.com/file/d/1FmPu4q0jL6GG9Ncnc44cAuYr16QURzN4/view?usp=sharing">
              <motion.button variants={textVariants} className="resume">Resume</motion.button></a>
              <a href={`#${item}`}
          key={item}>
              <motion.button variants={textVariants} >Contact Me</motion.button></a>
              
          
            </motion.div>
          
        </motion.div>
        <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Frontend Developer Software Development
      </motion.div>
      </div>

      <div className="imageContainer">
        <img src="/hero.jpeg" alt="" />
      </div>
      
    </div>
    
  );
}

export default Hero;
