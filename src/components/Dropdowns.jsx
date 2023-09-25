import { Text,Textalt } from "./StyledComps";
import DesignPicker from "./DesignPicker";
import "../css/Dropdowns.css"

let dropdowndata = [
    {
        name:"Set Player Name",
        open:false,
        contents:(
            
                <>
                <label><Text>Player First Name:</Text>
                <input type="text" id="first-name" defaultValue="Kaoru"></input></label>
                <label><Text>Player Last Name:</Text>
                <input type="text" id="last-name" defaultValue="Mitoma"></input></label>
                </>
            )
    },
    {
        name:"Set Player Data",
        open:false,
        contents:(
            
                <>
                <label><Text>Attack</Text>
                <input type="number" min="0" max="100" id="attack" defaultValue="86"></input></label>
                <label><Text>Defence</Text>
                <input type="number" min="0" max="100" id="defence" defaultValue="39"></input></label>
                <label><Text>Price (£m)</Text>
                <input type="number" min="0" max="100" id="price" defaultValue="40"></input></label>
                <label><Text>Position</Text> 
                <select defaultValue="mf" name="position" id="position">
                <option value="fw">Forward</option>
                <option value="mf">Midfielder</option>
                <option value="df">Defender</option>
                <option value="gk">Goalkeeper</option>
                </select></label>

                </>
            )
    },
    {
        name:"Set Attributes",
        open:false,
        contents:(
            
                <>
                <label><Text>Passing:</Text> 
                <input type="number" min="0" max="100" id="pass" defaultValue="84"></input></label>
                <label><Text>Skill:</Text> 
                <input type="number" min="0" max="100" id="skill" defaultValue="90"></input></label>
                <label><Text>Shooting:</Text> 
                <input type="number" min="0" max="100" id="shoot" defaultValue="81"></input></label>
                <label><Text>Power:</Text> 
                <input type="number" min="0" max="100" id="power" defaultValue="76"></input></label>
                <label><Text>Tackling:</Text> 
                <input type="number" min="0" max="100" id="tackle" defaultValue="34"></input></label>
                <label><Text>Speed:</Text>
                <input type="number" min="0" max="100" id="speed" defaultValue="91"></input></label>
                </>
            )
    },
    {
        name:"Render Logo",
        open:false,
        contents:(
            
                <>
                <button id="import-logo"><Textalt>Import Logo</Textalt></button>
                <button id="select-logo"><Textalt>Select From Existing Logos</Textalt></button>
                </>
            )
    },
    {
        name:"Render Player",
        open:false,
        contents:(
            
                <>
                <button id="import-player"><Textalt>Import Player</Textalt></button>
                <button id="select-player"><Textalt>Select From Existing Players</Textalt></button>
                </>
            )
    },
    {
        name:"Set Colours",
        open:false,
        contents:(
            
                <>
                <label><Text>Primary Color:</Text> 
                <input type="color" id="pri-col" defaultValue="#0057B8"></input></label>
                <label><Text>Secondary Color:</Text> 
                <input type="color" id="sec-col" defaultValue="#FFCD00"></input></label>
                </>
            )
    },
    {
        name:"Set Card Design",
        open:false,
        contents:(
            
                <DesignPicker/>
            )
    },
    
]

export default dropdowndata;