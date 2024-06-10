let resposta = document.getElementById("resposta")

function calcular(){
    let comp = Number(document.getElementById("comp").value)
    let altura = Number(document.getElementById("altura").value)
    let largura = Number(document.getElementById("largura").value)

    let volume = comp * altura * largura

    resposta.innerHTML = "O valor do Volume do Paralelepípedo é igual a: " + volume + "m3"
}