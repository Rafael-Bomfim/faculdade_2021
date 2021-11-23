function exe1() {
    let pessoa = []
    let imovel = []

    do {
        opc = Number(prompt(`
        Digite 1. Cadastrar pessoa.
        Digite 2. Cadastrar imóvel.
        Digite 3. Valor total do imóvel de uma pessoa.
        Digite 4. Pessoa com imóvel mais caro.
        Digite 5. Finalize o programa.
        `))

        switch(opc) {
            case 1: 
            let achou = false
                let objeto = {
                    nome: prompt(`Digite o nome da pessoa:`),
                    cpf: Number(prompt(`Digite o CPF da pessoa:`)),
                    rg:  Number(prompt(`Digite o RG da pessoa:`))
            }
            for (let i = 1; i <= pessoa.length; i++) {
                pessoa[i] == objeto
                achou == true
            }
            alert(`Pessoa cadastrada com sucesso!`)
            break

            case 2:
                    let objeto2 = {
                        codigo: Number(prompt(`Digite o código do imóvel:`)),
                        endereco: prompt(`Digite o endereço do imóvel:`),
                        tamanho: prompt(`Informe o tamanha do imóvel:`),
                        tipo: prompt(`Informe o tipo do imóvel:`),
                        valor: Number(prompt(`Informe o valor do imóvel:`)),
                        rg: Number(prompt(`Informe o RG do dono:`))
                    }
                    for (let i = 1; i <= pessoa.length; i++) {
                        if (achou == true) {
                    imovel[i] = objeto2
                }
            }
            alert(`Imóvel cadastrado com sucesso!`)
            break

            case 3: 
            let achou2 = false
            let dono = Number(prompt(`Informe o RG que deseja consultar:`))
            let soma = 0

            for (let i = 1; i <= pessoa.length; i++) {
                if (imovel[i].rg == dono) {
                    soma = soma + imovel[i].valor
                    achou2 = true
                }
            }
            if (achou2 != true) {
                alert(`Não foi encontrado dono de Imóvel com o RG ${dono}`)
            }
            else {
                dono == pessoa[i].nome
                alert(`O valor total do imóvel do ${dono} é no valor de R$${soma}`)
            }
            break

            case 4:
            let maisCaro = imovel[i].valor
            let cpfDono
            let rg

            for (let i = 1; i <= imovel.length; i++) {
                if (imovel[i].valor > maisCaro) {
                    maisCaro == imovel[i].valor
                    rg == imovel[i].rg
                }
            }
            for (let i = 1; i <= pessoa.length; i++) {
                if (rg == pessoa[i].rg) {
                    cpfDono = pessoa[i].cpf
                }
            }

            alert(`O dono do imóvel mais caro tem o cpf ${cpfDono}, e custa R$${maisCaro}`)
            break

            case 5: 
            alert(`O programa será encerrado!!`)
            break

            default: alert(`Opção inválida!!`)
        }
    }
    while (opc != 5)
}

function entradaDados(vetor, matriz) {
    for (let i = 1; i <= 4; i++) {
        let carro = {
            marca: prompt(`Digite a marca do ${i}º carro:`),
            modelo: prompt(`Digite o modelo do ${i}º carro:`),
            ano: Number(prompt(`Digite o ano do ${i}º carro:`)),
            valor: Number(prompt(`Digite o valor do ${i}º carro:`))
        }
        vetor[i] = carro
    }
    for (let i = 1; i <= 4; i++) { 
        matriz[i] = []
        for (let j = 1; j <= 5; j++) {
            matriz[i][j] =  Number(prompt(`Informe a nota da ${j} avaliação do carro ${i}`))
        }
    }
}       

function mediaNotas(vetor, matriz) {
    let soma = 0

    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= 4; j++) {
            soma = soma + matriz[i][j]
        }
        alert(`A média de nota do carro  ${vetor[i].marca}-${vetor[i].modelo} é ${soma / 5}`)
    }
}

function menorNota(vetor, matriz) {
    let menor = 10
    let menorNota = 0
    let carro

    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= 5; j++) {
            if (matriz[i][j] < menor) {
                menorNota == matriz[i][j]
               carro == (matriz[i][j] == vetor[i].modelo)
            }
        }
    }
    alert(`O carro ${carro} obteve a menor nota na ${matriz[i][j]} avaliação.`)
}

function menorMedia(matriz) {
    let media1 = 0
    let media2 = 0
    let media3 = 0
    let media4 = 0
    let media5 = 0
    let menorMedia = 50
    let vet = new Array(5)
    let objeto = {
        nota1: (media1 + matriz[i][j].n1) / 4,
        nota2: (media2 + matriz[i][j].n2) / 4,
        nota3: (media3 + matriz[i][j].n3) / 4,
        nota4: (media4 + matriz[i][j].n4) / 4,
        nota5: (media5 + matriz[i][j].n5) / 4
    }
    for (let i = 1; i <= 5; i++) {
        vet[i] = objeto
        if (vet[i] < menorMedia) {
            menorMedia = vet[i]
            alert(`A avaliação com a menor média foi a ${vet[i]}.`)
        }
    }
}

function exe2() {
    let vetor = []
    let matriz = []
    entradaDados(vetor, matriz)
    mediaNotas(vetor, matriz)
    menorNota(vetor, matriz)
    menorMedia(matriz)
}