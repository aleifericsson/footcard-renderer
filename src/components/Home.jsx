import "../css/Home.css" 
import { PageName,} from "./StyledComps";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Card from "./Card";
import dropdowndata from "./Dropdowns";
import { card_data, setData } from "../scripts/cardData";
/*
NOTES:

- inputs should have id and name and labels should have 4
- fix that issue with missing keys bro idk
- make the set stats text boxes tesselate
- fix css for content make it maxed out like dropdown
- fix css for navbar and rightside

*/

export default function Home(){
    const [dropdowns, updatedropdowns] = useState(dropdowndata);    

    return (
        <div className="home">
            
            <div className="left-side">
                <form id="form">
                {dropdowns.map((dropdown) => {
                    return(
                    <>
                    <Dropmenu keys={dropdown.name} text={dropdown.name} open={dropdown.open} oncl={() => {
                        let tempList = [...dropdowns];
                        const ind = dropdowns.indexOf(dropdown)
                        tempList[ind].open = !tempList[ind].open;
                        updatedropdowns(tempList);
                    }}
                    />
                    <Content show={dropdown.open} content={dropdown.contents}/>
                    </>
                    )
                })}
            <button type="submit" id="submit" onClick={(e)=>{
                e.preventDefault();
                console.log(setData(card_data));
            }}>Render Card</button>
            </form>
            </div>
            <div className="right-side">
                <Card></Card>
            </div>
        </div>
    );
}

function Dropmenu({text,open,oncl,keys}){
    return(
        <motion.div
        className="dropmenu" onClick={oncl}
        key={keys}
        layout 
        transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
        >
            <PageName>{text}</PageName>
            <Arrow open={open}></Arrow>
        </motion.div>
    )
}



function Arrow({open}){
    return open ? (
        <motion.svg 
        initial={{ rotate:0 }}
        animate={{ rotate:180 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
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
          stiffness: 200,
          damping: 20,
        }}
        xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
        <path fill="white" d="M10.5 15l7.5 7.5 7.5-7.5z"/>
        </motion.svg>
    );
}

function Content({content, show}){
    let shown = show ? "showing" : "not-showing";
    let theStyle= show ? {
        position:"static",
        top:"0px",
    } : {
        position:"absolute",
        top:"-100%",
    }
    return(
        <AnimatePresence>
        <motion.div className={`content ${shown}`}
        layout
        initial={{ opacity:0, scale:1}}
        animate={{ opacity:1, scale:1}}
        exit={{ opacity: 0, scale:1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          staggerChildren: 0.5,
        }}
        style={theStyle}
        >
            {content}
        </motion.div>
        </AnimatePresence>
    )
}

export {Content};