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
    else if ((media >= 3) && (media < 7)) {
        resultado = `Aluno em exame com média ${media}`
    }
    else if ((media >= 7) && (media <= 10)) {
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
    
    if ((num1 === num2) && (num2 === num3)) {
        resultado = `Todos os números são iguais`
    }
    else if ((num1 > num2) && (num1 > num3)) {
        resultado = `O maior número é ${num1}`
    }
    else if (num2 > num3) {
        resultado = `O maior número é ${num2}`
    }
    else {
        resultado = `O maior número é ${num3}`
    }
    document.getElementById("resultado").innerHTML = resultado
}

function exe5() {
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    let opc  = Number(document.getElementById("opc" ).value)

    let resultado
    
    switch(opc) {
        case 1: resultado = (num1 + num2) / 2
            break
        case 2:  if (num1 >= num2) {
                    resultado = num1 - num2
                }
                else {
                    resultado = num2 - num1
                }
            break
        case 3: resultado = num1 * num2
            break
        case 4: if (num2 != 0) {
                    resultado = num1 / num2
                }
                else {
                    resultado = `Não é possível dividir um número por zero!!`
                }
            break
        default: resultado = "Opção inválida"
    }
    document.getElementById("resultado").innerHTML = resultado
}

function exe6() {
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    let opc = String(document.getElementById("opc").value)

    let resultado
    let raiz_qua1 //quadrada
    let raiz_qua2
    let raiz_cub1 //cúbica
    let raiz_cub2

    switch(opc) {
        case 'a': resultado = num1 ** num2
            break
        case 'b': raiz_qua1 = Math.sqrt(num1)
                  raiz_qua2 = Math.sqrt(num2)
                  resultado = `${raiz_qua1} e ${raiz_qua2}`
            break
        case 'c': raiz_cub1 = Math.cbrt(num1)
                  raiz_cub2 = Math.cbrt(num2)
                  resultado = `${raiz_cub1} e ${raiz_cub2}`
            break
        default: resultado = "Opção inválida!"
    }
        document.getElementById("resultado").innerHTML = resultado
}

function exe7() {
    let sal = Number(document.getElementById("sal").value)
    
    let resultado
    let aumento

    if (sal < 500) {
        aumento = (sal + (sal / 0.3))
        resultado = `O salário reajustado é R$${aumento}`
    }
    else {
        resultado = `Este funcionário não possui reajuste!!!`
    }
    document.getElementById("resultado").innerHTML = resultado
}

function exe8() {
    let sal = Number(document.getElementById("sal").value)
    let aumento
    let resultado

    if (sal <= 300) {
        aumento = (sal + (sal * (35/100)))
        resultado = `O salário reajustado é R$${aumento}`
    }
    else if ( sal > 300) {
        aumento = (sal + (sal * (15/100)))
        resultado = `O salário reajustado é R$${aumento}`
    }
    document.getElementById("resultado").innerHTML = resultado
}

function exe9() {
    let saldo = Number(document.getElementById("saldo").value)
    let credito
    let resultado

    if (saldo <= 200) {
        credito = (saldo * (10/100))
        resultado = `O saldo médio é R$${saldo} e o valor do crédito é R$${credito}`
    }
    else if ((saldo <= 300) && (saldo > 200)) {
        credito = (saldo * (20/100))
        resultado = `O saldo médio é R$${saldo} e o valor do crédito é R$${credito}`
    }
    else if ((saldo <= 400) && (saldo > 300)) {
        credito = (saldo * (25/100))
        resultado = `O saldo médio é R$${saldo} e o valor do crédito é R$${credito}`
    }
    else if (saldo > 400) {
        credito = (saldo * (30/100))
        resultado = `O saldo médio é R$${saldo} e o valor do crédito é R$${credito}`
    }
    document.getElementById("resultado").innerHTML = resultado
}

function exe10() {
    let cust_fab = Number(document.getElementById("cust_fab").value)
    let porc_dist //porcentagem do distribuidor 
    let porc_imp //porcentagem dos impostos
    let pre_final //preço final
    let resultado

    if (cust_fab <= 12000) {
        porc_dist = cust_fab * 0.05
        porc_imp = 0
        pre_final = cust_fab + porc_imp + porc_dist
        resultado = `O preço final é R$${pre_final}`
    }
    else if ((cust_fab > 12000) && (cust_fab <= 25000)) {
        porc_dist = cust_fab * 0.1
        porc_imp = 0.15
        pre_final = cust_fab + porc_imp + porc_dist
        resultado = `O preço final é R$${pre_final}`
    }
    else if (cust_fab > 25000) {
        porc_dist = cust_fab * 0.15
        porc_imp = 0.2
        pre_final = cust_fab + porc_imp + porc_dist
        resultado = `O preço final é R$${pre_final}`
    }

    document.getElementById("resultado").innerHTML = resultado
}