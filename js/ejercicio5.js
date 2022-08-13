const iniciar = document.getElementById("iniciar");
const pausar = document.getElementById("pausar");
const reset = document.getElementById("reset");
const cronometro = document.getElementById("cronometro");

let horas = 0;
let minutos = 0;
let segundos = 0;

let intervalo;

const iniciarCron = () => {

intervalo = setInterval(() => {
segundos++; //aumento segundos

if(segundos == 60){ //agrego un minuto
    minutos++
    segundos = 0;
}
if(minutos == 60){ //agrego un minuto
    horas++
    minutos = 0;
}

cronometro.innerHTML = `
<p>${horas}:${minutos}:${segundos}</p>
`
iniciar.disabled = true
}
,1000)

}



const pausarCron = () => {
    clearInterval(intervalo)
    iniciar.disabled = false
}

const resetCron = () => {
    clearInterval(intervalo);
    horas = "00"
    minutos = "00"
    segundos = "00"
    cronometro.innerHTML = `
<p>${horas}:${minutos}:${segundos}</p> 
`
    iniciar.disabled = false
}