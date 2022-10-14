// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
const bottonePari= document.getElementById("pari");
bottonePari.addEventListener("click",function pari(){
    const numero= parseInt(document.getElementById("numero").value)
    let somma=0
    if(numero<6 && numero>0){
        let nRandom = Math.floor((Math.random() * 5) + 1);
        console.log(nRandom)
        document.getElementById("random").innerHTML="hai generato il numero" + nRandom
        somma=nRandom+numero
        console.log(somma)
        if(somma % 2==0){
            console.log("hai vinto")
            document.getElementById("somma").innerHTML="la somma è "+" "+somma
            document.getElementById("controllo").innerHTML="hai vinto"
        }else{
            console.log("hai perso")
            document.getElementById("somma").innerHTML="la somma è "+" "+somma
            document.getElementById("controllo").innerHTML="hai perso"
        }
    }else{
        console.log("devi inserire un numero da 1 a 5")
    }
})
const bottoneDispari= document.getElementById("dispari");
bottoneDispari.addEventListener("click",function dispari(){
    const numero2= parseInt(document.getElementById("numero").value)
    let somma2=0
    if(numero2<6 && numero2>0){
        let nRandom = Math.floor((Math.random() * 5) + 1);
        console.log(nRandom)
        document.getElementById("random").innerHTML="hai generato il numero" + nRandom
        somma2=nRandom+numero2
        console.log(somma2)
        if(somma2 % 2==0){
            console.log("hai perso")
            document.getElementById("somma").innerHTML="la somma è "+" "+somma2
            document.getElementById("controllo").innerHTML="hai perso"
        }else{
            console.log("hai vinto")
            document.getElementById("somma").innerHTML="la somma è "+" "+somma2
            document.getElementById("controllo").innerHTML="hai vinto"
        }
    }else{
        console.log("devi inserire un numero da 1 a 5")
    }
})
