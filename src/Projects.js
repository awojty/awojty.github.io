
import React, { useState, useCallback } from "react";
import './Projects.css';
import Project from "./component/Project.js";
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'




const Projects = props => {

  return(
        <div className="projectsSection" ref={props.refProp}>
          <div className="projectsSectionTitle">Projects</div>
            <Project 
              title="WhatWeRead" 
              demo="https://whatweread.herokuapp.com/"
              code="https://github.com/awojty/WhatWeRead"
              tools={["ReactJS", "Express.js", "HTML"]}
              description="- Immerse yourself in your virtual library and talk with fellow booklovers about your favorite reads!
              Track you reads, create bookshelves in your virtual library and feel like in a library - but without leaving your house. Join bookclubs and discuss literary topics with your friends - all from your home."
              />
            <Project 
                demo="https://growth-meow.herokuapp.com/"
                code="#"
                title="Growth-Meow"  
                tools={["ReactJS", "Git", "CSS"]}
                description="The web app allows to create your personal goals and keep track of your progress. While completing challenges, take care of your virtual cat - if you are behind your plan, your cat will be sad :( Who wants to see a sad cat?"
                />
            <Project 
              title="Bingo" 
              demo="https://github.com/awojty/bingo"
              code="#" 
              tools={["C#", "Unity"]}
              description="Bingo game designed to play during Zoom calls. Built with C# in Unity."
              />



          

        </div>
        );
  }




  export{
    Projects
  }
