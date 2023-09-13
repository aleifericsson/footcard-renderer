import "../css/Home.css" 
import { PageName,Text } from "./StyledComps";
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
                    <Text>aasdasf</Text>
                    </>
                )}/>)
        },
        {
            name:"Set Stats",
            open:false,
            contents:(
                <Content content={(
                    <>
                    basdsa
                    </>
                )}/>)
        },
        {
            name:"Set Logo",
            open:false,
            contents:(
                <Content content={(
                    <>
                    c
                    </>
                )}/>)
        },
        {
            name:"Set Player",
            open:false,
            contents:(
                <Content content={(
                    <>
                    d
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
