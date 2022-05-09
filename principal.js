var persona;
var formato;
var rondas;
var marcador1;
var ganapierde;
formato="texto";



function cambiarFormato(){
	if (formato == "texto") formato = "imagen";
	else formato="texto";
}

function asignarTexto(id,texto){
    document.getElementById(id).innerHTML=texto;
}

function asignarImagen(id,imagen){
    document.getElementById(id).innerHTML="<img src="+imagen+">";
}

function obtenerTexto(id){
    return  document.getElementById(id).textContent;
}

function getContador(){
    return parseInt(document.getElementById("marcador1").textContent);
}

function getContador2(){
    return parseInt(document.getElementById("marcador2").textContent);
}

function getRondas(){
    return parseInt(document.getElementById("rondas").value);
}

function sumaContador(){
    var cont;
    cont=getContador();
    cont=cont+1;
    document.getElementById("marcador1").innerHTML=cont;
    console.log(cont); //debug
}

function sumaContador2(){
    var cont2;
    cont2=getContador2();
    cont2=cont2+1;
    document.getElementById("marcador2").innerHTML=cont2;
    console.log(cont2); //debug
}

function ponerPiedra(){
    persona=1;
    
   // if (formato == "texto") {
    	asignarTexto("p1","piedra");
   // }else{
   //	 asignarImagen("i1","piedra.png");
   // }
    tirada();
}

function ponerPapel(){
    persona=2;
    asignarTexto("p1","papel");
    tirada();
}

function ponerTijeras(){
    persona=3;
    asignarTexto("p1","tijeras");
    tirada();
}

function ponerLagarto(){
    persona=4;
    asignarTexto("p1","lagarto");
    tirada();
}

function ponerSpock(){
    persona=5;
    asignarTexto("p1","spock");
    tirada();
}

function tirada() {
    var rondas;
    rondas=getRondas();
    var marcador1;
    marcador1=getContador();
    var marcador2;
    marcador2=getContador2();
    console.log(rondas);
    console.log(marcador1);
    console.log(marcador2);

    if ((marcador1===rondas)||(marcador2===rondas)) {
        alert("se acabó");
    } else {
    
    var maquina, b, max, min;
    max=5;  min=1;
   
    //Boolean.empate=false;
    
    maquina = Math.floor(Math.random() * (max - min)) + min;
    //jugador = obtenerTexto("p1");
 
    if (maquina == 1) b="piedra";
    else if (maquina == 2) b="papel";
    else b="tijeras";
 
    asignarTexto("p2",b);
    console.log (b); //DEBUG
  
   if ( maquina == persona ) {
   
        asignarTexto("gana-pierde","Empate");
        empate=true;
   } 
   
    else if ( maquina == 1 ) { //PEDRA
   	
    	if ( persona == 2 ) { //PAPEL
   		    asignarTexto("gana-pierde","Ganas");
   	    }else if (persona == 3) {  //TIjERAS
   		    asignarTexto("gana-pierde","Pierdes");
        }else if (persona == 4) { //lagarto
            asignarTexto("gana-pierde","Pierdes");
        }else { //spock
            asignarTexto("gana-pierde","Ganas");
        }

   	}
   	
    else if ( maquina == 2 ){ //PAPEL
   
    	if ( persona == 1){ //PEDRA
   		    asignarTexto("gana-pierde","Pierdes");
    	} else if (persona == 3) {  //TISORES
   		    asignarTexto("gana-pierde","Ganas");
        } else if (persona == 4) {  //lagarto
            asignarTexto("gana-pierde","Ganas");
        } else {  //spock
            asignarTexto("gana-pierde","Pierdes");
   	    }
   }

    else if (maquina == 3 ){ //TIJERAS
   
     	if ( persona == 1 ){ //PEDRA
   		    asignarTexto("gana-pierde","Ganas");
    	}else if ( persona == 2) {  //PAPER
   		    asignarTexto("gana-pierde","Pierdes");
        }else if ( persona == 4) {  //lagarto
            asignarTexto("gana-pierde","Pierdes");
        }else {  //spock
            asignarTexto("gana-pierde","Ganas");
        }
   	}
   	
    else if (maquina == 4 ){ //lagarto
   
        if ( persona == 1 ){ //PEDRA
            asignarTexto("gana-pierde","Ganas");
        }else if ( persona == 2) {  //PAPER
            asignarTexto("gana-pierde","Pierdes");
        }else if ( persona == 3) {  //tijeras
            asignarTexto("gana-pierde","Ganas");
        }else {  //spock
            asignarTexto("gana-pierde","Pierdes");
        }
    }

    else { //spock
        if ( persona == 1 ){ //PEDRA
            asignarTexto("gana-pierde","Pierdes");
        }else if ( persona == 2) {  //PAPER
            asignarTexto("gana-pierde","Ganas");
        }else if ( persona == 3) {  //tijeras
            asignarTexto("gana-pierde","Pierdes");
        }else {  //spock
            asignarTexto("gana-pierde","Ganas");
        }
    }
   
    ganapierde=document.getElementById("gana-pierde").textContent;

    if (ganapierde==="Ganas") {
        sumaContador();
    }  else if (ganapierde==="Pierdes"){
        sumaContador2();
    }


    /*if ( (c == "piedra" && b == "tijeras") || ( c == "papel" && b == "piedra" ) || ( c == "tijeras" && b == "papel" ) ) {
    	asignarTexto("gana-pierde","Has Ganado!");
        //document.getElementById("gana-pierde").innerHTML="Has Ganado!";
    }

    else if ( (c == "piedra" && b == "papel") || ( c == "papel" && b == "tijeras" ) || ( c == "tijeras" && b == "piedra" )  ) {
        document.getElementById("gana-pierde").innerHTML="Has Perdido!"
    }

    else {
        document.getElementById("gana-pierde").innerHTML="empate!"
    }*/
    }

}


function cambio_ronda() {
   // alert("hola");
    document.getElementById("bloque_inferior").style.display="block";
    rondas=parseInt(document.getElementById("rondas").textContent);
}