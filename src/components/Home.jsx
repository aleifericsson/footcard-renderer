import "../css/Home.css" 
import { PageName } from "./StyledComps";
import { useState } from "react";
import { motion } from "framer-motion";


export default function Home(){
    const [dropdowns, updatedropdowns] = useState([
        {
            name:"Set Name",
            open:false
        },
        {
            name:"Set Stats",
            open:false
        },
        {
            name:"Set Logo",
            open:false
        },
        {
            name:"Set Player",
            open:false
        }
]);



    

    return (
        <div className="home">
            
            <div className="left-side">
                {dropdowns.map((dropdown) => {
                    return(
                    <Dropmenu key={dropdown.name} text={dropdown.name} open={dropdown.open} oncl={() => {
                        let tempList = [...dropdowns];
                        const ind = dropdowns.indexOf(dropdown)
                        tempList[ind].open = !tempList[ind].open;
                        updatedropdowns(tempList);
                    }}
                    />
                    )
                })}
            </div>
            <div className="right-side">

            </div>
        </div>
    );
}

function Dropmenu({text,open,oncl}){
    return(
        <div className="dropmenu" onClick={oncl}>
            <PageName>{text}</PageName>
            <Arrow open={open}></Arrow>
        </div>
    )
}

function Arrow({open}){
    return open ? (
        <motion.svg 
        initial={{ rotate:0 }}
        animate={{ rotate:180 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20
        }}
        xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" >
        <path fill="white" d="M10.5 15l7.5 7.5 7.5-7.5z"/>
        </motion.svg>
    ):(
        <motion.svg 
        initial={{ rotate:180 }}
        animate={{ rotate:0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20
        }}
        xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
        <path fill="white" d="M10.5 15l7.5 7.5 7.5-7.5z"/>
        </motion.svg>
    );
}
