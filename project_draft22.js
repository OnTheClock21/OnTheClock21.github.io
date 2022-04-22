var currentrow_cnt = 0;
function compare_players()
{   
    var next_row = document.getElementById("table_livemock").rows[currentrow_cnt+1];
    var current_row = document.getElementById("table_livemock").rows[currentrow_cnt]
    var current_player_cell = current_row.cells[2];
    var currentplayer = current_player_cell.children[0].innerHTML;
    //console.log(currentplayer);

    var current_selection_cell = current_row.cells[3];
    var currentselection = current_selection_cell.children[0].innerHTML;
    //console.log(currentselection);

    if ((currentplayer==currentselection)&&(currentplayer!="")){
        //alert("Korrekt");
        var score_count =document.getElementById('txt_score').innerHTML; 
        score_count++;    
        document.getElementById('txt_score').innerHTML=score_count;  
        console.log(score_count);
        current_row.style.background = "#23F15D";
        var current_id = current_selection_cell.id;
        console.log(current_id);
        var splitted_id =current_id.split('__');
        var current_playercard_id = splitted_id[1];
        current_playercard = document.getElementById(current_playercard_id);
        console.log(current_playercard_id);
        current_playercard.remove();

    }

    else if((currentplayer=="Your Selection")||(currentselection=="Actual Selection")){
        alert("Enter a name");
        
    }

    else{
        //alert("Falsch");
        current_row.style.background = "#FF9393";
        var current_id = current_selection_cell.id;
        console.log(current_id);
        var splitted_id =current_id.split('__');
        var current_playercard_id = splitted_id[1];
        current_playercard = document.getElementById(current_playercard_id);
        var current_playercard = document.getElementById(current_playercard_id);
        console.log(current_playercard_id);
        current_playercard.remove();
    }

    if ((currentrow_cnt<32)&&(currentplayer!="Your Selection")&&(currentselection!="Actual Selection")) {
        current_row.style.opacity="0.7";
        currentrow_cnt++;
        next_row.style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";
    }

}


function scroll_to_livemock () {
    const element = document.getElementById("cont_livemock");
    element.scrollIntoView();
    window.scrollBy(0, -20);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    var playercard_id = ev.target.id;

    ev.dataTransfer.setData("name_text", ev.target.children[1].innerText);
    ev.dataTransfer.setData("position_text", ev.target.children[2].innerText);
    ev.dataTransfer.setData("player_id", playercard_id);
    
}

function drop(ev) {
    ev.preventDefault();
    var name_data = ev.dataTransfer.getData("name_text");
    var position_data = ev.dataTransfer.getData("position_text");
    var player_id = ev.dataTransfer.getData("player_id");
    ev.target.children[0].innerText = name_data;
    ev.target.children[1].innerText = position_data;
    ev.target.id="dropped__"+player_id;

}

fetch("PlayerList_Top100.json").then(function(response){
    return response.json();
}).then(function(data){
    getPlayerCards(data)
})



function getPlayerCards(data){
    var cont_playerlist = document.getElementById("list_available_players");
    var id_counter=0;
    for (i=0; i<100; i++){
        id_counter++;
        var new_player_card = document.createElement("LI"); 
        var p_player_name = document.createElement("P");
        var p_player_position = document.createElement("P");
        var sel_player_grade = document.createElement("select");

        var opt_player_grade = document.createElement("option");
        opt_player_grade.className = "class_grade_option";

        var opt_grade_a_plus = document.createElement("option");

        opt_grade_a_plus.innerHTML = "A+";
        opt_grade_a_plus.className = "class_grade_option";
        var opt_grade_a = document.createElement("option");
        opt_grade_a.innerHTML = "A";
        opt_grade_a.className = "class_grade_option";
        var opt_grade_a_minus = document.createElement("option");
        opt_grade_a_minus.innerHTML = "A-";
        opt_grade_a_minus.className = "class_grade_option";

        var opt_grade_b_plus = document.createElement("option");
        opt_grade_b_plus.innerHTML = "B+";
        opt_grade_b_plus.className = "class_grade_option";
        var opt_grade_b = document.createElement("option");
        opt_grade_b.innerHTML = "B";
        opt_grade_b.className = "class_grade_option";
        var opt_grade_b_minus = document.createElement("option");
        opt_grade_b_minus.innerHTML = "B-";
        opt_grade_b_minus.className = "class_grade_option";

        var opt_grade_c_plus = document.createElement("option");
        opt_grade_c_plus.innerHTML = "C+";
        opt_grade_c_plus.className = "class_grade_option";
        var opt_grade_c = document.createElement("option");
        opt_grade_c.innerHTML = "C";
        opt_grade_c.className = "class_grade_option";
        var opt_grade_c_minus = document.createElement("option");
        opt_grade_c_minus.innerHTML = "C-";
        opt_grade_c_minus.className = "class_grade_option";

        var opt_grade_d_plus = document.createElement("option");
        opt_grade_d_plus.innerHTML = "D+";
        opt_grade_d_plus.className = "class_grade_option";
        var opt_grade_d = document.createElement("option");
        opt_grade_d.innerHTML = "D";
        opt_grade_d.className = "class_grade_option";
        var opt_grade_d_minus = document.createElement("option");
        opt_grade_d_minus.innerHTML = "D-";
        opt_grade_d_minus.className = "class_grade_option";

        var str_name

        /*Set values to make the player card (list elements) draggable*/
        new_player_card.setAttribute("draggable", "true"); 
        new_player_card.addEventListener("dragstart", drag);

        /*Assign classes to the paragraphs of the list (name, position and grade should have their specific style)*/
        p_player_name.className = "available_player_name";
        p_player_position.className = "available_player_position";
        sel_player_grade.className = "available_player_grade";

        /*Read player-information from JSON file*/
        var str_name = JSON.stringify(data[i].Name);
        var str_position = JSON.stringify(data[i].Position);
        var str_grade = JSON.stringify(data[i].Grade);

        /*console.log(str_name);
        console.log(typeof(str_grade));*/

        /*Remove quotation-marks*/
        str_name = str_name.replace(/\"/g, "");
        str_position = str_position.replace(/\"/g, "");
        str_grade = str_grade.replace(/\"/g, "");

        
        /*Assign information to the htmlElement*/
        p_player_name.innerHTML = str_name;
        p_player_position.innerHTML = str_position;
        opt_player_grade.innerHTML = str_grade;

        /*Color Player-Grade according to grade*/
        switch(str_grade){
            case "A+":
                sel_player_grade.style.color="#00DB8C";
                break;
            case "A":
                sel_player_grade.style.color="#00DB8C";
                break;
            case "A-":
                sel_player_grade.style.color="#00DB8C";
                break;
            case "B+":
                sel_player_grade.style.color="#17AA75";
                break;
            case "B":
                sel_player_grade.style.color="#17AA75";
                break;
            case "B-":
                sel_player_grade.style.color="#17AA75";
                break;
            case "C+":
                sel_player_grade.style.color="#EDDA30";
                break;
            case "C":
                sel_player_grade.style.color="#EDDA30";
                break;
            case "C-":
                sel_player_grade.style.color="#EDDA30";
                break;
            case "D+":
                sel_player_grade.style.color="#EDA230";
                break;
            case "D":
                sel_player_grade.style.color="#EDA230";
                break;
            case "D-":
                sel_player_grade.style.color="#EDA230";
                break;
            default:
                sel_player_grade.style.color="red";
                break;
        }
        sel_player_grade.appendChild(opt_player_grade);
        sel_player_grade.appendChild(opt_grade_a_plus);
        sel_player_grade.appendChild(opt_grade_a);
        sel_player_grade.appendChild(opt_grade_a_minus);
        sel_player_grade.appendChild(opt_grade_b_plus);
        sel_player_grade.appendChild(opt_grade_b);
        sel_player_grade.appendChild(opt_grade_b_minus);
        sel_player_grade.appendChild(opt_grade_c_plus);
        sel_player_grade.appendChild(opt_grade_c);
        sel_player_grade.appendChild(opt_grade_c_minus);
        sel_player_grade.appendChild(opt_grade_d_plus);
        sel_player_grade.appendChild(opt_grade_d);
        sel_player_grade.appendChild(opt_grade_d_minus);

        sel_player_grade.addEventListener('change', adjust_grade_color);

        /*The paragraphs with player-information are children of the 'Playercard'
        !!!mind the order, since they are displayed in this order*/
        new_player_card.appendChild(sel_player_grade);
        new_player_card.appendChild(p_player_name);
        new_player_card.appendChild(p_player_position);
        new_player_card.id= "player_card" + id_counter;

        /*Append the Playercard to the list of players*/
        cont_playerlist.appendChild(new_player_card);

    }

}


function adjust_grade_color(event){
    var str_grade = event.target.value;
    var sel_player_grade = event.target;
    /*Color Player-Grade according to grade*/
    switch(str_grade){
        case "A+":
            sel_player_grade.style.color="#00DB8C";
            break;
        case "A":
            sel_player_grade.style.color="#00DB8C";
            break;
        case "A-":
            sel_player_grade.style.color="#00DB8C";
            break;
        case "B+":
            sel_player_grade.style.color="#17AA75";
            break;
        case "B":
            sel_player_grade.style.color="#17AA75";
            break;
        case "B-":
            sel_player_grade.style.color="#17AA75";
            break;
        case "C+":
            sel_player_grade.style.color="#EDDA30";
            break;
        case "C":
            sel_player_grade.style.color="#EDDA30";
            break;
        case "C-":
            sel_player_grade.style.color="#EDDA30";
            break;
        case "D+":
            sel_player_grade.style.color="#EDA230";
            break;
        case "D":
            sel_player_grade.style.color="#EDA230";
            break;
        case "D-":
            sel_player_grade.style.color="#EDA230";
            break;
        default:
            sel_player_grade.style.color="red";
            break;
    }
}
































/*fetch("csvjson.json").then(function(response){
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
    
    for (i=0; i<13; i++){
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
    for (i=25; i<38; i++){
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
    for (i=39; i<51; i++){
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
    for (i=70; i<83; i++){
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
    for (i=84; i<96; i++){
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
    for (i=97; i<110; i++){
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
    for (i=111; i<122; i++){
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
     var Zelle_3=Zeilen.insertCell(2);
     Zelle_3.innerHTML = rownumber+1;
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


      var slideIndex = 1;
      showSlides(slideIndex);
      
      function plusSlides(n) {
        showSlides(slideIndex += n);
      }
      
      function currentSlide(n) {
        showSlides(slideIndex = n);
      }
      
      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
      }*/