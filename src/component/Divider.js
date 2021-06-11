import { jsx } from "theme-ui"
import { ParallaxLayer } from "@react-spring/parallax"
import {useState} from "react";


export const Divider = props =>
{
    const [dividerProps, setDivider] = useState(props)

    return(
        <ParallaxLayer
        sx={{
          position: `absolute`,
          width: `full`,
          height: `full`,
          background: dividerProps.bg,
          backgroundColor: dividerProps.bg,
          "#contact-wave": {
            color: dividerProps.fill,
            fill: `currentColor`,
          },
          clipPath: dividerProps.clipPath,
        }}
        speed={dividerProps.speed}
        offset={dividerProps.offset}
        factor={dividerProps.factor}
        className={dividerProps.className}
      >
        {dividerProps.children}
      </ParallaxLayer>


    )



}



export default Divider