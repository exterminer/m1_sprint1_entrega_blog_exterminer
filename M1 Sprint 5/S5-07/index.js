const barbearia = {
    cortes: [
      { id: 1, tipo: "Militar", valor: 20.0 },
      { id: 2, tipo: "Samurai", valor: 35.0 },
      { id: 3, tipo: "Pompadour", valor: 20 },
      { id: 4, tipo: "Moicano", valor: 0 },
      { id: 5, tipo: "Razor part", valor: 0 },
    ],
  
    barbas: [
      { id: 1, tipo: "Capitão Jack", valor: 20.0 },
      { id: 2, tipo: "Van Dyke", valor: 20.0 },
      { id: 3, tipo: "Barba Média", valor: 20.0 },
      { id: 4, tipo: "Barba Baixa", valor: 20.0 },
      { id: 5, tipo: "Barba Zero", valor: 15.0 },
    ],
    estaAberto: true,
  };
  
  function buscaCortePorId(id) {
     
        if(id <= barbearia.cortes.length && id > 0 ){
           let tipocorte = barbearia.cortes[id -1].tipo
           return tipocorte
        }else{
            return 'corte nao encontrado'
        }

  }
console.log(buscaCortePorId(1)) 

  function buscaBarbaPorId(id) {
    if(id <= barbearia.barbas.length && id > 0){
        let tipobarba= barbearia.barbas[id - 1].tipo
        return tipobarba
    }else{
        return 'Corte de barba nao encontrado'
    }
  }
console.log(buscaBarbaPorId(4))

  function verificaStatusBarbearia() {
    if(barbearia.estaAberto == true){
        return 'Estamos funcionando'
    }else{
        return 'Estamos fechados '
    }
  }
console.log(verificaStatusBarbearia())

  function retornaTodosCortes() {
    let todos_cortes = []
    
          for(i = 0 ; i < barbearia.cortes.length; i++){
               todos_cortes.push(barbearia.cortes[i].tipo)
            }
            return todos_cortes
  }
  console.log(retornaTodosCortes())
  function retornaTodasBarbas() {
    let = todas_barbas = []
  }
  
  function criaPedido(nomeCliente, corteId, barbaId) {
  }
  
  function atualizaPedido(lista, id, preco, tipo) {
  }
  
  function calculaTotal(pedido) {
  }
  
  function replace(s){
    //coding and coding....
    function replace(s){
      //coding and coding....
    let resp = ''
        for(let i=0;i<s.length;i++){
            resp = (s)
            if (s[i] == 'a'){
                     s = s.replace('a','!')
                }else if (s[i] == 'e'){
                    s = s.replace('e','!')
                }else if (s[i] == 'i'){
                    s = s.replace('i','!')
                }else if (s[i] == 'o'){
                    s = s.replace('o','!')
                }else if (s[i] == 'u'){
                    s = s.replace('u','!')
                }else if (s[i] == 'E'){
                    s = s.replace('E','!')
                }else if (s[i] == 'A'){
                    s = s.replace('A','!')
                }else if (s[i] == 'I'){
                    s = s.replace('I','!')
                }else if (s[i] == 'O'){
                    s = s.replace('O','!')
                }else if (s[i] == 'U'){
                    s = s.replace('U','!')
                }
      }
          
      return resp
    }
}
console.log(replace('aeiou'))