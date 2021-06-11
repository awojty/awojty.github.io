import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';
import './Title.css';

import {MyComponent} from "./Animation.js";
import ReactDOM from "react-dom";

import { Frame } from "framer";
import { motion } from "framer-motion"

import { useEffect, useState } from "react";
import { useIsPresent } from "framer-motion";

import { Projects } from "./Projects";
import Svg from "./component/Svg"

import { Parallax } from "@react-spring/parallax"
import {Divider} from "./component/Divider"
import UpDown, {UpDownWide} from "./component/Animation"

import { useRef } from 'react';
// import { animated, useSpring } from 'react-spring';
import {useSpring, animated} from 'react-spring'


const calc = o => `translateY(${o * 0.2}px)`;

const calc_right = o => `translateX(${o * 0.2}vw)`;

const calc_neg = o => `translateY(${o * -0.2}px)`;


export const Title = props => {
  const ref = props.refProp;
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }));

  const handleScroll = () => {
    const posY = ref.current.getBoundingClientRect().top;
    const offset = window.pageYOffset - posY;
    set({ offset });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div ref={props.refProp}>
      <div className="textContainer">
      <div className="titleContainer" 
        >Adrianna Wojtyna</div>
      <div className="descriptionContainer" 
        >I'm a third-year undergradutate studying Electrical Engineering & Computer Science and Bussiness Analytics at MIT.</div>
     </div> 


        <div
          // className="row"
          style={{
          background: "#12313122",
          //   position: "relative",
           
          height: "100vh",
          }}
          
          >

          <animated.div
            style={{
              // background: "#654321",
              position: "absolute",
              width: "10vw",
              height: "100px",
              top: "46%",
              left: "70%",
              transform: offset.interpolate(calc)
            }}>
          <Svg icon="box" width={0.5} color="icon_darker" left="30%" top="15%" />
          </animated.div>

          <animated.div
            style={{
              // background: "#654321",
              position: "absolute",
              width: "10vw",
              height: "100px",
              top: "26%",
              left: "80%",
              transform: offset.interpolate(calc)
            }}>
          <Svg icon="box" width={0.5} color="icon_darker" left="30%" top="15%" />
          </animated.div>



          <animated.div
            style={{
              // background: "#654321",
              position: "absolute",
              width: "10vw",
              height: "100px",
              top: "1%",
              left: "10%",
              transform: offset.interpolate(calc)
            }}>
          <Svg icon="box" width={0.5} color="icon_darker" left="30%" top="15%" />
          </animated.div>

          <animated.div
            style={{
              // background: "#654321",
              position: "absolute",
              width: "5vw",
              height: "100px",
              top: "10%",
              left: "70%",
              transform: offset.interpolate(calc_neg)
            }}>
              
          <Svg icon="box" width={0.2} color="icon_darker" left="70%" top="30%" />
{/*           
            <Svg icon="triangle" width={0.5} stroke color="icon_brightest" left="90%" top="50%" />
           
            <Svg icon="triangle" width={0.5} stroke color="icon_darkest" left="30%" top="65%" /> */}

          </animated.div>

          <animated.div
            style={{
              // background: "#654321",
              position: "absolute",
              width: "7vw",
              height: "200px",
              top: "15%",
              left: "50%",
              transform: offset.interpolate(calc)
            }}>
          <Svg icon="arrowUp" hiddenMobile width={0.5} color="icon_blue" left="80%" top="10%" />          
        </animated.div>

        <animated.div
            style={{
              // background: "#654321",
              position: "absolute",
              width: "7vw",
              height: "200px",
              top: "30%",
              left: "20%",
              transform: offset.interpolate(calc)
            }}>
          <Svg icon="triangle" width={0.5} stroke color="icon_darkest" left="30%" top="65%" />        
        </animated.div>

        <animated.div
            style={{
              // background: "#654321",
              position: "absolute",
              width: "15vw",
              height: "150px",
              top: "28%",
              left: "15%",
              transform: offset.interpolate(calc_neg)
            }}>
          <Svg icon="circle" width={5} color="icon_darker" left="70%" top="90%" />         
        </animated.div>


        <animated.div
            style={{
              // background: "#654321",
              position: "absolute",
              width: "25vw",
              height: "150px",
              top: "90%",
              left: "70%",
              transform: offset.interpolate(calc_neg)
            }}>
        <Svg icon="box" width={12} color="icon_darkest" left="40%" top="30%" />
        
        </animated.div>

        <animated.div
            style={{
              // background: "#654321",
              position: "absolute",
              width: "25vw",
              
              top: "20%",
              left: "10%",
              transform: offset.interpolate(calc_neg)
            }}>
      <Svg icon="hexa" width={16} stroke color="icon_darker" left="10%" top="50%" />        
 </animated.div>
      <animated.div
            style={{
              // background: "#654321",
              position: "absolute",
              width: "10vw",
              
              top: "50%",
              left: "35%",
              transform: offset.interpolate(calc_neg)
            }}>
      <Svg icon="arrowUp" width={16} stroke color="icon_darker" left="10%" top="50%" />        
          </animated.div>

      <animated.div
            style={{
              // background: "#654321",
              position: "absolute",
              width: "10vw",
              
              top: "80%",
              left: "25%",
              transform: offset.interpolate(calc_neg)
            }}>
      <Svg icon="triangle" width={16} stroke color="icon_darker" left="10%" top="50%" />        
          </animated.div>

      <animated.div
            style={{
              // background: "#654321",
              position: "absolute",
              width: "5vw",
              
              top: "90%",
              left: "15%",
              transform: offset.interpolate(calc_neg)
            }}>
      <Svg icon="circle" width={16} stroke color="icon_darker" left="10%" top="50%" />        
          </animated.div>

 <animated.div
            style={{
              // background: "#654321",
              position: "absolute",
              width: "10vw",
              height: "100px",
              top: "3%",
              left: "60%",
              transform: offset.interpolate(calc)
            }}>
          <Svg icon="triangle" width={0.5} stroke color="icon_darkest" left="30%" top="65%" />
          </animated.div>

          <animated.div
            style={{
              // background: "#654321",
              position: "absolute",
              width: "4vw",
              top: "43%",
              left: "50%",
              transform: offset.interpolate(calc)
            }}>
          <Svg icon="circle" width={0.5} stroke color="icon_darkest" left="30%" top="65%" />
          </animated.div>

          <animated.div
            style={{
              // background: "#654321",
              position: "absolute",
              width: "4vw",
              top: "63%",
              left: "80%",
              transform: offset.interpolate(calc)
            }}>
          <Svg icon="circle" width={0.5} stroke color="icon_darkest" left="30%" top="65%" />
          </animated.div>


        </div>


         

    </div>
  );
};
