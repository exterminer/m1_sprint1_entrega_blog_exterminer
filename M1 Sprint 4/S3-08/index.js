/*Questao 1 */

function verticalText(text){
    for(let i = 0; i < text.length; i++)
    console.log(text[i])
}
verticalText('frontend')
/*Questao 2 */
function incrementText(text){
     let cont = ''
    for(let i = 0; i < text.length; i++){
        cont += text[i]
        console.log(cont)
    }
}
incrementText('Backend')
/*Questao 3 */
function  incrementTextBackwards(text){
    let cont = ''
    for(let i = text.length -1 ; i >=0; i--){
        cont = text[i] + cont
        console.log(cont)
    }
}
incrementTextBackwards('FullStack')

/*Questao 4 */


function decrementText(text){
    let cont = ''
    for (let i = text.length - 1; i >= 0; i--){
        cont = text[i] +cont
        console.log(cont) 

    }
 
}
decrementText('FullStack')