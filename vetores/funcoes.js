function exe1() {

let vet=[]
let par=[]
let impar=[]

for(let i=0; i<6; i++) {
    vet[i] = Number(prompt(`Informe o elemento ${i+1}`))
}

for(let i=0; i<6; i++) {

    if(vet[i] % 2 == 0) {
        par.push(vet[i])
    }
    else {
        impar.push(vet[i])
    }
}
    console.log(`A quantidade de números pares é: ${par.length} e são eles: ${par}`)
    console.log(`A quantidade de números ímpares é: ${impar.length} e são eles: ${impar}`)
}

function exe2() {
    let vetor = []
    let m2 = []
    let m3 = []
    let m23 = []

    for(let i=0; i<7; i++) {
        vetor[i] = Number(prompt(`Informe o número ${i+1}`))
    }

    for(let i=0; i<7; i++) {
        if (vetor[i] % 2 == 0) {
            m2.push(vetor[i])
        }
        if (vetor[i] % 3 == 0) {
            m3.push(vetor[i])
        }
        if ((vetor[i] % 2 == 0) && (vetor[i] % 3 == 0)) {
            m23.push(vetor[i])
        }
    }
    console.log(`A quantidade de números multiplos de 2 é: ${m2.length} e são eles: ${m2}`)
    console.log(`A quantidade de números multiplos de 3 é: ${m3.length} e são eles: ${m3}`)
    console.log(`A quantidade de números multiplos de 2 e 3 é: ${m23.length} e são eles: ${m23}`)
}

function exe3() {
    let vetCodigos = []
    let vetEstoque = []
    let cliente

    for(let i = 1; i <= 10; i++) {
        vetCodigos[i] = Number(prompt(`Informe o código do produto ${i}:`))
        vetEstoque[i] = Number(prompt(`Informe o estoque do produto ${i}:`))
    }

    cliente = Number(prompt(`Informe o código do cliente:`)) 
    do {
        let codigoCompra = Number(prompt(`Informe o código do produto para compra`))
        //verificar se o código existe
        let achou = false //quando não encontra o produto e true quando encontra
        for(let i = 1; i <= 10; i++) {
            if (codigoCompra == vetCodigos[i]) {
                achou = true
                //atualizar estoque
                let quantCompra = Number(prompt(`Informe a quantidade da compra:`))
                if (vetEstoque[i] - quantCompra >= 0) { //tem estoque suficiente
                    vetEstoque[i] = vetEstoque[i] - quantCompra
                }
                else {
                    alert(`Quantidade em estoque é insuficiente!!!`)
                }
            }
        }
        if (!achou) {
            alert(`Produto não encontrado para venda!!!`)
        }
        cliente = Number(prompt(`Informe o novo código do cliente. Digite 0 para encerrar:`))

    }
    while(cliente != 0)
    alert(`Estoque atualizado ${vetEstoque}`)
}

function exe4() {
    let cont = 0
    let vet = []

    for (let i = 1; i <= 15; i++) {
        vet[i] = Number(prompt(`Digite o ${i}º número:`))
    }

    for (let i = 1; i <= 15; i++) {
        if (vet[i] == 30) {
            alert(`Na posição ${i} existe o número 30!`)
            cont = cont + 1
        }
    }
    if (cont == 0) {
        alert(`Não foi digitado o número 30!!`)
    }
}

function exe5() {
    let ambos = [] //As duas matérias
    let vetL = [] //Lógica
    let vetLp = [] //Lógica de Programação

    for(let i = 1; i <= 15; i++) {
        vetL[i] = Number(prompt(`Informe o código de matrícula do aluno que faz Lógica:`))
    }
    for(let j = 1; j <= 10; j++) {
        vetLp[j] = Number(prompt(`Informe o código de matrícula do aluno que faz Lógica de Programação:`))
    }

    for(let i = 1; i <= 15; i++) {
        for(let j = 1; j <= 10; j++){
            if (vetL[i] == vetLp[j]) {
                ambos.push(vetL[i])
            }
        }
    }

    alert(`Alunos que fazem ambas as diciplinas ${ambos}`)
}

function exe6() {
    let vetNomes = new Array(10)
    let vetVendas = new Array(10)
    let vetComissao = new Array(10)

    for(let i = 1; i <= 10; i++) {
        vetNomes[i] = prompt(`Informe o nome do vendedor ${i}:`)
        vetVendas[i] = Number(prompt(`Informe o total de vendas do vendedor ${i}:`))
        vetComissao[i] = Number(prompt(`Informe o % de comissão do vendedor ${i}:`))
    }
    let totalVendas = 0
    let maior = 0
    let nomeMaior = ""
    let menor = 999999999999999
    let nomeMenor = ""
    for(let i = 1; i <= 10; i++) {
        let receber = (vetVendas[i] * vetComissao) / 100
        if (receber > maior) {
            maior = receber
            nomeMaior = vetNomes[i]
        }
        if (receber < menor) {
            menor = receber
            nomeMenor = vetNomes[i]
        }
        alert(`O vendedor ${vetNomes[i]} irá receber R$${receber}`)
        totalVendas = totalVendas + vetVendas[i]
    }
    alert(`O total de vendas foi de ${totalVendas}`)
    alert(`O maior valor a receber é R$${maior} do vendedor ${nomeMaior}`)
    alert(`O menor valor a receber é R$${menor} do vendedor ${nomeMenor}`)
}

function exe7() {
    let vet = new Array(10)
    let positivo = []
    let contNeg = 0 //contagem dos números negativos
    let somaPos = 0 //soma dos números positivos

    for(let i = 1; i <= 10; i++) {
        vet[i] = Number(prompt(`Digite o ${i}º número:`))
    }
    for(let i = 1; i <= 10; i++) {
        if(vet[i] < 0) {
            contNeg++
        }
        if (vet[i] >= 0) {
            positivo.push(vet[i])
            somaPos = somaPos + positivo[i]
        }
    }
    
    alert(`A quantidade de números negativos é ${contNeg} e a soma dos números positivos é ${somaPos}`)
}

function exe8() {

}

function exe9() {

}