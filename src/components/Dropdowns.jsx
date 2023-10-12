import { Text } from "./StyledComps";
import DesignPicker from "./DesignPicker";
import "../css/Dropdowns.css"
import { card_data } from "../scripts/cardData";

let dropdowndata = [
    {
        name:"Set Player Name",
        open:false,
        contents:(
            
                <>
                <label><Text>Player First Name:</Text>
                <input type="text" id="first-name" defaultValue={card_data.first_name}></input></label>
                <label><Text>Player Last Name:</Text>
                <input type="text" id="last-name" defaultValue={card_data.last_name}></input></label>
                </>
            )
    },
    {
        name:"Set Player Data",
        open:false,
        contents:(
            
                <>
                <label><Text>Attack</Text>
                <input type="number" min="0" max="100" id="attack" defaultValue={card_data.attack}></input></label>
                <label><Text>Defence</Text>
                <input type="number" min="0" max="100" id="defence" defaultValue={card_data.defence}></input></label>
                <label><Text>Price (£m)</Text>
                <input type="number" min="0" max="100" id="price" defaultValue={card_data.price}></input></label>
                <label><Text>Position</Text> 
                <select defaultValue={card_data.position} name="position" id="position">
                <option value="Forward">Forward</option>
                <option value="Midfielder">Midfielder</option>
                <option value="Defender">Defender</option>
                <option value="Goalkeeper">Goalkeeper</option>
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
                <input type="number" min="0" max="100" id="pass" defaultValue={card_data.pass}></input></label>
                <label><Text>Skill:</Text> 
                <input type="number" min="0" max="100" id="skill" defaultValue={card_data.skill}></input></label>
                <label><Text>Shooting:</Text> 
                <input type="number" min="0" max="100" id="shoot" defaultValue={card_data.shoot}></input></label>
                <label><Text>Power:</Text> 
                <input type="number" min="0" max="100" id="power" defaultValue={card_data.power}></input></label>
                <label><Text>Tackling:</Text> 
                <input type="number" min="0" max="100" id="tackle" defaultValue={card_data.tackle}></input></label>
                <label><Text>Speed:</Text>
                <input type="number" min="0" max="100" id="speed" defaultValue={card_data.speed}></input></label>
                </>
            )
    },
    {
        name:"Render Player",
        open:false,
        contents:(
            
                <>
                {/*<button type="button" id="import-player"><Textalt>Import Player</Textalt></button>
                <button type="button" id="select-player"><Textalt>Select From Existing Players</Textalt></button>*/}
                <label><Text>{"Enter a player image URL:"}</Text>
                <input type="text" id="player-url" defaultValue={card_data.player_render}></input></label>
                <div><Text>Tip: Go to <a href="https://www.footyrenders.com/">FootyRenders</a> to find player images!</Text></div>
                <div><Text>Tip 2: Ensure your link ends in .png ONLY</Text></div>
                </>
            )
    },
    {
        name:"Render Logo",
        open:false,
        contents:(
            
                <>
                {/*<button type="button" id="import-logo"><Textalt>Import Logo</Textalt></button>
                <button type="button" id="select-logo"><Textalt>Select From Existing Logos</Textalt></button>*/}
                <label><Text>{"Enter a logo image URL:"}</Text>
                <input type="text" id="logo-url" defaultValue={card_data.logo_render}></input></label>
                <div><Text>Tip: Just use google images to find logos</Text></div>
                <div><Text>Tip 2: Ensure your link ends in .png ONLY</Text></div>
                </>
            )
    },
    {
        name:"Set Colours",
        open:false,
        contents:(
            
                <>
                <label><Text>Primary Color:</Text> 
                <input type="color" id="pri-col" defaultValue={card_data.pri_col}></input></label>
                <label><Text>Secondary Color:</Text> 
                <input type="color" id="sec-col" defaultValue={card_data.sec_col}></input></label>
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