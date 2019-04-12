// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML
let botoes = document.getElementsByClassName("botao-expandir-retrair")
for (i = 0; i < botoes.length; i++) {
    botaoAtual = botoes[i];
    botoes[i].addEventListener("click", function (botaoAtual) {
        var pai = botaoAtual.path[1]
        if (pai.classList == "expandido") {
            pai.classList = ""
            botaoAtual.path[0].innerHTML="+"
        } else {
            pai.classList = "expandido"
            botaoAtual.path[0].innerHTML="-"
        }
        console.log(botaoAtual.path[0].innerHTML)
    }, false);
}