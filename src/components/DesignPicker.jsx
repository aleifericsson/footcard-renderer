import { useState } from "react"
import { Text } from "./StyledComps";
import { design_list } from "../scripts/designData";

export default function DesignPicker(){
    const [cur_design, changeDesign] = useState(0);

    return(<div>
        <div className="design-picker">
        <button type="button" onClick={()=>{
            if(cur_design>0){
                changeDesign(cur_design-1)
            }
            else{
                changeDesign(design_list.length-1)
            }}
        }><Arrow left={true}/></button>
        <CardDesign index={cur_design}></CardDesign>
        <button type="button" onClick={()=>{
            if(cur_design<design_list.length-1){
                changeDesign(cur_design+1)
            }
            else{
                changeDesign(0)
            }}
        }><Arrow left={false}/></button>
    </div>
    <div style={{textAlign:"center", margin:"5px"}}><Text>{design_list[cur_design].desc}</Text></div>
    </div>
    )
}

function CardDesign({index}){
    return(<div>
        <img id="card-design" width={111} height={160} src={design_list[index].source} data-design={design_list[index].desc} data-index={index}></img>
        
        </div>)
}


function Arrow({left}){
    return left ? (
        <svg 
        xmlns="http://www.w3.org/2000/svg" style={{transform:"rotate(90deg)"}} width="36" height="36" viewBox="0 0 36 36" >
        <path fill="white" d="M10.5 15l7.5 7.5 7.5-7.5z"/>
        </svg>
    ):(
        <svg 
        xmlns="http://www.w3.org/2000/svg" style={{transform:"rotate(270deg)"}} width="36" height="36" viewBox="0 0 36 36">
        <path fill="white" d="M10.5 15l7.5 7.5 7.5-7.5z"/>
        </svg>
    );
}
