import React ,{useState}from 'react'
import Links from './links/Links'
import Togglebutton from './togglebutton/Togglebutton'
import "./sidebar.scss";
import { motion } from "framer-motion";

function Sidebar() {
    const variants = {
        open: {
          clipPath: "circle(1200px at 50px 50px)",
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 20,
          },
        },
        closed: {
          clipPath: "circle(25px at 50px 50px)",
          opacity: 1,
          transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
          },
        },
      };
   
        const [open, setOpen] = useState(false);
  return (
    // <div className='sidebar'>
    // <div className={open ? 'bg' : ''}>
    //   {open && <Links />}
    //   </div>
    //   <Togglebutton setOpen={setOpen}/>
    // </div>
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <Togglebutton setOpen={setOpen} />
    </motion.div>
  )
}

export default Sidebar
