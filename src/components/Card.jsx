import "../css/Card.css"
import DesignA from "../designs/Design_A";

export default function Card(){
    return (
        //before you make anything pls try make it always be onscreen regardless of scroll (desktop mode not mobile)
        <div className="card">
        <DesignA />
        </div>
    );
}