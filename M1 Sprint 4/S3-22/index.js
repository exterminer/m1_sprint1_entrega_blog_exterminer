/*Questao 1 */
const pessoa = {name:'igor', nasc:'19/03/1998', cpf:'14732797717', cidade:'Nova Iguaçu' }
/*Questao 2 */
const escola = {nome:'tamandare', cnpj:'1221212121', area_de_atuacao:'baixada fluminense ', cidade:'nova iguaçu', estado:'Rj' , logadouro:'Nilo pecanha', curso:'pre-militar'}
/*Questao 3 */

/*Questao 1 */
const figure = {  
    name: "Carl",   
    classes: ["Warrior"],  
    leader_trend: true,
    power: 6, 
    allied: true  
}

function  returnName(){
    return figure.name
}

/*Questao 2 */
function verifyClasses(){
    return figure.classes
}
/*Questao 3 */
function realpower(){
    if (figure.leader_trend == true){
        return figure.power ** 2
    }else{
        return figure.power
    }
}
/*Questao 4 */
function inserNewClass(classe){
    if( classe =="Warrior"||"Barbarious"||"Arch"||"Hunter"||"Survivor"){
         figure.classes.push(classe)
         return`clase ${figure.classes}, inserida com sucesso`
    }else{
        return 'Essa nao é uma classe valida'
    }
}
/*Questao 5 */

/*Questao 1 */