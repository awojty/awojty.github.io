import React, { useState } from "react";
import './Projects.css';
import Project from "./component/Project.js";
import {Skill} from "./component/Skill";
import "./Skills.css"

export const Skills= props => {

  const [click, setClick] = useState(false);
  const [mobileClose, setMobileClose] = useState(true);

  return(
    <div ref = {props.refProp}>
     <div className="skillsSectionTitle">Skills</div>
        <div className="skillsSection">
            <Skill skills={["Python","Java","C#"]}skillName="Code" icon="computer"/>
            <Skill skills={["Julia","JuMP", "SQL"]} skillName="Data analysis" icon="data"/>
            <Skill skills={["Android Studio","ReactJS", "Django"]} skillName="App development" icon="web"/>
            <Skill skills={["English","German", "Spanish", "French"]} skillName="Languages" icon="language"/>
        </div>
        <div className="bottomSection"></div>
        </div>
        );
  }

