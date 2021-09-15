function exe0() {
    let contador = 1
    let preco = 0
    let soma = 0
    
    while(contador <= 10) {
        preco = Number(prompt(`Informe o preço do produto ${contador}:`))
        soma = soma + preco
        contador++
    }
    alert(`A média do preço dos produtos é ${soma/10}`) 
}

function exe1() {
    let a, b, c, d
    let cont
    let i
    let cont2

    for (cont2 = 1; cont2 <= 5; cont2++){
    a = Number(prompt(`Informe o valor de A:`))
    b = Number(prompt(`Informe o valor de B:`))
    c = Number(prompt(`Informe o valor de C:`))
    d = Number(prompt(`Informe o valor de D:`))
    
    for(cont = 1; cont <= 3; cont++) {
        if (a > b){
            i = a
            a = b
            b = i
        }
        if (b > c){
            i = b 
            b = c 
            c = i
        }
        if (c > d){
            i = c
            c = d
            d = i
        }
    }
    alert(`Ordem crescente ${a} ${b} ${c} ${d}`)
    alert(`Ordem decrescente ${d} ${c} ${b} ${a}`)
}
}

function exe2() {
    let quant = 120
    let lucro
    let saida = ""
    let maiorLucro = 0
    let maiorQuant = 0
    let maiorPreco = 0

    for(let preco = 5.0;preco >= 1.0; preco = preco - 0.5){
        lucro = (preco * quant) - 200 
        if (lucro > maiorLucro) {
            maiorLucro = lucro
            maiorPreco = preco
            maiorQuant = quant
        }
        saida = saida + (`Preco: R$${preco}  Quant: ${quant} Despesa: R$200,00 Lucro: R$${lucro}`) + "\n"
        quant = quant + 26 //prepara para o cálculo do próximo lucro
    }
    alert(saida)
    alert(` Maior lucro: R$${maiorLucro}  Maior quantidade: R$${maiorQuant}  Maior preço: R$${maiorPreco}`)
}

function exe3() {
    let i = 1
    let idade = 0
    let soma = 0
    let grup1 = 0
    let grup2 = 0
    let grup3 = 0
    let grup4 = 0
    let grup5 = 0

    while(i <= 8) {
        idade = Number(prompt(`Informe a idade da pessoa ${i}:`))

        if (idade <= 15) {
            grup1++
        }
        else if  (idade <= 30) {
            grup2++
        }
        else if (idade <= 45) {
            grup3++
        }
        else if (idade <= 60) {
            grup4++
        }
        else {
            grup5++
        }
        soma = soma + idade
        i++
    }
    alert(`A quantidade de pessoas em faixa etária são: 
            Até 15 anos: ${grup1}
            De 16 a 30 anos: ${grup2}
            De 31 a 45 anos: ${grup3}
            De 46 a 60 anos: ${grup4}
            Acima de 60 anos: ${grup5}`)
    alert(`A porcentagem de pessoas no primeiro grupo é: ${grup1/8 * 100}%`)
    alert(`A porcentagem de pessoas no último grupo é: ${grup5/8 * 100}%`)
}

function exe6() {
    let i = 1
    let valor 
    let cod
    let tot_v = 0
    let tot_p = 0    

    while (i <= 15) {
        valor = Number(prompt(`Informe o valor do produto ${i}:`))
                                                                               // vonverte para maiúsculo
        cod = prompt(`Informe V para compra à Vista e P para compra à prazo: `).toUpperCase()
        
        switch(cod) {
            case 'V': tot_v += valor
                break
            case 'P': tot_p += valor
                break
            default: alert(`Forma de pagamento inválida`)
        }
        i++
    }
    alert(`Total à vista: R$${tot_v}
           Total á prazo: R$${tot_p}
           Total geral: R$${tot_v + tot_p}`)
    alert(`Primeira parcela do valor total à prazo: R$${tot_p/3}`)
}

function exe15() {
    let m = 0
    let sim = 0
    let nao = 0
    let mulherSim = 0
    let homemNao = 0

    for (let cont = 0; cont < 10; cont++) {
        let sexo = prompt(`Informe M para Masculino e F para Feminino:`).toUpperCase()
        let resposta = prompt(`Gostou do novo produto? S-sim; N-não:`).toUpperCase()

        if (sexo === 'M') {
            m++
            if (resposta === 'N') {
                homemNao++
            }
        }
        else if (sexo === 'F') {
            if (resposta === 'S') {
                mulherSim++
            }
        }
        
        if (resposta === 'S') {
            sim++
        }
        else if (resposta === 'N') {
            nao++
        }
    }   
    alert(`${sim} pessoas responderam sim;
           ${nao} pessoas responderam não;
           ${mulherSim} mulheres responderam sim;
           ${(homemNao / m) * 100}% dos homens responderam não.`)
}

function exe21() {
    let opc
    let vot1 = 0; vot2 = 0; vot3 = 0; vot4 = 0; vot5 = 0; vot6 = 0
    let total
    let porcNul
    let porcBra

    do {
        opc = Number(prompt(`
        Informe seu voto utilizando:
        Digite 1. Candidato 1
        Digite 2. Candidato 2
        Digite 3. Candidato 3
        Digite 4. Candidato 4
        Digite 5. Voto Nulo
        Digite 6. Voto Branco
        Digite 0. Sair`))

        switch(opc){
            case 1: vot1++
            break
                case 2: vot2++
                break
                    case 3: vot3++
                    break
                        case 4: vot4++
                        break
                            case 5: vot5++
                            break
                                case 6: vot6++
                                break
                                    case 0: alert(`Fim da votação!!`)
                                    break
                                        default: alert(`Opção Inválida!!`)
        }
        
    }
    while (opc != 0)
    total = vot1 + vot2 + vot3 + vot4 + vot5 + vot6
    porcNul = ((vot5 / total) * 100).toFixed(2)
    porcBra = ((vot6 / total) * 100).toFixed(2)

    alert(` Contagem dos votos:
            Candidato 1: ${vot1} votos
            Candidato 2: ${vot2} votos
            Candidato 3: ${vot3} votos
            Candidato 4: ${vot4} votos
            Nulo: ${vot5} votos
            Branco: ${vot6} votos`)
    alert(`Porcentagem de Nulo: ${porcNul}%   e   Porcentagem de Branco ${porcBra}%`)
}

function exe23() {
    let opc
    let sal
    let novo_sal
    let ferias

    do {
        opc = Number(prompt(`
        Digite 1. Novo salário
        Digite 2. Férias
        Digite 3. Décimo terceiro
        Digite 4. Sair`))

        switch(opc) {
            case 1: sal = Number(prompt(`Informe o salário:`))
                if (sal < 210) {
                    novo_sal = (sal + ((15*sal)/100)).toFixed(2);
                }
                else if (sal <= 600) {
                    novo_sal = (sal + ((10*sal)/100)).toFixed(2);
                }
                else {
                    novo_sal = (sal + ((5*sal)/100)).toFixed(2);
                }
            alert(`O novo salário é de: R$${novo_sal}`)
                break

            case 2: sal = Number(prompt(`Informe o salário:`))
            ferias = (sal + (sal/3)).toFixed(2);
            alert(`As férias serão R$${ferias}`)
                break 

            case 3: sal = Number(prompt(`Informe o salário:`))
            let meses = Number(prompt(`Informe quantos meses foram trabalhados:`))
            alert(`Décimo terceiro R$${(sal * (meses/12)).toFixed(2)}`)
                break

            case 4: alert(`O programa será encerrado!!`)
                break
            default: alert(`Opção Inválida!!`)
        }
    }
    while (opc != 4)
}