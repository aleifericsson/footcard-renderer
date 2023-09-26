import { useState } from "react"

export default function DesignPicker(){
    const [cur_design, changeDesign] = useState(0);

    return(<div className="design-picker">
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
    )
}

function CardDesign({index}){
    return(<img src={design_list[index]}></img>)
}

const design_list = [
    "https://www.corinthianseller.co.uk/match-attax/ma21/ma21-uc01-zlatan-ibrahimovic.png",
    "https://www.corinthianseller.co.uk/match-attax/ma21/ma21-le01b-roberto-firmino.png",
    "https://www.corinthianseller.co.uk/match-attax/ma21/ma21-cl01-alisson-becker.png",
    "https://www.corinthianseller.co.uk/match-attax/ma21/ma21-rs01-ansu-fati.png",
]

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
