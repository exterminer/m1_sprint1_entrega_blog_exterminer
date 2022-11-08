const agenda =[{
    agenda_do : '',
    contatos :[
        {
            nomeDoContato : 'ale',
            numero : 21979019445
        },
    ]
}]



function adicionardono(dono){
    agenda.agenda_do = dono
}

function adicionContato(contato_name,contato_numero){
    agenda.push({
        nomeDoContato : contato_name,
        numero : contato_numero
    })

}

adicionardono('Igor')
adicionContato('elson',21974147479)
console.log(agenda)