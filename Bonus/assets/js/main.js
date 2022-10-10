/*Scrivi un programma che stampi in console i numeri da 1 a 100

ma che per i multipli di 3 stampi “Fizz” al posto del numero

e per i multipli di 5 stampi “Buzz”.

Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.*/


/*for (let i = 1; i < 101; i++){


     if (i % 15 === 0) {
        console.log("fizzbuzz")
     }else if (i % 3 === 0){
        console.log("fizz")
    } else if (i % 5 === 0){
        console.log("buzz")
    }  else {
        console.log(i)
    }
}*/
           
//BONUS 1:
//Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

const listEl = document.querySelector("ul")


  

 for (let i = 1; i < 101; i++){
     
   if (i % 15 === 0) {
    const li =document.createElement("li");
    li.append("fizzbuzz");
    listEl.append(li);
    console.log("fizzbuzz")
        
     }else if (i % 3 === 0){
        const li =document.createElement("li");
        li.append("fizz");
        listEl.append(li);
        console.log("fizz")
    } else if (i % 5 === 0){
        const li =document.createElement("li");
        li.append("buzz");
        listEl.append(li);
        console.log("buzz")
    }  else {
        const li =document.createElement("li");
        li.append(`${i}`);
        listEl.append(li);
        console.log(i)
    }
 }