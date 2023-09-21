let card_data = {
    first_name: "Kaoru",
    last_name: "Mitoma",

    attack: "80",
    defence: "39",
    price: "40",
    position: "Midfielder",

    pass:"84",
    skill:"90",
    shoot:"81",
    power:"76",
    tackle:"34",
    speed:"91",

    logo_render:"",
    player_render:"",

    pri_col:"#0057B8",
    sec_col:"#FFCD00",

    design_render:"",
}

function setData(data){
    data.first_name=document.getElementById("first-name").value;
    data.last_name=document.getElementById("last-name").value;

    data.attack=document.getElementById("attack").value;
    data.defence=document.getElementById("defence").value;
    data.price=document.getElementById("price").value;
    data.position=document.getElementById("position").value;

    data.pass=document.getElementById("pass").value;
    data.skill=document.getElementById("skill").value;
    data.shoot=document.getElementById("shoot").value;
    data.power=document.getElementById("power").value;
    data.tackle=document.getElementById("tackle").value;
    data.speed=document.getElementById("speed").value;

    //logo_render
    //player_render

    data.pri_col=document.getElementById("pri-col").value;
    data.sec_col=document.getElementById("sec-col").value;

    //design_render

    return data;
}

export {card_data, setData};