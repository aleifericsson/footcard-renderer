//import { design_list } from "./otherData";

let card_data = {
    first_name: "Kaoru",
    last_name: "Mitoma",

    attack: "80",
    defence: "39",
    price: "40",
    position: "Midfielder",
    pos_short:"MF",

    pass:"84",
    skill:"90",
    shoot:"81",
    power:"76",
    tackle:"34",
    speed:"91",


    player_render:"https://www.footyrenders.com/render/kaoru-mitoma-1.png",
    logo_render:"https://1000logos.net/wp-content/uploads/2018/06/Brighton-Hove-Albion-Logo-500x281.png",

    pri_col:"#0057B8",
    sec_col:"#FFFFFF",

    design_render:"",
}

function setData(data){
    data.first_name=document.getElementById("first-name").value;
    data.last_name=document.getElementById("last-name").value;

    data.attack=document.getElementById("attack").value;
    data.defence=document.getElementById("defence").value;
    data.price=`£${document.getElementById("price").value}m`;
    data.position=document.getElementById("position").value;
    if (data.position==="Forward"){
        data.pos_short="FW";
    } else if (data.position==="Midfielder"){
        data.pos_short="MF";
    } else if (data.position==="Defender"){
        data.pos_short="DF";
    } else{
        data.pos_short="GK";
    }

    data.pass=document.getElementById("pass").value;
    data.skill=document.getElementById("skill").value;
    data.shoot=document.getElementById("shoot").value;
    data.power=document.getElementById("power").value;
    data.tackle=document.getElementById("tackle").value;
    data.speed=document.getElementById("speed").value;


    data.player_render=document.getElementById("player-url").value;
    data.logo_render=document.getElementById("logo-url").value;

    data.pri_col=document.getElementById("pri-col").value;
    data.sec_col=document.getElementById("sec-col").value;

    data.design_render=document.getElementById("card-design").dataset.design;

    renderData(data);

    return data;
}

function renderData(data){
    const svg_pri_col = document.querySelectorAll(".svg-pri-col");
    svg_pri_col.forEach(part => {part.style.fill=data.pri_col});
    const svg_sec_col = document.querySelectorAll(".svg-sec-col");
    svg_sec_col.forEach(part => {part.style.fill=data.sec_col});

    document.querySelector(".svg-first-name").innerHTML=data.first_name;
    document.querySelector(".svg-last-name").innerHTML=data.last_name;
    document.querySelector(".svg-price").innerHTML=data.price;
    document.querySelector(".svg-pos-short").innerHTML=data.pos_short;

    document.querySelector(".svg-attack").innerHTML=data.attack;
    document.querySelector(".svg-defence").innerHTML=data.defence;
    document.querySelector(".svg-pass").innerHTML=data.pass;
    document.querySelector(".svg-shoot").innerHTML=data.shoot;
    document.querySelector(".svg-skill").innerHTML=data.skill;
    document.querySelector(".svg-power").innerHTML=data.power;
    document.querySelector(".svg-speed").innerHTML=data.speed;
    document.querySelector(".svg-tackle").innerHTML=data.tackle;

    document.querySelector(".player").src=data.player_render;
    document.querySelector(".logo").src=data.logo_render;

    //set design_render
}

export {card_data, setData};