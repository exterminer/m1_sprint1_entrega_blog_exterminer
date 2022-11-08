let ganhador = {
    nome: 'Adamastor',
    nascimento: '16/09/1986',
    cpf: '123.321.789-98',
    estadoCivil: 'Casado'
}
let  lista_falsos= []

function checarganhador(name,dados){
    if(name == ganhador.nome && dados == ganhador.cpf){
        return ('Parabens voce é o ganhador')
    }else{
        console.log(guardar_todos(name,dados))
        return ('Voce nao e ganhador')
    }
}

function guardar_todos(nomefalso,dadofalso){
    lista_falsos.push({Nome:nomefalso,
    Cpf:dadofalso})
    return lista_falsos
}

console.log(checarganhador('igor','123.321.789-98'))
console.log(checarganhador('jao','123.321.789-98'))
let resp = '12.2121'
Number(resp)

console.log(resp)
console.log(typeof(resp))