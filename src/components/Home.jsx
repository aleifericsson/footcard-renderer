import "../css/Home.css" 
import { PageName,Text,Textalt } from "./StyledComps";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Card from "./Card";

/*
NOTES:

- inputs should have id and name and labels should have 4
- fix that issue with missing keys bro idk
- make the set stats text boxes tesselate
- fix css for content make it maxed out like dropdown
- fix css for navbar and rightside

*/

export default function Home(){
    const [dropdowns, updatedropdowns] = useState([
        {
            name:"Set Player Name",
            open:false,
            contents:(
                <Content content={(
                    <>
                    <label><Text>Player First Name:</Text></label>
                    <input type="text" className="first-name" defaultValue="Kaoru"></input>
                    <label><Text>Player Last Name:</Text></label>
                    <input type="text" className="last-name" defaultValue="Mitoma"></input>
                    </>
                )}/>)
        },
        {
            name:"Set Player Data",
            open:false,
            contents:(
                <Content content={(
                    <>
                    <label><Text>Attack</Text></label>
                    <input type="number" min="0" max="100" className="attack" defaultValue="86"></input>
                    <label><Text>Defence</Text></label>
                    <input type="number" min="0" max="100" className="defence" defaultValue="39"></input>
                    <label><Text>Price (£m)</Text></label>
                    <input type="number" min="0" max="100" className="price" defaultValue="40"></input>
                    <label><Text>Position</Text></label>
                    <select defaultValue="mf" name="position" className="position">
                    <option value="fw">Forward</option>
                    <option value="mf">Midfielder</option>
                    <option value="df">Defender</option>
                    <option value="gk">Goalkeeper</option>
                    </select>

                    </>
                )}/>)
        },
        {
            name:"Set Attributes",
            open:false,
            contents:(
                <Content content={(
                    <>
                    <label><Text>Passing:</Text></label>
                    <input type="number" min="0" max="100" className="pass" defaultValue="84"></input>
                    <label><Text>Skill:</Text></label>
                    <input type="number" min="0" max="100" className="skill" defaultValue="90"></input>
                    <label><Text>Shooting:</Text></label>
                    <input type="number" min="0" max="100" className="shoot" defaultValue="81"></input>
                    <label><Text>Power:</Text></label>
                    <input type="number" min="0" max="100" className="power" defaultValue="76"></input>
                    <label><Text>Tackling:</Text></label>
                    <input type="number" min="0" max="100" className="tackle" defaultValue="34"></input>
                    <label><Text>Speed:</Text></label>
                    <input type="number" min="0" max="100" className="speed" defaultValue="91"></input>
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
        },
        {
            name:"Set Colours",
            open:false,
            contents:(
                <Content content={(
                    <>
                    <label><Text>Primary Color:</Text></label>
                    <input type="color" className="pri-col"></input>
                    <label><Text>Secondary Color:</Text></label>
                    <input type="color" className="sec-col"></input>
                    </>
                )}/>)
        },
        {
            name:"Set Card Design",
            open:false,
            contents:(
                <Content content={(
                    <>
                    nothing for now but add a blank card with the ability to change with arrows that would be cool
                    </>
                )}/>)
        },
        
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
