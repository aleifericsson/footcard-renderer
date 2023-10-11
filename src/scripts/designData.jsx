import designA from "../assets/designA-preview.png"
import DesignA1 from "../assets/designA1.svg?react";
import DesignA2 from "../assets/designA2.svg?react";
import { svg1_style, svg2_style } from "./otherData";

const design_list = [{
    source: designA,
    desc:"Programmer Art Design A",
    svg1: (<DesignA1 style={svg1_style}/>),
    svg2: (<DesignA2 style={svg2_style}/>)
},]

export { design_list};