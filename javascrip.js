const  turnOn = document.getElementById ('turnOn');
const  turnOff = document.getElementById ('turnOff');
/* declarando variavel  Para fazer funcionar os butões desligar e ligar */
/*=====================================================================*/




const lamp = document.getElementById ('lamp');/* Trazendo a Lâmpada */


function islampBroken(){
    return lamp.src.indexOf ('quebrada') > -1
    /*  essa ação é criada para verificar se a lâmpada ta quebrada*/
    
}


function lampOn (){
    if (!islampBroken () ) {
    lamp.src = './img/ligada.jpg';
    }
}


function lampOff(){
    if(!islampBroken () ){
    lamp.src = './img/desligada.jpg'
    }
}

function lampBroken  (){

    lamp.src = './img/quebrada.jpg'
}
/*Criando uma função lamp  para trezer as imagens*/
/*if utilaizado para que quando "quebrada" tiver sido chamado a lampOn não funcionará*/

turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener ('click',lampOff)
/* a variavel turnOn ou turnOff  vai  capturar o click e vai trazer a função lampOn ou of*/
lamp.addEventListener('mouseover',lampOn);
lamp.addEventListener ('mouseleave',lampOff);
/* criando ação do mouse  quando o mause*/
/*===================================================================*/
lamp.addEventListener ('dblclick',lampBroken);
/* quebrar a lampada no doubble click*/
