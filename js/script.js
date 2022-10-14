// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
const bottonePalidroma= document.getElementById("btn-palidroma")
bottonePalidroma.addEventListener("click",function controllo(){
let parolaInserita=document.getElementById("parola").value
let abSplit =parolaInserita.split("")
console.log(abSplit)
let abReverse=abSplit.reverse()
console.log(abReverse)
let contrario=abReverse.join("")
console.log(contrario)
cambio=contrario
if(cambio!=parolaInserita){
    console.log("parola non palindroma")
    document.getElementById("testo-1").innerHTML="parola non palindroma"
}else{
    console.log("Parola palindroma")
    document.getElementById("testo-1").innerHTML="parola palindroma"
}

})