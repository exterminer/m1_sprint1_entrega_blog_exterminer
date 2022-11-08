function  gerarNumeroAleatorio(){
     valor = Math.floor(Math.random()* 20 )
     return valor 
     console.log(valor)
}


function verificarPalpite(){
    let  palpite = 0
    let valor = gerarNumeroAleatorio()
    console.log(valor) 
    let tentativa = 1
    while(palpite != valor){
        palpite = parseInt(prompt('Digite um valor entre 1 e 20'))
        if(palpite == valor){
           return alert(`voce acertou na tentativa ${tentativa}`)
        
        }
        alert('Valor incorreto tente novamente')
        tentativa ++
        
    }

}
verificarPalpite()