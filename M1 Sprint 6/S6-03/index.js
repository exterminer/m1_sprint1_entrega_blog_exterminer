let pessoa = {
    nome: "clara",
    anoNascimento: 1996,
    nomeDeUsuario: "CLARA_GOMES",
    temCarro: true,
    valeCombustivel: "R$ 0,00",
    distanciaDoTrabalho: "120km",
    endereco: []
  }


function qual_idade(){
    console.log(pessoa.anoNascimento)
}
(qual_idade())

function normalizaDado(obj){
    //Lógica
    let nome_trat = ''
    obj = pessoa.nome
    nome_trat = obj
    nome_trat = nome_trat[0].toUpperCase() + nome_trat
    return nome_trat
}

console.log(normalizaDado(pessoa))


function criandoListaDeUsuario(name_usu){
    //Lógica
    return pessoa.push({
    nomeDeUsuario : name_usu

})
    }
  
    console.log(criandoListaDeUsuario(pessoa,'alobolado'))