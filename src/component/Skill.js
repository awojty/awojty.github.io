import React, { useState, useEffect } from "react";
import "./Skill.css";
import "aos/dist/aos.css";
import Aos from "aos";
import translate from "../icons/translate.png"
import data from "../icons/data.png"
import web from "../icons/global.png"
import computer from "../icons/desktop.png"
import { addPropertyControls } from "framer";

export const Skill = props => {

    useEffect(() => {
        Aos.init({duration:2000, delay:40});
    
      }, []);


    var icon = data;

    if(props.icon==="data"){
        icon = data;
    }else if(props.icon==="language"){
        icon = translate;
    }else if(props.icon==="computer"){
        icon = computer;
    }else if(props.icon==="web"){
        icon = web;
    }

    console.log(props.skills);

    
  
    return(<div className="skillContainer">
        <div className="rightContainer">
            <div className="skillTitle">{props.skillName}</div>
                <ul>
                    {props.skills.map((item) => {
                return(<li key={item}>{item}</li>)
                       })                            
            }          
                    
                    

                    {/* <li clasName="skillsItem">{props.skill1}</li>
                    <li clasName="skillsItem">{props.skill2}</li>
                    <li clasName="skillsItem">{props.skill4}</li> */}
                </ul>
            
            </div>
        <div clasName="leftContainer">
            <img data-aos="flip-left" className ="imageSkill" src={icon}></img>
        </div>

        </div>)

}