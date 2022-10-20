/*Questao 1 */
function quadrados_dos_números(){
    for(let i = 15; i < 201; i++){
        console.log(i**2)
    }
}
/*Questao 2 */
function soma_dos_cem_primeiros(){
    let soma = 0 
    for( let i = 0; i < 101 ;i++){
        soma += i 
    }
    console.log(soma)
}
/*Questao 3 */

function valores_numéricos_divisíveis_por_4(){
    let soma = 0 
    for(let i = 0; i < 200; i++){
        if(i % 4 ==0){   
        }
    }
}
valores_numéricos_divisíveis_por_4()
/*Questao 4 */
function soma_de_todos_os_valores_lidos(){
    let soma = 0 
    for(let i = 0; i < 10; i++ ){
        valor = parseInt(prompt('Digite um novo valor?'))
        soma += valor  
    }
    alert(soma )
}

/*Questao 5*/
 function média_aritmética_dos_valores_pares(){
    let  soma = 0 
    let media = 0
    let cont =  0  
    for(let i = 50; i < 70; i++){
        if (i % 2 == 0){
              cont++
            soma += i
        }
    }
    media = soma/cont 
    console.log(soma)
    console.log(media)
 }
média_aritmética_dos_valores_pares()
/*Questao 6 */
function média_aritmética_dos_valores_impares(){
    let soma = 0 
    let cont = 0
    for(let i = 50; i < 70; i++){
        if(i % 2 != 0){
            cont++
            soma += i 
        }
    }
    console.log(soma)
    console.log(soma/cont)
}
média_aritmética_dos_valores_impares()
/*Questao 7 */
function  conversão_de_graus_Celsius_F(){
    for(let i = 10; i <100; i= i +10){
        f = (i*1,8) - 32
        console.log(`${i} graus celsius,representa ${i*9/5+32} graus f`)
    }
}
conversão_de_graus_Celsius_F()
