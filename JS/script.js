let menuVisible = false;
//Función que oculta o muestra el menu
function mostrar_ocultar_menu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlCss");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("java");
        habilidades[4].classList.add("photoshop");
        habilidades[5].classList.add("ilustrator");
        habilidades[6].classList.add("bd");
        habilidades[7].classList.add("msO");
        habilidades[8].classList.add("tee");
        habilidades[9].classList.add("crea");
        habilidades[9].classList.add("crea");
        habilidades[9].classList.add("res");
        habilidades[9].classList.add("ing");

    }
}

function disableIE() {
    if (document.all) {
        return false;
    }
}
function disableNS(e) {
    if (document.layers || (document.getElementById && !document.all)) {
        if (e.which==2 || e.which==3) {
            return false;
        }
    }
}
if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = disableNS;
} 
else {
    document.onmouseup = disableNS;
    document.oncontextmenu = disableIE;
}
document.oncontextmenu=new Function("return false");