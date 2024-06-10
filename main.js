resposta = document.getElementById("resposta")

function calcular(){
    comp = Number(document.getElementById("comp").value)
    altura = Number(document.getElementById("altura").value)
    largura = Number(document.getElementById("largura").value)

    volume = comp * altura * largura

    resposta.innerHTML = "O valor do Volume do Paralelepípedo é igual a: " + volume + "m3"
}