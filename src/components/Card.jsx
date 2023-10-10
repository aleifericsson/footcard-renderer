import "../css/Card.css"
//import DesignA from "../designs/Design_A";
import DesignA1 from "../assets/designA1.svg?react";
import DesignA2 from "../assets/designA2.svg?react";
import { card_data } from "../scripts/cardData";

export default function Card(){
    return (
        //before you make anything pls try make it always be onscreen regardless of scroll (desktop mode not mobile)
        <div className="card">
        <DesignA1 width={444} height={640}/>
        <img width="auto" height="550px" className="player" style={{position:"absolute",top:"50%",left:"50%", transform:"translate(-50%,-50%)"}} src={card_data.player_render}/>
        <DesignA2 width={444} height={640} style={{position:"absolute",top:"0",left:"0"}}/>
        <img className ="logo" width="auto" height="100px" style={{position:"absolute",top:"85%",left:"50%", transform:"translate(-50%,-50%)"}} src={card_data.logo_render}/>
        </div>
    );
}