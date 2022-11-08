let produto = [{
    nome: 'Notebook',
    valor: 3000.00,
    liquidacao: true,
    distribuidor: 'lojadakenzie.com.br'},
    {nome: 'Notebook',
    valor: 3000.00,
    liquidacao: true,
    distribuidor: 'lojadakenzie.com.br'},
    {
      nome: 'Notebook',
    valor: 3000.00,
    liquidacao: true,
    distribuidor: 'lojadakenzie.com.br'
    },
    {nome: 'Notebook',
    valor: 3000.00,
    liquidacao: true,
    distribuidor: 'lojadakenzie.com.br'
  },
  {
    nome: 'Notebook',
    valor: 3000.00,
    liquidacao: true,
    distribuidor: 'lojadakenzie.com.br'
  },
  {
    nome: 'Notebook',
    valor: 3000.00,
    liquidacao: true,
    distribuidor: 'lojadakenzie.com.br'
  },
  {
    nome: 'ipad',
    valor: 3000.00,
    liquidacao: true,
    distribuidor: 'lojadakenzie.com.br'
  },
  {
    nome: 'ipad',
    valor: 3000.00,
    liquidacao: true,
    distribuidor: 'lojadakenzie.com.br'
  },
  {
    nome: 'ipad',
    valor: 3000.00,
    liquidacao: true,
    distribuidor: 'lojadakenzie.com.br'
  },
  {
    nome: 'ipad',
    valor: 3000.00,
    liquidacao: true,
    distribuidor: 'lojadakenzie.com.br'
  },
  {
    nome: 'ipad',
    valor: 3000.00,
    liquidacao: true,
    distribuidor: 'lojadakenzie.com.br'
  }
]
let notebook = []

let ipad = []
function separarItens(){
  for(let i = 0; i < produto.length; i++){
    if(produto[i].nome =='Notebook'){
      notebook.push(produto[i])
    }else if(produto[i].nome == 'ipad'){
      ipad.push(produto[i])
    }
  }
}
separarItens()
console.log(notebook)
console.log(ipad)


for(let i = 0; i < notebook.length; i++){
  let li = document.createElement('li')
  document.querySelector('.list-notebook').appendChild(li)
  li.classList.add('card')
  let h2 = document.createElement('h2')
  h2.innerText = produto[i].nome
  li.appendChild(h2)
  let p = document.createElement('p')
  p.innerText = produto[i].valor
  li.appendChild(p)
  let span3 = document.createElement('span')
  span3.innerText = produto[i].distribuidor
  li.appendChild(span3)  
}
console.log(notebook[0].valor)
function trocarPreco(){
  for(let i = 0; i < notebook.length; i++){
       return notebook[i].valor * 0.30 
  }
}

document.querySelector('#trocar-preço').addEventListener('click',trocarPreco)