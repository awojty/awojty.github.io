import React, { Component, useState, useRef, useEffect } from "react";
import "./MenuSide.css";
import { useDimensions } from "./use-dimensions";


const scrollTo = ele => {
    ele.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
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

  

export const MenuSide = props => {

    const [visibleSection, setVisibleSection] = useState();
  const [visibleMenu, setMenu] =useState(false);

  const toggleMenu = () => {
    setMenu(!visibleMenu);
  }

  
  //const [rotate, setRotate] = useState(0);

  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);



  const sectionRefs = [
    { section: "About", ref: aboutRef },
    { section: "Projects", ref: projectsRef },
    { section: "Skills", ref: skillsRef },
    { section: "Contact", ref: contactRef },

  ];



  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);




   var menuvisibility = "hide";
 
    if (props.visibility) {
      menuvisibility = "show";
    }
 
    return (
    <div id="flyoutMenu"
        
        className={menuvisibility}>
     <h2><a href="#" onClick={props.closeMenu}>X</a></h2>
     <h2><a href="#">Home</a></h2>
     <h2><a href="#">About</a></h2>
     <h2><a href="#">Contact</a></h2>
     <h2><a href="#">Search</a></h2>

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



   </div>
    );
  
}
