import "../css/Home.css" 
import { PageName,Text,Textalt } from "./StyledComps";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Card from "./Card";


export default function Home(){
    const [dropdowns, updatedropdowns] = useState([
        {
            name:"Set Name",
            open:false,
            contents:(
                <Content content={(
                    <>
                    <label><Text>Player First Name:</Text></label>
                    <input type="text" className="first-name"></input>
                    <label><Text>Player Last Name:</Text></label>
                    <input type="text" className="last-name"></input>
                    </>
                )}/>)
        },
        {
            name:"Set Stats",
            open:false,
            contents:(
                <Content content={(
                    <>
                    <label><Text>Passing:</Text></label>
                    <input type="number" min="0" max="100" className="pass"></input>
                    <label><Text>Skill:</Text></label>
                    <input type="number" min="0" max="100" className="skill"></input>
                    <label><Text>Shooting:</Text></label>
                    <input type="number" min="0" max="100" className="shoot"></input>
                    <label><Text>Power:</Text></label>
                    <input type="number" min="0" max="100" className="power"></input>
                    <label><Text>Tackling:</Text></label>
                    <input type="number" min="0" max="100" className="tackle"></input>
                    <label><Text>Speed:</Text></label>
                    <input type="number" min="0" max="100" className="speed"></input>
                    </>
                )}/>)
        },
        {
            name:"Render Logo",
            open:false,
            contents:(
                <Content content={(
                    <>
                    <button className="import-logo"><Textalt>Import Logo</Textalt></button>
                    <button className="select-logo"><Textalt>Select From Existing Logos</Textalt></button>
                    </>
                )}/>)
        },
        {
            name:"Render Player",
            open:false,
            contents:(
                <Content content={(
                    <>
                    <button className="import-player"><Textalt>Import Player</Textalt></button>
                    <button className="select-player"><Textalt>Select From Existing Players</Textalt></button>
                    </>
                )}/>)
        }
]);



    

    return (
        <div className="home">
            
            <div className="left-side">
                {dropdowns.map((dropdown) => {
                    return(
                    <>
                    <Dropmenu key={dropdown.name} text={dropdown.name} open={dropdown.open} oncl={() => {
                        let tempList = [...dropdowns];
                        const ind = dropdowns.indexOf(dropdown)
                        tempList[ind].open = !tempList[ind].open;
                        updatedropdowns(tempList);
                    }}
                    />
                    {dropdown.open && dropdown.contents}
                    </>
                    )
                })}
            </div>
            <div className="right-side">
                <Card></Card>
            </div>
        </div>
    );
}

function Dropmenu({text,open,oncl}){
    return(
        <motion.div
        className="dropmenu" onClick={oncl}
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

function Content({content}){
    return(
        <AnimatePresence>
        <motion.div className="content"
        layout
        initial={{ opacity:0}}
        animate={{ opacity:1}}
        exit={{ opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          staggerChildren: 0.5,
        }}
        >
            {content}
        </motion.div>
        </AnimatePresence>
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
