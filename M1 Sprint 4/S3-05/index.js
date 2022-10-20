/*Questao 1*/
function fibonacciNumbers(){
 let total = 0
 let anterior = 0
 let proximo = 1
 for(let i = 1; i < 11; i++){
    total = anterior + proximo
    anterior = proximo   
    proximo =  total

    console.log(total)
    console.log()
 }     
}

/*Questao 2*/

function grão_de_trigo(){
    let total= 0 
    let anterior = 0 
    let proximo = 1
    let grao = 0
    for(let i = 0; i < 64; i++){
        total = anterior + proximo
        grao += total
        anterior = total 
        proximo = anterior
    }
    console.log(grao)
}
grão_de_trigo()