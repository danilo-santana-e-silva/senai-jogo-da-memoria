
const deck = [
    {
        "id": 1,
        "name": "1.png",
        "src": "./images/deck/1.png"
    },
    {
        "id": 2,
        "name": "2.png",
        "src": "./images/deck/2.png"
    },
    {
        "id": 3,
        "name": "2.png",
        "src": "./images/deck/2.png"
    }
]

const tabuleiro = document.getElementById("jogo-da-memoria")
var card = null
var img = null

deck.forEach(element => {
    card = document.createElement("div")
    card.setAttribute("class", "card")
    card.setAttribute("id", element.id)
    card.setAttribute("onClick", "minha_funcao()")

    img = document.createElement("img")
    img.setAttribute("src", "#")
    img.setAttribute("alt", element.name)

    card.appendChild(img)
    tabuleiro.appendChild(card)
});

var cartas_escondidas = 0
function minha_funcao() {
    var card = document.getElementById(event.currentTarget.id)
    card.style.visibility = "hidden"
    cartas_escondidas += 1;
}

/*
function reset() {
    tabuleiro.childNodes.forEach(card => function(){
        console.log(`card id: ${card.id}`)
        var card = document.getElementById(card.id)
        card.style.visibility = "block"
    })
    console.log(`Tabuleiro Child Nodes: ${tabuleiro.childNodes[0].id}`)
}
*/
