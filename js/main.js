let hora,btn_saludar;

window.onload = init;

function init(){
    hora = document.getElementById("txt_hora");
    btn_saludar = document.getElementById("btn_saludar");
    btn_saludar.addEventListener("click",saludar);
}

function saludar(evento){
    let valor_hora = hora.value;

    if(valor_hora >=4 && valor_hora <=11)
    {
        alert("buenos dias");
    }else if(valor_hora >=12 && valor_hora <=13 ) {
        alert("Feliz almuerzo");
    }else if(valor_hora >=14 && valor_hora <=17) {
        alert("buenos tardes");
    }else if((valor_hora >=18 && valor_hora <=23)||(valor_hora >0 && valor_hora <=3)) {
        alert("buenos noches");
    }
    else {alert("no");}
}