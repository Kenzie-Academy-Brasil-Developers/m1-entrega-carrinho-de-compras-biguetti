//Lista de produtos

const productsCart = [
    {
        id: 1,
        name: "pão",
        price: 1.20
    },
    {
        id: 2,
        name: "margarina",
        price: 1.50
    },
    {
        id: 3,
        name: "bolacha",
        price: 3.50
    },
    {
        id: 4,
        name: "queijo",
        price: 5.50
    },
]

//Pega elemento pelo ID

let body = document.getElementById('body')

//Cria elemento Main

let main = document.createElement("main")

//insere Main na Body

body.appendChild(main) 

//Função que cria lista e insere os produtos nela, e também faz a soma dos produtos

function listProduts(list) {
    let soma = 0
    let ul = document.createElement('ul');
    ul.setAttribute('id','proList');
    for (let i = 0; i < list.length; i++) {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode("Produto "+list[i]['name']+" valor : "+ list[i]['price']))
        main.appendChild(li) 
        soma += list[i]['price']
    }
    return soma
}

//Chama função listProduts e recebe o valor da soma

valor = listProduts(productsCart)

//Cria elemento Section 

let section = document.createElement("section")

//Cria elemento div 

let div = document.createElement('div');

//insere texto mais o valor na div 

div.appendChild(document.createTextNode("Valor Total: "+ valor))

//insere div na section 

section.appendChild(div) 

//Cria elemento buttom

let button = document.createElement("BUTTON");

//Adiciona texto FINALIZAR no buttom

button.appendChild(document.createTextNode('FINALIZAR'))

//insere buttom na section

section.appendChild(button)

//insere section na main 

main.appendChild(section)
