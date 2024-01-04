
import React ,{useState,useContext} from 'react';
import './about.scss';
import UserContext from "../../context/UserContext";


const About = () => {
    
  const {darkMode} = useContext(UserContext);
  return (
    <div className={darkMode ? "about dark-mode" : "about"}>
      <h1>About</h1>
    <div className="about-me">
    
      <img src="hero.jpeg" alt="Profile" className="profile-photo" />
      <div className="content">
      <div className='heading'>
       <p className='hello'> Hello My name is</p>
        <h2>Prakhar Agrawal</h2></div>
        <p>
         I'm all about React and coding. Let's bring cool ideas to life in the digital realm with clean, awesome code. Ready to make some web wonders happen? 👨‍💻
        When the code hustle takes a break, you'll find me chilling with tea and diving into anime adventures. 🍵 Up for a chat about code, anime, or both? Drop me a line, and let's whip up some web magic together.

        </p>
        <div className={darkMode ? "skills dark-mode" : "skills"}>
        <h3>Skills</h3>
          <p>MonGoDb</p>
          <p>Express</p>
          <p>React</p>
          <p>Node</p>
          <p>Redux</p>
         <p>JavaScript</p>
         <p>python</p>
</div>
      </div>
      </div>
      
    
    </div>
  );
};

export default About;
