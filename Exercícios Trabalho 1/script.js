function ex1() {
    var n1 = document.getElementById("n1").value
    var n2 = document.getElementById("n2").value
    var resposta = document.getElementById("resposta")
    var calculo = n1 - n2
    resposta.innerHTML = "A subtração dos valores é " + calculo
}

function ex2() {
    var n1 = document.getElementById("n1").value
    var n2 = document.getElementById("n2").value
    var n3 = document.getElementById("n3").value
    var resposta = document.getElementById("resposta")
    var calculo = n1 * n2
    var c2 = calculo * n3
    resposta.innerHTML = (`O resultado da multiplicação dos valores é ${c2}`)
}

function ex5() {
    var n1 = document.getElementById("n1").value
    var resposta = document.getElementById("resposta")
    var calculo = n1 - (n1 * 0.1)
    resposta.innerHTML = (`O valor final com desconto é ${calculo}`)
}

function ex8() {
    var n1 = document.getElementById("n1").value
    var pesog = n1 * 1000
    resposta.innerHTML = (n1 + "kilos em gramas, equivale à " + pesog)
}

function ex15() {
    var sal = Number(document.getElementById("sal").value)
    var pconta =  Number(document.getElementById("pconta").value)
    var sconta =  Number(document.getElementById("sconta").value)
    var c1 = pconta + (pconta * 0.02)
    var c2 = sconta + (sconta * 0.02)
    var  calc =   sal - (c1 + c2)
    resposta.innerHTML = (`O valor restante do salário foi de R$${calc} `)
}

function ex19() {
    var l1 = document.getElementById("l1").value
    var l2 = document.getElementById("l2").value
    var cal = 18 * (l1 * l2)
    resposta.innerHTML = (`A potência para uma iluminação correta é ${cal}W`)
}

function ex20() {
    var angulo= document.getElementById("l1").value
    var distancia = document.getElementById("l2").value
    var cal = (distancia/ Math.cos(angulo)).toFixed(2)
    resposta.innerHTML = (`A medida da escada para alcançar a parede  é ${cal} metros`)
}

function ex22() {
    var l1 = document.getElementById("l1").value
    var l = (l1 * (l1 -3) /2)
    resposta.innerHTML = (`O total de diagonais é ${l}`)
}