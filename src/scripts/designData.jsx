import designA from "../assets/designA-preview.png";
import designAGLE from "../assets/designAGLE-preview.png";
import DesignAGLE1 from "../assets/designAGLE1.svg?react";
import DesignAGLE2 from "../assets/designAGLE2.svg?react";
import DesignA1 from "../assets/designA1.svg?react";
import DesignA2 from "../assets/designA2.svg?react";
import { svg1_style, svg2_style } from "./otherData";

const design_list = [{
    source: designA,
    desc:"Programmer Art Design A",
    svg1: (<DesignA1 style={svg1_style}/>),
    svg2: (<DesignA2 style={svg2_style}/>),
    colors:2,
},{
    source: designAGLE,
    desc:"Programmer Art Design A Gold Limited Edition",
    svg1: (<DesignAGLE1 style={svg1_style}/>),
    svg2: (<DesignAGLE2 style={svg2_style}/>),
    colors:0,
},]

export { design_list};