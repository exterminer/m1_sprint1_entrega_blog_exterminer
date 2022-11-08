
 let alimentacao = ['Pão de form32322', 'Pão de Sal3232', 'Salsicha3232', 'Água3232', 'Molho de Tomat33232e']
 let nomes =  [
    'alimentacao','higiene', 'qualquer ', 'qualquer2'

]

 
 let caixa_de_itens = [
     ['Pão de forma', 'Pão de Sal', 'Salsicha', 'Água', 'Molho de Tomate'],
     [ 'Sabao', 'papel', 'pasta', 'fio', 'blabla'],
     ['lala1', 'lala2', 'lala3', 'lala4'],
     ['blabla1', 'blabla2', 'blabla3', 'blabla4','blalala']
    ]  

    if (caixa_de_itens.length == 4){
        console.log('Temos as 4 seçoes')
    }else{
        console.log('Tem algo errado ')
    }

for(let i = 0; i < caixa_de_itens.length; i++){
    for(let j= 0; j < caixa_de_itens[i].length;j++){
        
    }
    if(caixa_de_itens[i].length > 5){
        console.log('Tem itens demais, não precisamos de tantos.')
    }else if (caixa_de_itens[i].length < 5){
        console.log('Precisamos de mais itens desta seção.' )
    }else{
        console.log(`temos tudo que precisamos na categoria ${nomes[i]}`)
    }

}

