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
    let vetor = new Array (10)
    let cliente

    for (let i = 1; i <= 10; i++) {
        let objeto = {
        codigo: Number(prompt(`Informe o código do produto ${i}:`)),
        estoque: Number(prompt(`Informe o estoque do produto ${i}:`))
        }
        vetor[i] = objeto
    }
    cliente = Number(prompt(`Informe o código do cliente:`)) 
    do {
        let codigoCompra = Number(prompt(`Informe o código do produto para compra`))
        //verificar se o código existe
        let achou = false //quando não encontra o produto e true quando encontra
        for (let i = 1; i <= 10; i++) {
            if (codigoCompra == vetor[i].codigo) {
                achou = true
                //atualizar estoque
                let quantCompra = Number(prompt(`Informe a quantidade da compra:`))
                if (vetor[i].estoque - quantCompra >= 0) { //tem estoque suficiente
                    vetor[i].estoque = vetor[i].estoque - quantCompra
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
    alert(`Estoque atualizado ${vetor}`)
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
    let vetL = new Array(15) //Lógica
    let vetLp = new Array(10) //Lógica de Programação

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
    let vetor = new Array(10)
    let totalVendas = 0
    let maior = 0
    let nomeMaior = ""
    let menor = 999999999999999
    let nomeMenor = ""

    for(let i = 1; i <= 10; i++) {
        let objeto = {
        nome: prompt(`Informe o nome do vendedor ${i}:`),
        vendas: Number(prompt(`Informe o total de vendas do vendedor ${i}:`)),
        comissao: Number(prompt(`Informe o % de comissão do vendedor ${i}:`))
        }
        vetor[i] = objeto
    }
    
    for(let i = 1; i <= 10; i++) {
        let receber = (vetor[i].vendas * vetor[i].comissao) / 100
        if (receber > maior) {
            maior = receber
            nomeMaior = vetor[i].nome
        }
        if (receber < menor) {
            menor = receber
            nomeMenor = vetor[i].nome
        }
        alert(`O vendedor ${vetor[i].nome} irá receber R$${receber}`)
        totalVendas = totalVendas + vetor[i].vendas
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
    let vetor = new Array(7)
    let nomeMaiorMedia
    let maiorMedia = 0

    for(let i = 1; i <= 7; i++) {
        let objeto = {
        nome: prompt(`Digite o nome do ${i}º aluno:`),
        media: Number(prompt(`Digite a média do ${i}º aluno:`))
        }
        vetor[i] = objeto
    }
    for(let i = 1; i <= 7; i++) {
        if (vetor[i].media > maiorMedia) {
        maiorMedia = Math.max(vetor[i].media)
        nomeMaiorMedia = vetor[i].nome
        }

        if (vetor[i].media < 7) {
            alert(`O(a) aluno(a) ${vetor[i].nome} precisa tirar ${10 - vetor[i].media} no exame! `)
        }
    }
    alert(`O(a) aluno(a) ${nomeMaiorMedia} obteve a maior média final com ${maiorMedia}!!`)
}

function exe9() {
    let vetor = new Array(10)

    for(let i = 1; i <= 10; i++) {
        let objeto = {
        nome: prompt(`Digite o nome do ${i}º produto:`),
        codigo: Number(prompt(`Digite o código do ${i}º produto:`)),
        preco: Number(prompt(`Digite o preço do ${i}º produto:`))
        }
        vetor[i] = objeto
    }
    
    for(let i = 1; i <= 10; i++) {
        if (vetor[i].preco > 1000) {
            vetor[i].novo = (vetor[i].preco + (vetor[i].preco * (10 / 100)))
        }
        else if (vetor[i].codigo % 2 == 0) {
            vetor[i].novo = (vetor[i].preco + (vetor[i].preco * (15 / 100)))
        }
        else if ((vetor[i].codigo % 2 == 0) && (vetor[i].preco > 1000)) {
            vetor[i].novo = (vetor[i].preco + (vetor[i].preco * (20 / 100)))
        }
        else {
            vetor[i].novo = -1 //indica que não teve aumento
        }
    }

    for(let i = 1; i <= 10; i++) {
        if (vetor[i].novo != -1) {
        alert(`O produto ${vetor[i].nome} com código ${vetor[i].codigo}, custava R$${vetor[i].preco} e sofreu aumento para 
               R$${vetor[i].novo}.`)
        }
    }
}

function exe01() {
    let vetVendedores = []
    let vetVendas = []
    let opc

    do {
        opc = Number(prompt(`
        Digite 1. Cadastrar vendedor.
        Digite 2. Cadastrar venda.
        Digite 3. Consultar as vendas de um funcionário em determinado mês.
        Digite 4. Consultar o total de vendas de determinado vendedor.
        Digite 5. Mostrar o número do vendedor que mais vendeu em determinado mês.
        Digite 6. Mostrar o número do mês com mais vendas.
        Digite 7. Finalizar o programa.`))

       switch(opc) {
           case 1: 
           let objeto = {
               codigo: prompt(`Informe o código do vendedor:`),
               nome: prompt(`Informe o nome do vendedor`)
            }
            let achou = false //se não encontra recebe false, se encontrar recebe true
            for(let i = 1; i <= vetVendedores.length; i++) { //percorrer o vetor para encontrar código já existente
                if (vetVendedores[i].codigo == objeto.codigo) { //vetVendedores.length retorna a quantidade de elementos do vetor
                    achou = true //encontrou vendedor com o mesmo código
                }
            }
            if (achou) {
                alert(`Já existe um vendedor com este código!!`)
            }
            else {
                vetVendedores.push(objeto) //adiciona o vendedor no vetor
                alert(`Vendedor cadastrado com sucesso!!`)
            }
               break
            case 2:
                let objeto2 = {
                    vendedor: prompt(`Informe o código do vendedor:`),
                    mes: Number(prompt(`Informe o mês da venda:`)),
                    valor: Number(prompt(`Informe o valor da venda:`))
                }
                let achou22 = false
                for (let i = 1; i <= vetVendedores.length; i++) {
                    if (vetVendedores[i].codigo == objeto2.vendedor) { //verifica se o vendedor existe
                        achou22 = true
                    }
                }
                if (!achou22) {
                    alert(`Vendedor não existe!!!`)
                }
                else {
                    let achou2 = false
                    for(let i = 1; i <= vetVendas.length; i++) {
                        if ((vetVendas[i].vendedor == objeto2.vendedor) && (vetVendas[i].mes == objeto2.mes)) {
                            achou2 = true
                        }
                    }
                    if (achou2) {
                        alert(`Já existe uma venda deste vendedor neste mês!!!`)
                    }
                    else {
                        vetVendas.push(objeto2)
                        alert(`Venda cadastrada com sucesso!!!`)
                    }
                }
                break
            case 3:
                let codigoInteresse = prompt(`Informe o código do vendedor:`)
                let mesInteresse = Number(prompt(`Informe o mês de interesse:`))
                let achou3 = false
                for (let i = 1; i <= vetVendas.length; i++) {
                    if ((vetVendas[i].vendedor == codigoInteresse) && (vetVendas[i].mes == mesInteresse)) {
                        alert(`O valor das vendas no mês ${mesInteresse} do funcionário ${codigoInteresse} é de R$${vetVendas[i].valor}!`)
                        achou3 = true
                    }
                }
                if (!achou3) {
                    alert(`Não foi encontrada venda do vendedor ${codigoInteresse} no mês ${mesInteresse}!`)
                }
                break
            case 4:
                let codigoInteresse2 = prompt(`Informe o código do vendedor:`)
                let achou4 = false
                let soma = 0
                for (let i = 1; i <= vetVendas.length; i++) {
                    if (vetVendas[i].vendedor == codigoInteresse2) {
                        soma = soma + vetVendas[i].valor
                        achou4 = true
                    }
                }
                if (!achou4) {
                    alert(`Não foi encontrada venda do vendedor ${codigoInteresse2}!`)
                }
                else {
                    alert(`O total de vendas do vendedor ${codigoInteresse2} é R$${soma}`)
                }
                break
            case 5:
                let mesInteresse2 = Number(prompt(`Informe o mês de interesse:`))
                let maiorVenda = 0
                let quemVendeu = ""
                let achou5 = false
                for (let i =1; i <= vetVendas.length; i++) {
                    if (vetVendas[i].mes == mesInteresse2) {
                        achou5 = true
                        if (vetVendas[i].valor > maiorVenda) {
                            maiorVenda = vetVendas[i].valor
                            quemVendeu = vetVendas[i].vendedor
                        }
                    }
                }
                if (achou5) {
                    alert(`A maior venda do mês ${mesInteresse2} foi de ${quemVendeu} no valor de R$${maiorVenda}`)
                } 
                else {
                    alert(`Não existe venda no mês informado!!`)
                }  
                break
            case 6:
                let vendasMes = [0,0,0,0,0,0,0,0,0,0,0,0]
                for (let i = 1; i <= vetVendas.length; i++) {
                    let posicao = vetVendas[i].mes - 1
                    vendasMes[posicao] = vendasMes[posicao] + vetVendas[i].valor
                }
                let maiorVenda = 0
                let maiorMes = 0
                for (let i = 1; i <= vendasMes.length; i++) {
                    if (vendasMes[i] > maiorVenda) {
                        maiorVenda = vendasMes
                        maiorMes = i
                    }
                }
                alert(`O mês ${maiorMes} teve a maior venda de R$${maiorVenda}`)
                break
            case 7: alert(`O programa será encerrado!!!`)
                break
            default: alert(`Opção inválida!!`)
       }
    }
    while (opc != 7)
}