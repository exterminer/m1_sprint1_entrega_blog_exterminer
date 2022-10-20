/*Questao 1 */
function up100(){
    for(let i = 0;i < 101; i++)
    console.log(i)
}
up100()
/*Questao 2 */
 function tenInTenToAHundred(){
    for(let i =0;i <101 ; i = i + 10)
    console.log(i)
}
tenInTenToAHundred()
/*Questao 3 */
function oddUpToAHundred(){
    for(let i=0;i <101;i++)
        if(i%2 != 0)
            console.log(i)
}
oddUpToAHundred()
/*Questao 4 */
function evenUpToAHundred(){
    for(let i=0;i <101;i++)
        if(i % 2 == 0)
            console.log(i)

}
evenUpToAHundred()
/*Questao 5 */
function fromNegativeToPositive(){
    for(let i=-10;i < 0;i++)
        console.log(i)
}
fromNegativeToPositive()
/*Questao 6 */
 function inDescendingDirection(){
    for(let i=-10 ; i < 0;  i++){
        console.log(i)
    }
}
inDescendingDirection()
/*Questao 7 */
function inDescendingDirectionTenOutOfTen(){
    for(let i = 100; i > 0; i= i-10){
        console.log(i)
    }
}
inDescendingDirectionTenOutOfTen()
/*Questao 8 */
function  divisibleByTwoUpToTen(){
    for(let i = 0 ; i < 11;i++){
        if(i % 2 == 0 ){
            console.log(i)

        }
    }
}
divisibleByTwoUpToTen()
/*Questao 9 */
function toSquare(){
    for(let i = 0; i < 11;i++ ){
        console.log(i**2)
    }
}
toSquare()
/*Questao 10 */
function toExponent(){
    for(let i = 0; i < 11;i++ ){
        console.log(i**i)
    }
}
toExponent()
