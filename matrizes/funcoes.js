function exemplo() {
    let matriz = []
    for (let i = 0; i < 3; i++) {
        matriz[i] = []
        for (let j = 0; j < 4; j++) {
            matriz[i][j] = i + j
        }
    }
    console.log(matriz)
}

function entradaDados(vetor, matriz) {
    for (let i = 1; i <= 4; i++) {
        let objeto = {
            ra: Number(prompt(`Digite o R.A DO ${i}º aluno:`)),
            nome: prompt(`Digite o nome do ${i}º aluno:`),
            media: 0
        }
        vetor[i] = objeto
        matriz[i] = []
        for (let j = 1; j <= 4; j++) {
            matriz[i][j] = Number(prompt(`Informe a nota do bimestre do aluno ${j}`))
        }
    }     
}

function calculaMediaAlunos(vetor, matriz) {
    for (let i = 1; i <= 4; i++) {
        let soma = 0
        for (let j = 1; j <= 4; j++) {
            soma = soma + matriz[i][j]
        }
    }
    alert(`Amedia do aluno ${vetor[i].nome} é ${soma / 4}`)
    vetor[i].media = soma / 4
}

function calcularMediaBimestral(vetor, matriz) {
    for (let i =1; i <= 4; i++) {
        let soma = 0
        for (let j = 1; j <= 4; j++) {
            soma = soma + matriz[i][j]
        }
    }
    alert(`A média do bimestre ${j} é ${soma/4}`)
}

function exe1() {
    let matriz = []
    let vetor = []
    entradaDados(vetor, matriz)
    calculaMediaAlunos(vetor, matriz)
}

function entradaDados(vetor, matriz) {
    for (let i = 1; i <= 4; i++) {
        let objeto = {
            codigo: prompt(`Informe o código do carro ${i}:`),
            marca: prompt(`informe a marca do carro ${i}:`),
            modelo: prompt(`Informe o modelo do carro ${i}:`),
            totVendas: 0
        }
        vetor[i] = objeto
        matriz[i] = []
        for (let j = 1; j <= 4; j++) {
            matriz [i] [j] = Number(prompt( `Informe a quantidade de vendas no trimestre ${j}:`))
        }
    }
}

function calculaTotalVendas(vetor, matriz) {
    for (let i = 1; i <= 4; i++) {
        let soma = 0
        for (let j = 1; j <= 4; j++) {
           soma = soma + matriz[i][j] 
        }
        alert(`O total de vendas do carro ${vetor[i].codigo} é R$${soma} `)
        vetor[i].totVendas = soma
    }
}

function exe2() {
    let vetor = []
    let matriz = []
    entradaDados(vetor, matriz)
    calculaTotalVendas(vetor, matriz)
}