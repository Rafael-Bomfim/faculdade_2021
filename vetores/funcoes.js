function exe1() {

let vet = new Array(6)
let par = []
let impar = []

for (let i = 1; i <= 6; i++) {
    vet[i] = Number(prompt(`Informe o elemento ${i}`))
}

for (let i = 1; i <= 6; i++) {

    if (vet[i] % 2 == 0) {
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
    let vetor = new Array(7)
    let m2 = []
    let m3 = []
    let m23 = []

    for (let i = 1; i <= 7; i++) {
        vetor[i] = Number(prompt(`Informe o número ${i}`))
    }

    for (let i = 1; i <= 7; i++) {
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
    let vetCodigos = new Array(10)
    let vetEstoque = new Array(10)
    let cliente

    for (let i = 1; i <= 10; i++) {
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
    let vet = new Array(15)
    let cont = 0

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
    let vetL = new Array(15) //Lógica
    let vetLp = new Array(10) //Lógica de Programação

    for (let i = 1; i <= 15; i++) {
        vetL[i] = Number(prompt(`Informe o código de matrícula do aluno que faz Lógica:`))
    }
    for (let j = 1; j <= 10; j++) {
        vetLp[j] = Number(prompt(`Informe o código de matrícula do aluno que faz Lógica de Programação:`))
    }

    for (let i = 1; i <= 15; i++) {
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
    let contNeg = 0 //contagem dos números negativos
    let somaPos = 0 //soma dos números positivos

    for(let i = 1; i <= 10; i++) {
        vet[i] = Number(prompt(`Digite o ${i}º número:`))
    }
    for(let i = 1; i <= 10; i++) {
        if (vet[i] >= 0) {
            somaPos += vet[i]
        }
        if(vet[i] < 0) {
            contNeg++
        }
    }
    alert(`A quantidade de números negativos é ${contNeg} e a soma dos números positivos é ${somaPos}`)
}

function exe8() {
    let vetNomes = new Array(7)
    let vetMedia = new Array(7)
    let nomeMaiorMedia
    let maiorMedia = 0

    for(let i = 1; i <= 7; i++) {
        vetNomes[i] = prompt(`Digite o nome do ${i}º aluno:`)
        vetMedia[i] = Number(prompt(`Digite a média do ${i}º aluno:`))
    }
    for(let i = 1; i <= 7; i++) {
        if (vetMedia[i] > maiorMedia) {
        maiorMedia = Math.max(vetMedia[i])
        nomeMaiorMedia = vetNomes[i]
        }

        if (vetMedia[i] < 7) {
            alert(`O(a) aluno(a) ${vetNomes[i]} precisa tirar ${10 - vetMedia[i]} no exame! `)
        }
    }
    alert(`O(a) aluno(a) ${nomeMaiorMedia} obteve a maior média final com ${maiorMedia}!!`)
}

function exe9() {
    let vetProdutos = new Array(10)
    let vetCodigos = new Array(10)
    let vetPrecos = new Array(10)
    let novoPreco = []

    for(let i = 1; i <= 10; i++) {
        vetProdutos[i] = prompt(`Digite o nome do ${i}º produto:`)
        vetCodigos[i] = Number(prompt(`Digite o código do ${i}º produto:`))
        vetPrecos[i] = Number(prompt(`Digite o preço do ${i}º produto:`))
    }

    for(let i = 1; i <= 10; i++) {
        if (vetPrecos[i] > 1000) {
            novoPreco[i] = (vetPrecos[i] + (vetPrecos[i] * (10 / 100)))
        }
        else if (vetCodigos[i] % 2 == 0) {
            novoPreco[i] = (vetPrecos[i] + (vetPrecos[i] * (15 / 100)))
        }
        else if ((vetCodigos[i] % 2 == 0) && (vetPrecos[i] > 1000)) {
            novoPreco[i] = (vetPrecos[i] + (vetPrecos[i] * (20 / 100)))
        }
        else {
            novoPreco[i] = -1 //indica que não teve aumento
        }
    }

    for (let i = 1; i <= 10; i++) {
        if (novoPreco[i] != -1) {
        alert(`O produto ${vetProdutos[i]} com código ${vetCodigos[i]}, custava R$${vetPrecos[i]} e sofreu aumento para 
               R$${novoPreco[i]}.`)
        }
    }
}