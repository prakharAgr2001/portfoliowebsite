import './app.scss'
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Hero from './components/hero/Hero';
import Navbar from "./components/navbar/Navbar"
import Portfolio from './components/portfolio/Portfolio';
import UserContextProvider from './context/UserContextProvider';



function App() {
  return (
    <div className="App">

      <UserContextProvider>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="About">
        <About/>
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact/>
      </section>
      </UserContextProvider>
      
    </div>
  );
}

export default App;
