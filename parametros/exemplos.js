//Não retorna nada
function potencia(x, y) {
    Math.pow(x, y)
}
//Retorna um valor
function potencia2(x, y) {
    return Math.pow(x, y)
}

potencia(2, 3)
console.log(potencia2(2, 3))

//Passagem de parâmetro por valor
function soma10(a) {
    a = a + 10
}

let x = 50
soma10(x)
console.log(x) //x = 50

let a = 50
soma10(a)
console.log(a) //a = 50

//Passagem de parâmetros por referência
function soma10Vetores(a) {
    for(let i = 0; i < a.length; i++) {
        a[i] = a[i] + 10
    }
}

let vetor = [1, 2, 3, 4, 5]
soma10Vetores(vetor)
console.log(vetor) //retorna 11, 12, 13, 14, 15





function cadastraVendedor(vetVendedores) {
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
}

function cadastraVenda(vetVendedores, vetVendas) {
    let objeto = {
        vendedor: prompt(`Informe o código do vendedor:`),
        mes: Number(prompt(`Informe o mês da venda:`)),
        valor: Number(prompt(`Informe o valor da venda:`))
    }
    let achou = false
    for (let i = 1; i <= vetVendedores.length; i++) {
        if (vetVendedores[i].codigo == objeto.vendedor) { //verifica se o vendedor existe
            achou = true
        }
    }
    if (!achou) {
        alert(`Vendedor não existe!!!`)
    }
    else {
        let achou = false
        for(let i = 1; i <= vetVendas.length; i++) {
            if ((vetVendas[i].vendedor == objeto.vendedor) && (vetVendas[i].mes == objeto.mes)) {
                achou = true
            }
        }
        if (achou) {
            alert(`Já existe uma venda deste vendedor neste mês!!!`)
        }
        else {
            vetVendas.push(objeto)
            alert(`Venda cadastrada com sucesso!!!`)
        }
    }
}

function consultarVenda(vetVendas, codigoInteresse, mesInteresse) {
    let achou = false
        for (let i = 1; i <= vetVendas.length; i++) {
            if ((vetVendas[i].vendedor == codigoInteresse) && (vetVendas[i].mes == mesInteresse)) {
                alert(`O valor das vendas no mês ${mesInteresse} do funcionário ${codigoInteresse} é de R$${vetVendas[i].valor}!`)
                achou = true
            }
        }
        if (!achou) {
            alert(`Não foi encontrada venda do vendedor ${codigoInteresse} no mês ${mesInteresse}!`)
        }
}

function consultarTotalVenda(vetVendas, codInteresse) {
    let achou = false
    let soma = 0
        for (let i = 1; i <= vetVendas.length; i++) {
            if (vetVendas[i].vendedor == codigoInteresse) {
                soma = soma + vetVendas[i].valor
                achou = true
            }
        }
        if (!achou) {
            alert(`Não foi encontrada venda do vendedor ${codInteresse}!`)
        }
        else {
             alert(`O total de vendas do vendedor ${codInteresse} é R$${soma}`)
        }
}

function vendedorMaisVendeu(vetVendas, mesInter) {
    let maiorVenda = 0
    let quemVendeu = ""
    let achou = false
        for (let i =1; i <= vetVendas.length; i++) {
            if (vetVendas[i].mes == mesInter) {
                achou = true
                if (vetVendas[i].valor > maiorVenda) {
                    maiorVenda = vetVendas[i].valor
                    quemVendeu = vetVendas[i].vendedor
                }
            }
        }
        if (achou) {
            alert(`A maior venda do mês ${mesInter} foi de ${quemVendeu} no valor de R$${maiorVenda}`)
        } 
        else {
            alert(`Não existe venda no mês informado!!`)
        }  
}

function mesMaisVendas(vetVendas) {
    let vendasMes = [0,0,0,0,0,0,0,0,0,0,0,0]
        for (let i = 1; i <= vetVendas.length; i++) {
            let posicao = vetVendas[i].mes - 1
            vendasMes[posicao] = vendasMes[posicao] + vetVendas[i].valor
        }
    let maiorVenda = 0
    let maiorMes = 0
        for (let i = 1; i <= vendasMes.length; i++) {
            if (vendasMes[i] > maiorVenda) {
                maiorVenda = vendasMes[i]
                maiorMes = i
            }
        }
    alert(`O mês ${maiorMes} teve a maior venda de R$${maiorVenda}`)
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
                cadastraVendedor(vetVendedores)
                break
            case 2:
                cadastraVenda(vetVendedores, vetVendas)
                break
            case 3:
                let codigoInteresse = prompt(`Informe o código do vendedor:`)
                let mesInteresse = Number(prompt(`Informe o mês de interesse:`))
                consultarVenda(vetVendas, codigoInteresse, mesInteresse)
                break
            case 4:
                let codInteresse = prompt(`Informe o código do vendedor:`)
                consultarTotalVenda(vetVendas, codInteresse)
                break
            case 5:
                let mesInter = Number(prompt(`Informe o mês de interesse:`))
                vendedorMaisVendeu(vetVendas, mesInter)
                break
            case 6:
                mesMaisVendas(vetVendas)
                break
            case 7: alert(`O programa será encerrado!!!`)
                break
            default: alert(`Opção inválida!!`)
       }
    }
    while (opc != 7)
}