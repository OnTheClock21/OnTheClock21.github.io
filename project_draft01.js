fetch("csvjson.json").then(function(response){
    return response.json();
}).then(function(data){
    appendData(data);
    QB(data);
    OT(data);
    OG(data);
    WR(data);
    TE(data);
    DT(data);
    EDGE(data);
    LB(data);
    CB(data);
    S(data);
})

function appendData(data){
    console.log(data[1].Vorname);
    
}

window.addEventListener("load", QB);
window.addEventListener("load", OT);
window.addEventListener("load", OG);
window.addEventListener("load", WR);
window.addEventListener("load", TE);
window.addEventListener("load", DT);
window.addEventListener("load", EDGE);
window.addEventListener("load", LB);
window.addEventListener("load", CB);
window.addEventListener("load", S);

function QB(data){
    var container = document.getElementById("container02");
    
    for (i=0; i<14; i++){
        var newPlayer = document.createElement("DIV");
        newPlayer.setAttribute("id" , data[i].Vorname );
        newPlayer.setAttribute("draggable", "true");
        newPlayer.addEventListener("dragstart", OnDragStart);
        var wrong_Vorname = JSON.stringify(data[i].Vorname);
        var Vorname = wrong_Vorname.replace(/[""]+/g,'');
        var wrong_Nachname = JSON.stringify(data[i].Nachname);
        var Nachname = wrong_Nachname.replace(/[""]+/g,'');
        newPlayer.innerHTML= (Vorname+" "+Nachname);
        container.appendChild(newPlayer);

    }
}

function OT(data){
    var container = document.getElementById("container03");
    for (i=14; i<25; i++){
        var newPlayer = document.createElement("DIV");
        newPlayer.setAttribute("id" , data[i].Vorname );
        newPlayer.setAttribute("draggable", "true");
        newPlayer.addEventListener("dragstart", OnDragStart);
        var wrong_Vorname = JSON.stringify(data[i].Vorname);
        var Vorname = wrong_Vorname.replace(/[""]+/g,'');
        var wrong_Nachname = JSON.stringify(data[i].Nachname);
        var Nachname = wrong_Nachname.replace(/[""]+/g,'');
        newPlayer.innerHTML= (Vorname+" "+Nachname);
        container.appendChild(newPlayer);
    }
}

function OG(data){
    var container = document.getElementById("container04");
    for (i=25; i<39; i++){
        var newPlayer = document.createElement("DIV");
        newPlayer.setAttribute("id" , data[i].Vorname );
        newPlayer.setAttribute("draggable", "true");
        newPlayer.addEventListener("dragstart", OnDragStart);
        var wrong_Vorname = JSON.stringify(data[i].Vorname);
        var Vorname = wrong_Vorname.replace(/[""]+/g,'');
        var wrong_Nachname = JSON.stringify(data[i].Nachname);
        var Nachname = wrong_Nachname.replace(/[""]+/g,'');
        newPlayer.innerHTML= (Vorname+" "+Nachname);
        container.appendChild(newPlayer);
    }
}

function WR(data){
    var container = document.getElementById("container05");
    for (i=39; i<52; i++){
        var newPlayer = document.createElement("DIV");
        newPlayer.setAttribute("id" , data[i].Vorname );
        newPlayer.setAttribute("draggable", "true");
        newPlayer.addEventListener("dragstart", OnDragStart);
        var wrong_Vorname = JSON.stringify(data[i].Vorname);
        var Vorname = wrong_Vorname.replace(/[""]+/g,'');
        var wrong_Nachname = JSON.stringify(data[i].Nachname);
        var Nachname = wrong_Nachname.replace(/[""]+/g,'');
        newPlayer.innerHTML= (Vorname+" "+Nachname);
        container.appendChild(newPlayer);
    }
}

function TE(data){
    var container = document.getElementById("container06");
    for (i=52; i<62; i++){
        var newPlayer = document.createElement("DIV");
        newPlayer.setAttribute("id" , data[i].Vorname );
        newPlayer.setAttribute("draggable", "true");
        newPlayer.addEventListener("dragstart", OnDragStart);
        var wrong_Vorname = JSON.stringify(data[i].Vorname);
        var Vorname = wrong_Vorname.replace(/[""]+/g,'');
        var wrong_Nachname = JSON.stringify(data[i].Nachname);
        var Nachname = wrong_Nachname.replace(/[""]+/g,'');
        newPlayer.innerHTML= (Vorname+" "+Nachname);
        container.appendChild(newPlayer);
    }
}

function DT(data){
    var container = document.getElementById("container07");
    for (i=62; i<70; i++){
        var newPlayer = document.createElement("DIV");
        newPlayer.setAttribute("id" , data[i].Vorname );
        newPlayer.setAttribute("draggable", "true");
        newPlayer.addEventListener("dragstart", OnDragStart);
        var wrong_Vorname = JSON.stringify(data[i].Vorname);
        var Vorname = wrong_Vorname.replace(/[""]+/g,'');
        var wrong_Nachname = JSON.stringify(data[i].Nachname);
        var Nachname = wrong_Nachname.replace(/[""]+/g,'');
        newPlayer.innerHTML= (Vorname+" "+Nachname);
        container.appendChild(newPlayer);
    }
}

function EDGE(data){
    var container = document.getElementById("container08");
    for (i=70; i<84; i++){
        var newPlayer = document.createElement("DIV");
        newPlayer.setAttribute("id" , data[i].Vorname );
        newPlayer.setAttribute("draggable", "true");
        newPlayer.addEventListener("dragstart", OnDragStart);
        var wrong_Vorname = JSON.stringify(data[i].Vorname);
        var Vorname = wrong_Vorname.replace(/[""]+/g,'');
        var wrong_Nachname = JSON.stringify(data[i].Nachname);
        var Nachname = wrong_Nachname.replace(/[""]+/g,'');
        newPlayer.innerHTML= (Vorname+" "+Nachname);
        container.appendChild(newPlayer);
    }
}

function LB(data){
    var container = document.getElementById("container09");
    for (i=84; i<97; i++){
        var newPlayer = document.createElement("DIV");
        newPlayer.setAttribute("id" , data[i].Vorname );
        newPlayer.setAttribute("draggable", "true");
        newPlayer.addEventListener("dragstart", OnDragStart);
        var wrong_Vorname = JSON.stringify(data[i].Vorname);
        var Vorname = wrong_Vorname.replace(/[""]+/g,'');
        var wrong_Nachname = JSON.stringify(data[i].Nachname);
        var Nachname = wrong_Nachname.replace(/[""]+/g,'');
        newPlayer.innerHTML= (Vorname+" "+Nachname);
        container.appendChild(newPlayer);
    }
}

function CB(data){
    var container = document.getElementById("container10");
    for (i=97; i<111; i++){
        var newPlayer = document.createElement("DIV");
        newPlayer.setAttribute("id" , data[i].Vorname );
        newPlayer.setAttribute("draggable", "true");
        newPlayer.addEventListener("dragstart", OnDragStart);
        var wrong_Vorname = JSON.stringify(data[i].Vorname);
        var Vorname = wrong_Vorname.replace(/[""]+/g,'');
        var wrong_Nachname = JSON.stringify(data[i].Nachname);
        var Nachname = wrong_Nachname.replace(/[""]+/g,'');
        newPlayer.innerHTML= (Vorname+" "+Nachname);
        container.appendChild(newPlayer);
    }
}

function S(data){
    var container = document.getElementById("container11");
    for (i=111; i<123; i++){
        var newPlayer = document.createElement("DIV");
        
        newPlayer.setAttribute("draggable", "true");
        newPlayer.addEventListener("dragstart", OnDragStart);
        var wrong_Vorname = JSON.stringify(data[i].Vorname);
        var Vorname = wrong_Vorname.replace(/[""]+/g,'');
        var wrong_Nachname = JSON.stringify(data[i].Nachname);
        var Nachname = wrong_Nachname.replace(/[""]+/g,'');
        newPlayer.innerHTML= (Vorname+" "+Nachname);
        container.appendChild(newPlayer);
    }
}








function Eingabe() {
    var Tabelle = document.getElementById("Spielereingabe");
    var id_string = "playercolumn";
    var id_string02 = "selectioncolumn";
   for (rownumber=1; rownumber<32; rownumber++){
    var Zeilen = Tabelle.insertRow(-1);
     var Zelle_1 = Zeilen.insertCell(0);
     var Zelle_2 = Zeilen.insertCell(1);
     Zelle_1.setAttribute("class" , "Deine_Picks");
     Zelle_1.setAttribute("id", id_string+rownumber);
     
     

     Deine_Picks = document.querySelectorAll(".Deine_Picks");
     for (i=0; i < Deine_Picks.length ;i++){
     Deine_Picks[i].style.backgroundColor = "lightgreen" ;
     Deine_Picks[i].addEventListener("dragover", allowDrop);
     Deine_Picks[i].addEventListener("drop", Drop);
     }
    
     var inputfield = document.createElement("INPUT");
     inputfield.setAttribute("type", "text");
     inputfield.setAttribute("placeholder", "Selection");
     inputfield.setAttribute("class" , "Selection");
     inputfield.setAttribute("id", id_string02+rownumber);
     Zelle_2.appendChild(inputfield);

    }
}


var container_02 = document.getElementById("container02");
container_02.addEventListener("dragover", allowDrop);
container_02.addEventListener("drop", Drop);

var container_03 = document.getElementById("container03");
container_03.addEventListener("dragover", allowDrop);
container_03.addEventListener("drop", Drop);

var container_04 = document.getElementById("container04");
container_04.addEventListener("dragover", allowDrop);
container_04.addEventListener("drop", Drop);

var container_05 = document.getElementById("container05");
container_05.addEventListener("dragover", allowDrop);
container_05.addEventListener("drop", Drop);

var container_06 = document.getElementById("container06");
container_06.addEventListener("dragover", allowDrop);
container_06.addEventListener("drop", Drop);

var container_07 = document.getElementById("container07");
container_07.addEventListener("dragover", allowDrop);
container_07.addEventListener("drop", Drop);

var container_08 = document.getElementById("container08");
container_08.addEventListener("dragover", allowDrop);
container_08.addEventListener("drop", Drop);

var container_09 = document.getElementById("container09");
container_09.addEventListener("dragover", allowDrop);
container_09.addEventListener("drop", Drop);

var container_10 = document.getElementById("container10");
container_10.addEventListener("dragover", allowDrop);
container_10.addEventListener("drop", Drop);

var container_11 = document.getElementById("container11");
container_11.addEventListener("dragover", allowDrop);
container_11.addEventListener("drop", Drop);


var eingabe = document.getElementById("Eingabe");
eingabe.addEventListener("click" , compare_input);


var currentrow_cnt = 0;
function compare_input()
{   var playerctn = "playercolumn"+currentrow_cnt;
    var selectionctn= "selectioncolumn"+currentrow_cnt;
    var currentplayer = document.getElementById(playerctn).innerText;
    console.log(playerctn);
    console.log(currentplayer);
    var currentselection = document.getElementById(selectionctn).value;
    console.log(currentselection);

    if ((currentplayer==currentselection)&&(currentplayer!="")){
        alert("Korrekt");
        var x =document.getElementById('counter').innerHTML; 
            x++;    
            document.getElementById('counter').innerHTML=x;  
            console.log(x);    
    }

    else if((currentplayer=="")||(currentselection=="")){
        alert("Enter a name");
    }

    else{
        alert("Falsch");
    }

    if ((currentrow_cnt<32)&&(currentplayer!="")&&(currentselection!="")) {
        currentrow_cnt++;
    }

    

    

}
 
     
     
   function OnDragStart(ev) {
       ev.dataTransfer.setData("text", ev.target.id);
   }

   function allowDrop(ev) {
       ev.preventDefault();
   }

   function Drop(ev) {
       ev.preventDefault();
       var data = ev.dataTransfer.getData("text");
       ev.target.appendChild(document.getElementById(data))
       
      }


      