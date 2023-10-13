import "../css/Card.css"
import { design_list } from "../scripts/designData";
import { card_data } from "../scripts/cardData";
import { motion } from "framer-motion";
import { def_tra } from "../scripts/otherData";

export default function Card({index}){
 

    return (
        //before you make anything pls try make it always be onscreen regardless of scroll (desktop mode not mobile)
        <motion.div layout
        transition={def_tra} className="card">
        {design_list[index].svg1}
        <img width="auto" height="550px" className="player" style={{position:"absolute",top:"50%",left:"50%", transform:"translate(-50%,-50%)"}} src={card_data.player_render}/>
        {design_list[index].svg2}
        <img className ="logo" width="auto" height="100px" style={{position:"absolute",top:"85%",left:"50%", transform:"translate(-50%,-50%)"}} src={card_data.logo_render}/>
        </motion.div>
    );
}