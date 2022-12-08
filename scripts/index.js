let conta = 0
let gorjeta = 0
let numeroDePesoas = 0
let botao_Gorjeta_Atual = 0

function receberConta() {
    conta = Number(document.querySelector("#bill-input").value)
    validarDados()
}

function receberPorcentagem(numero) {
    if (botao_Gorjeta_Atual !== 0) {
        botao_Gorjeta_Atual.classList.remove("button-selected")
    }

    if (numero === 0){
        gorjeta = Number(document.querySelector("#tip-input").value)
        validarDados()
        return
    }
    gorjeta = numero

    botao_Gorjeta_Atual=document.querySelector(`input[value="${numero}%"]`)
    botao_Gorjeta_Atual.classList.add("button-selected")
    document.querySelector("#tip-input").value = ""

    validarDados()
}

function receberNumeroDePessoas() {
    numeroDePesoas = Number(document.querySelector("#people-input").value)
    validarDados()
}

function validarDados(){
    if (conta !== 0 && gorjeta !==0 && numeroDePesoas !== 0) {
        calcularTotais()
        return
    }

    return
}

function calcularTotais(){
    const gorjetaPorPessoa = (conta * (gorjeta/100 )) / numeroDePesoas
    const paragrafoGorjeta = document.querySelector("#tip-amount__result")
    paragrafoGorjeta.innerText = `$${gorjetaPorPessoa.toFixed(2)}`

    const totalPorPessoa = (conta / numeroDePesoas) + gorjetaPorPessoa

    const paragrafoTotal = document.querySelector("#total__result")
    paragrafoTotal.innerText = `$${totalPorPessoa.toFixed(2)}`
}

function reset(){
    conta = 0
    document.querySelector("#bill-input").value = ""

    gorjeta = 0
    if (botao_Gorjeta_Atual !== 0) {
        botao_Gorjeta_Atual.classList.remove("button-selected")
    }
    document.querySelector("#tip-input").value = ""

    botao_Gorjeta_Atual = 0

    numeroDePesoas = 0
    document.querySelector("#people-input").value = ""

    const paragrafoGorjeta = document.querySelector("#tip-amount__result")
    paragrafoGorjeta.innerText = `$0.00 `

    const paragrafoTotal = document.querySelector("#total__result")
    paragrafoTotal.innerText = `$0.00`

}