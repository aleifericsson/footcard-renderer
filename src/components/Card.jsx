import "../css/Card.css"
import { design_list } from "../scripts/designData";
import { card_data } from "../scripts/cardData";

export default function Card(){
    return (
        //before you make anything pls try make it always be onscreen regardless of scroll (desktop mode not mobile)
        <div className="card">
        {design_list[0].svg1}
        <img width="auto" height="550px" className="player" style={{position:"absolute",top:"50%",left:"50%", transform:"translate(-50%,-50%)"}} src={card_data.player_render}/>
        {design_list[0].svg2}
        <img className ="logo" width="auto" height="100px" style={{position:"absolute",top:"85%",left:"50%", transform:"translate(-50%,-50%)"}} src={card_data.logo_render}/>
        </div>
    );
}