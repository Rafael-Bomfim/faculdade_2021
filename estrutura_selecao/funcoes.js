function exe1() {
    //recuperar entrada de dados
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota3").value)
    let nota4 = Number(document.getElementById("nota4").value)

    //calcular média
    let media = (nota1 + nota2 + nota3 + nota4) / 4

    if (media >= 7){
        document.getElementById("resultado").innerHTML = `A média é ${media} está aprovado`
    }
    else {
        document.getElementById("resultado").innerHTML = `A média é ${media} está reprovado`
    }
}

function exe2() {
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)

    let media = (nota1 + nota2) / 2
    let resultado

    if ((media >=0) && (media < 3)){
        resultado = `Aluno reprovado com média ${media}`
    }
    else if ((media >= 3) && (medai < 7)) {
        resultado = `Aluno em exame com média ${media}`
    }
    else if ((media >= 7) && (medai <= 10)) {
        resultado = `Aluno aprovado com média ${media}`
    }
    else {
        resultado = `Notas informadas são inválidas`
    }
    //mostra reultado
    document.getElementById("resultado").innerHTML = resultado
}

function exe3() {
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)

    let resultado

    if (num1 < num2){
        resultado = `O menor número é ${num1}`
    }
    else if (num1 > num2) {
        resultado = `O menor número é ${num2}`
    }
    else {
        resultado = `Os números são iguais!`
    }
    document.getElementById("resultado").innerHTML = resultado
}

function exe4() {
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    let num3 = Number(document.getElementById("num3").value)

    let resultado

    if ((num1 > num2) && (num1 > num3)) {
        resultado = `O maior número é ${num1}`
    }
    else if ((num2 > num1) && (num2 > num3)){
        resultado = `O maior número é ${num2}`
    }
    else if ((num3 > num1) && (num3 > num2)){
        resultado = `O maior número é ${num3}`
    }
    else {
        resultado = `Os números são iguais`
    }
    document.getElementById("resultado").innerHTML = resultado
}

function exe5() {
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    let opc  = Number(document.getElementById("opc" ).value)
    
    let media 
    let dif //diferença
    let prod //produto
    let div //divisão
    let resultado

    if (opc === 1) {
        media = ((num1 + num2) /2)
        resultado = `A média dos números digitados é ${media}`
    }
    else if (opc === 2) {
        if (num1 > num2) {
            dif = num1 - num2
            resultado = `A diferença dos números digitados é ${dif}`
        }
        else {
            dif = num2 - num1
            resultado = `A diferença dos números digitados é ${dif}`
        }
    } 
    else if (opc === 3) {
        prod = num1 * num2
        resultado = `O produto dos números digitados é ${prod}`
    }
    else if (opc === 4) {
        if (num2 != 0) {
            div = num1 / num2
            resultado = `A divisão dos números digitados é ${div}`
        }
        else {
            resultado = `Não é possível dividir um número por zero!!`
        }
    }
    else {
        resultado = `Opção inválida!!!`
    }
    document.getElementById("resultado").innerHTML = resultado
}