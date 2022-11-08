/* Questao 1 */
/*do escolha = parseInt(prompt('Escolha um numero entre 1 e 10'))

while (escolha > 0 && escolha < 10){
    
} 

/* Questao 2 */
/*
usuario = prompt('Digite seu nome de usuario')
senha = (prompt('Digite sua senha'))

while(usuario==senha){
    alert('Usuario e senha sao iguais')
    usuario = prompt('Digite seu nome de usuario')
    senha = parseInt(prompt('Digite sua senha'))
}
    alert('Cadastrado')

/* Questao 3*/
/*
valor = parseInt(prompt('Digite um valor entre 1 e 10'))
total = 0 
while(valor > 0 && valor < 10){
    total += valor 
    valor = parseInt(prompt('Digite um valor entre 1 e 10'))
}
alert(`O valor total e ${total}`)
/* Questao 4 */
voto = parseInt(prompt('Digite 13:Lula / Digite 22:Bolsonaro / Digite 31:Ciro /  0 para parar'))
let lula = 0
let bolsonaro = 0
let ciro = 0 
while( voto != 0){
    if(voto == 13 ){
        lula += 1
    }else if(voto == 22){
        bolsonaro += 1
    }else if (voto == 31){
        ciro += 1
    }
    voto = parseInt(prompt('Digite 13:Lula / Digite 22:Bolsonaro / Digite 31:Ciro / e 0 para parar')) 
}
alert(`O lula teve ${lula},Bolsonaro teve ${bolsonaro} e o ciro teve ${ciro}`)
/* Questao 5 */