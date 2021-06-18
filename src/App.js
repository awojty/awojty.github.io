import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';

import {MyComponent} from "./Animation.js";
import ReactDOM from "react-dom";

import { Frame } from "framer";
import { motion } from "framer-motion"

import { useEffect, useState } from "react";
import { useIsPresent } from "framer-motion";
import {Title} from "./Title";
import { Projects } from "./Projects";
import Svg from "./component/Svg"

import { Parallax } from "@react-spring/parallax"
import {Divider} from "./component/Divider"
import UpDown, {UpDownWide} from "./component/Animation"

import { useRef } from 'react';
// import { animated, useSpring } from 'react-spring';
import {useSpring, animated} from 'react-spring'
import { Skills } from "./Skills";

import { useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import {MenuSide} from "./MenuSide";
import "./MenuSide.css";
import { Contact } from "./Contact";

const svgVariants = {
  hidden: { rotate: -180 },
  visible: { 
    rotate: 0,
    transition: { duration : 1 }
  },
}

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { 
      duration: 2,
      ease: "easeInOut",
    }
  }
};




const getDimensions = ele => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = ele => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};



const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export const MyMenu = props => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = props.refProp;
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
}




function App() {
  const [visibleSection, setVisibleSection] = useState();
  const visibleMenu = useRef(false);
  const menuvisibility = useRef("hide");


  
  const toggleMenu = () => {
    //visibleMenu = !visibleMenu;
    if(menuvisibility.current === "hide"){
      menuvisibility.current = "show"

    }else{
      menuvisibility.current = "hide"
    }
    visibleMenu.current = !visibleMenu.current;
    console.log("vismenu", visibleMenu.current);
    console.log("menuvisibility", menuvisibility.current)
    // console.log("current section", currentSection);
  }

  
  //const [rotate, setRotate] = useState(0);

  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const [currentSection, setCurrentSection] =useState(headerRef);




  const sectionRefs = [
    { section: "About", ref: aboutRef },
    { section: "Projects", ref: projectsRef },
    { section: "Skills", ref: skillsRef },
    { section: "Contact", ref: contactRef },

  ];

  // var menuvisibility = "hide";

  // console.log("vis menu current", visibleMenu.current)
 
  // if (visibleMenu.current) {
  //   menuvisibility = "show";
  // }




  // useEffect(() => {
  //   console.log("useeffect")
  //   const handleScroll = () => {
  //     const { height: headerHeight } = getDimensions(headerRef.current);
  //     const scrollPosition = window.scrollY + headerHeight;

  //     const selected = sectionRefs.find(({ section, ref }) => {
  //       const ele = ref.current;
  //       if (ele) {
  //         const { offsetBottom, offsetTop } = getDimensions(ele);
  //         return scrollPosition > offsetTop && scrollPosition < offsetBottom;
  //       }
  //     });

  //     if (selected && selected.section !== visibleSection) {
  //       setVisibleSection(selected.section);
  //     } else if (!selected && visibleSection) {
  //       setVisibleSection(undefined);
  //     }
  //   };

  //   handleScroll();
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [visibleSection]);

    return(
      <div className="App">
         
        <div className="background" onClick={toggleMenu} >
           
           <svg viewBox="0 0 100 80" width="40" height="40">
     <rect width="100" height="20"></rect>
     <rect y="30" width="100" height="20"></rect>
     <rect y="60" width="100" height="20"></rect>
   </svg>
   </div> 
          {/* <div id="flyoutMenu"
            ref={headerRef}
            className={menuvisibility}>
           <h2><a href="#" onClick={toggleMenu}>X</a></h2>
           <button
                    type="button"
                    className={`header_link ${visibleSection === "About" ? "selected" : ""}`}
                    onClick={() => {
                      // setCurrentSection(aboutRef);
                      scrollTo(aboutRef.current);
                    }}
                  >
                    About
                  </button>
                  <button
                    type="button"
                    className={`header_link ${visibleSection === "Projects" ? "selected" : ""}`}
                    onClick={() => {
                      //setCurrentSection(projectsRef);
                      scrollTo(projectsRef.current);
                    }}
                  >
                    Projects
                  </button>
      
      
      
         </div>    */}
          
                     
          


      {/* <div className="top-spacer" />

      <div className="content">
        <div className="sticky">

          
          <div className="header" ref={headerRef}>


            <button
              type="button"
              className={`header_link ${visibleSection === "About" ? "selected" : ""}`}
              onClick={() => {
                scrollTo(aboutRef.current);
              }}
            >
              About
            </button>
            <button
              type="button"
              className={`header_link ${visibleSection === "Projects" ? "selected" : ""}`}
              onClick={() => {
                scrollTo(projectsRef.current);
              }}
            >
              Projects
            </button>
            <button
              type="button"
              className={`header_link ${visibleSection === "Skills" ? "selected" : ""}`}
              onClick={() => {
                scrollTo(skillsRef.current);
              }}
            >
              Skills
            </button>
            <button
              type="button"
              className={`header_link ${visibleSection === "Contact" ? "selected" : ""}`}
              onClick={() => {
                scrollTo(contactRef.current);
              }}
            >
              Contact
            </button>
          </div>
        </div>
        <div className="mobile-m background" onClick={toggleMenu}>
           
                  <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
          </div> 
       
      </div>  */}
      <Title refProp={aboutRef} />
        <Projects refProp = {projectsRef}/>
        <Skills refProp = {skillsRef}/>
        <Contact/>
       



    </div>

  
    
  

  );

}

export default App;
