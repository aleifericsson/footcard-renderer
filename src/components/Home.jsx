import "../css/Home.css" 
import { PageName } from "./StyledComps";
import { useState } from "react";


export default function Home(){
    const [dropdowns, toggledropdowns] = useState([
        {
            name:"Set Stats",
            open:false
        },
        {
            name:"Change Stats",
            open:false
        },
        {
            name:"Set Logo",
            open:false
        },
        {
            name:"Set Player Image",
            open:false
        }
]);


    toggledropdowns("bruh")

/*
    const tdd = (num) =>{
        let tempList = [...dropdowns];
        tempList[num].open = !tempList[num].open;
        toggledropdowns(tempList);
    }
    */

    // onclick={tdd(dropdowns.indexOf(dropdown))}

    return (
        <div className="home">
            
            <div className="left-side">
                {dropdowns.map(dropdown => {return(<Dropmenu key={dropdown.name} text={dropdown.name} open={dropdown.open} />)})}
            </div>
            <div className="right-side">

            </div>
        </div>
    );
}

function Dropmenu({text,open,key,onclick}){
    return(
        <div className="dropmenu" key={key} onClick={onclick}>
            <PageName>{text}</PageName>
            <Arrow open={open}></Arrow>
        </div>
    )
}

function Arrow({open}){
    return open ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
        <path fill="white" d="M10.5 15l7.5 7.5 7.5-7.5z"/>
        </svg>
    ):(
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" style={{transform:"rotate(180deg)"}}>
        <path fill="white" d="M10.5 15l7.5 7.5 7.5-7.5z"/>
        </svg>
    );
}
