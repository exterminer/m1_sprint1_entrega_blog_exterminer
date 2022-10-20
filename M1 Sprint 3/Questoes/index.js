/*Questao 1 S3-17*/
/*
let valor1 = 10;
let valor2 ='10'

let comparaçao_de_valores = valor1===valor2

console.log(valor1===valor2)
*/
/*Questao 2 S3-17*/
/*
let altura1 = 1.80
let altura2 = 1.75

let comparaçao_de_valores = altura1 >altura2

console.log(comparaçao_de_valores)
*/
/*Questao 3 S3-17*/
/*
 let valor1 = 10
 let valor2 = '10'

 let comparaçao_de_valores = valor1 !== valor2

 console.log(comparaçao_de_valores)
*/

/*Questao 1 S3-18 */
/*
let idade = 24

let comparaçao_de_valores = idade > 18 && idade < 25;
 if (comparaçao_de_valores == true)
    console.log('A idade esta entre 18 e 25')
 else
    console.log('A idade nao esta entre 25 e 18')
*/
/*Questao 2 S3-18 */
/*
let =  carro_nome= 'Chevrolet'
let =  carro_ano = 2019

let filtrar_carro = carro_nome == 'Chevrolet' && carro_ano == 2019

if (filtrar_carro == true)
    console.log('Carro encontrado')
else
    console.log('Carro nao encontrado')
*/

/*Questao 3 S3-18 */
/*
var botao_menu = false

let avaliar_click =  botao_menu == true

if (avaliar_click == false)
    console.log('Abir menu')
else
    console.log('fechar menu')
*/
/* Quetao 1 S3-19 */
/*
let usuario_autenticado = true

if(usuario_autenticado == true)
    console.log('Seja bem-vindo!')
else
    console.log('voce nao tem conta')

/* Quetao 2 S3-19 */
/*
let usuario ='Ana'

let autenticado = false

if(usuario =='Ana' && autenticado ==false)
    console.log(`Olá ${usuario} voce esta autenticado`)
else
    console.log('Voce nao esta autenticado')
/* Quetao 3 S3-19 */
/*
let produto = 'maca'
let quantiade = 6
let quantidade_faltando_promo = 5 - quantiade

if( produto == 'maca' && quantiade >=5)
    console.log('Você recebeu uma promoção, o valor do produto será R$ 5.00')
else
    console.log('Se você adicionar mais quantidade_restante_ de_maçãs, o valor sairá por R$ 5.00')

*/

/*Questao Desafio S3-20 */
/*
let nome =  prompt('Digite seu nome ')
let idade =  parseInt(prompt('Digite sua idade'))
let esta_acompanhado =  prompt('Voce esta acompanhado responda com s ou n ')

if (idade < 18)
    alert('Entrada nao permitida')
else if (esta_acompanhado =='s')
    alert(`Entrada permitida para ${nome}: Conceder desconto`)
else
    alert(`Entrada permitida para ${nome}: Valor integral.`)
*/
/*Desafio S3-26 */
/*

let nome = prompt('Digite o nome do aluno ')

let qtn_alg = nome.length

if(qtn_alg < 5 ){
    alert('nome invalido')
}

let nota_mat = parseFloat(prompt('Digite a nota de matematica'))
let nota_port = parseFloat(prompt('Digite a nota de portugues'))
let nota_info = parseFloat(prompt('Digite a nota de informatica'))
let nota_geo = parseFloat(prompt('Digite a nota de geografia'))
let nota_ing = parseFloat(prompt('Digite a nota de ingles'))
let nota_his = parseFloat(prompt('Digite a nota de historia'))
let nota_filo = parseFloat(prompt('Digite a nota de filosofia'))
let nota_socio = parseFloat(prompt('Digite a nota de sociologia'))
let nota_lit = parseFloat(prompt('Digite a nota de literatura'))
let nota_edc_fis = parseFloat(prompt('Digite a nota de educaçao fisica'))
let nota_presenca = (prompt('Digite a presença do aluno'))

let media = (nota_edc_fis+nota_filo+nota_geo+nota_his+nota_info+nota_ing+nota_lit+nota_mat+nota_port+nota_socio)/10

alert(`A media do aluno foi ${media}`)



if (media >= 8 && nota_presenca >= 6){
    alert(`A nota do aluno ${nome} é de ${media} e sua presença de ${nota_presenca}: Aluno aprovado`)
}else{
    alert(`A nota do aluno ${nome} é de ${media} e sua presença de ${nota_presenca}: Aluno aprovado`)
}

*/

