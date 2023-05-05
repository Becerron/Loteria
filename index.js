const baraja = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54];
let cont = 0;
let idioma = null;
let reproducirbool;
const Carta = document.querySelector("#Imagenes");
const Comenzarbtn = document.querySelector("#Comenzar");
const Mensaje = document.querySelector("#Mensaje");
const Reiniciar = document.querySelector("#Reiniciar");
const BanderaMx = document.querySelector(".BanderaMx");
const BanderaVa = document.querySelector(".BanderaVa");
const BanderaUs = document.querySelector(".BanderaUs");
const RadioMx = document.querySelector("#Mexico");
const RadioVa = document.querySelector("#Vaticano");
const RadioUs = document.querySelector("#EstadosUnidos");
const Seleccion = document.querySelector("#SeleccionIdioma");
const SeleccionR = document.querySelector("#SeleccionIdiomaR");
const Titulo = document.querySelector("#Titulo");
const SiguienteBtn = document.querySelector("#SiguienteBtn");
const AnteriorBtn = document.querySelector("#AnteriorBtn");



function comenzarbarajar() {
    
    if(idioma == null){
        Mensaje.style.display = "block";
        
    }else{
        cont = 0;
        for (let i = baraja.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let k = baraja[i];
            baraja[i] = baraja[j];
            baraja[j] = k;
        }
        Carta.innerHTML = "<img src='Cartas/" + baraja[cont] + idioma +".jpg' alt='Carta' id='Carta'>";
        reproducir();
        Comenzarbtn.style.display = "none";
        Carta.style.display = "block";
        Mensaje.style.display = "none";
        Reiniciar.style.display = "block";
        Seleccion.style.display = "none";
        SeleccionR.style.display = "none";
        SiguienteBtn.style.display = "block";
        AnteriorBtn.style.display = "block";
        
    }   
}
function anterior() {
    if (cont > 0 && cont <= 53 && Carta.style.display == "block" && reproducirbool==true) {
        cont--;
        Carta.innerHTML = "<img src='Cartas/" + baraja[cont] + idioma +".jpg' alt='Carta' id='Carta'>";
        reproducir();
    }
}
function siguiente() {
    if (cont < 53 && Carta.style.display == "block") {
        cont++;
        Carta.innerHTML = "<img src='Cartas/" + baraja[cont] + idioma +".jpg' alt='Carta' id='Carta'>";
        reproducir();
        
    }
}
function reproducir() {
    let audio = new Audio('Audios/' + baraja[cont] + idioma + '.mp3');
    audio.play();
    reproducirbool=false;
    setTimeout(boolactive, 2000);
}
function boolactive(){
    reproducirbool=true;                 

}
function reiniciar() {
    Carta.style.display = "none";
    Comenzarbtn.style.display = "block";
    Mensaje.style.display = "block";
    Reiniciar.style.display = "none";
    idioma=null;
    Seleccion.style.display = "flex";
    SeleccionR.style.display = "flex";
    SiguienteBtn.style.display = "none";
    AnteriorBtn.style.display = "none";
    if (cont < 53) {
        

    }
}   
BanderaMx.addEventListener("click", () => {
    traducir("Es");
    RadioMx.checked = true;
})
BanderaVa.addEventListener("click", () => {
    traducir("Va");
    RadioVa.checked = true;
})
BanderaUs.addEventListener("click", () => {
    traducir("En");
    RadioUs.checked = true;
})
RadioMx.addEventListener("click", () => {
    traducir("Es");
})
BanderaUs.addEventListener("click", () => {
    traducir("En");
})
RadioVa.addEventListener("click", () => {
    traducir("Va");
})
function traducir(lan){
    if(lan=="Es"){
        idioma="Es";
        Titulo.innerText = "La Loteria";
        Comenzarbtn.innerText = "Comenzar";
        SiguienteBtn.innerText = "Siguiente Carta";
        AnteriorBtn.innerText = "Anterior Carta";
        Reiniciar.innerText = "Reiniciar";
        Mensaje.innerText= "Selecciona el idioma";


    }
    if(lan=="Va"){
        idioma="Va";
        Titulo.innerText = "Sortitio";
        Comenzarbtn.innerText = "Incipe";
        SiguienteBtn.innerText = "Altera Littera";
        AnteriorBtn.innerText = "Prior Littera";
        Reiniciar.innerText = "Rursus";
        Mensaje.innerText= "Linguam Eligere";

    }
    if(lan=="En"){
        idioma="En";
        Titulo.innerText = "The Lottery";
        Comenzarbtn.innerText = "Start";
        SiguienteBtn.innerText = "Next Card";
        AnteriorBtn.innerText = "Previous Card";
        Reiniciar.innerText = "Restart";
        Mensaje.innerText= "Select The Lenguage";
    }
    
}
