let secoesMercado = []

let hortifruti = []
let açougue = []
let padaria = ['pao','pao doce']
let AdegaEBebidas = []
let laticíniosEFrios = []

function adicionarSecaoAoMercado(secao){
    secoesMercado.push(padaria)
    console.log(secoesMercado)
    return secoesMercado
}

function adicionarItemASecao(novoItem, secao){
    secao[0] = novoItem

    return secao;
}

function retornarItemDaSecao(nomeItem, secao){
   posicao = secao.splice(nomeItem)

   itemProcurado = secao[posicao]

   return itemProcurado;
}

function retornaUtlimoItemDaSecao(secao){
    ultimoItem = secao[secao.length]

    return ultimoItem
}

function consultaSecoesMercado(secoesMercado){
    for(let i = 0; i <= secoesMercado.length; i+1){
        return secoesMercado[i]
    }
}

function somaItens(totalA, totalB){
    if(totalB != 0 && totalB != 0){

        return totalA + totalB
    }
}

function baterPonto(nome, numeroFicha){
    const funcionarios = ["Sônia", "Cage", "Alex", "Liu Ken"]
    if(nome == funcionarios[numeroFicha]){
        return "Turno processado"
    }else{
        return "Funcionario não cadastrado"
    }
}

function loginSistema(nomeUsuario, senhaUsuario){
    
    const listaUsuarios = ["luffy123", "acer321", "nami"]

    
        if(nomeUsuario == luffy123){
            if(senhaUsuario == "326541"){
                return "Acesso liberado"
            }
        }if(nomeUsuario == acer321){
            if(senhaUsuario == "741258"){
                return "Acesso liberado"
            }
        }if(nomeUsuario == nami){
            if(senhaUsuario == "963258"){
                return "Acesso liberado"
            }
        }

     return listaUsuarios
}