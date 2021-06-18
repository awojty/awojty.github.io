import React, {useEffect, useRef} from "react";
import { useSpring, animated } from "react-spring";
import "aos/dist/aos.css"
import Aos from "aos";
import "./Project.css";
import read from "../icons/whatweread.png"
import meow from "../icons/growthmeow.png"
import bingo from "../icons/bingo.png"
import golight from "../icons/go_light.png"


const Project = props => {
  useEffect(() => {
    Aos.init({duration:2000, delay:40});

  }, []);

  var demo = read;

  if(props.title == "Growth-Meow"){
    demo = meow;
  }else if(props.title == "WhatWeRead"){
    demo = read;

  }else if(props.title =="GoLight") {
    demo = golight;

  }else{
    demo=bingo;
  }


  return(

      <div data-aos="slide-right" className="box">
        <div className="projectName">{props.title}</div>
        <div className="contentSection">
          <div className="infoSection">
            <div className="toolsSection">

              {props.tools.map((item) => {
                return(<div key={item} className="tool">{item}</div>)
                       })}     

            </div>
            <div className="descriptionSection">{props.description}</div>
            <div className="buttonSection">
              <a className="buttonProject" href={props.demo}>DEMO</a>
              <a className="buttonProject" href={props.code}>CODE</a>
            </div>
          </div>
          <div className="demoSection">
              <img className="demoImg" src={demo}></img>
          </div>
        </div>
        
        </div>

  )
}




export default Project;