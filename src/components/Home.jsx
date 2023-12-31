import "../css/Home.css" 
import { PageName,} from "./StyledComps";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Card from "./Card";
import dropdowndata from "./Dropdowns";
import { card_data, setData } from "../scripts/cardData";
import { def_tra } from "../scripts/otherData";
import html2canvas from 'html2canvas';

/*
NOTES:

- fix that issue with missing keys bro idk
- make the set stats text boxes tesselate
- fix css for content make it maxed out like dropdown
- fix css for navbar and rightside

*/

export default function Home(){
    const [dropdowns, updatedropdowns] = useState(dropdowndata); 
    const [des_ind, upd_des_ind] = useState(0);      

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
                <AnimatePresence>
            <motion.button type="submit" id="submit" onClick={(e)=>{
                e.preventDefault();
                upd_des_ind(document.getElementById("card-design").dataset.index);
                console.log(setData(card_data));
            }}
            layout
            transition={def_tra}
            >Render Card</motion.button>
            </AnimatePresence>
            </form>
            <motion.button type="button" id="download" onClick={(e)=>{
                e.preventDefault();
                html2canvas(document.querySelector(".card"), {allowTaint:true}).then(canvas => {
                    const text = document.createElement("div");
                    text.innerHTML="Right click the card and press save image as!";
                    text.classList.add("text");
                    const done_but = document.createElement("button");
                    done_but.classList.add("done");
                    done_but.innerHTML = "Back";
                    done_but.addEventListener("click", ()=>{
                        document.querySelector(".backdrop").remove();
                    });
                    const backdrop = document.createElement("div");
                    backdrop.classList.add("backdrop");
                    canvas.classList.add("canva");
                    backdrop.appendChild(text);
                    backdrop.appendChild(canvas);
                    backdrop.appendChild(done_but);
                    window.scrollTo(0, 0);
                    document.body.appendChild(backdrop);
                });
            }}
            layout
            transition={def_tra}
            >Download Card</motion.button>
            </div>
            <div className="right-side">
                <Card index={des_ind}></Card>
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
        transition={def_tra}
        >
            <PageName>{text}</PageName>
            <Arrow open={open}></Arrow>
        </motion.div>
    )
}



function Arrow({open}){
    return open ? (
        <motion.svg
        className="arrow" 
        initial={{ rotate:0 }}
        animate={{ rotate:180 }}
        transition={def_tra}
        xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" >
        <path fill="white" d="M10.5 15l7.5 7.5 7.5-7.5z"/>
        </motion.svg>
    ):(
        <motion.svg 
        className="arrow"
        initial={{ rotate:180 }}
        animate={{ rotate:0 }}
        transition={def_tra}
        xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
        <path fill="white" d="M10.5 15l7.5 7.5 7.5-7.5z"/>
        </motion.svg>
    );
}

function Content({content, show}){
    let shown = show ? "showing" : "not-showing";
    let theStyle= show ? {
        position:"static",
        top:0,
        width:"100%",
    } : {
        position:"absolute",
        top:"-100%",
        width:"100%",
    }
    return(
        <AnimatePresence>
        <motion.div className={`content ${shown}`}
        layout
        initial={{ opacity:0, scale:1}}
        animate={{ opacity:1, scale:1}}
        exit={{ opacity: 0, scale:1 }}
        transition={def_tra}
        style={theStyle}
        >
            {content}
        </motion.div>
        </AnimatePresence>
    )
}

export {Content};