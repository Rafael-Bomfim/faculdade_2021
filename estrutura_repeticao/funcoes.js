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

}

function exe2() {

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

function exe23() {
    let opc
    let sal
    let novo_sal

    do {
        opc = Number(prompt(`
        Digite 1. Novo salário
        Digite 2. Férias
        Digite 3. Décimo terceiro
        Digite 4. Sair`))

        switch(opc) {
            case 1: sal = Number(prompt(`Informe o salário:`))
                if (sal < 210) {
                    novo_sal = sal + (15*sal)/100
                }
                else if (sal <= 600) {
                    novo_sal = sal + (10*sal)/100
                }
                else {
                    novo_sal = sal + (5*sal)/100
                }
            alert(`O novo salário é de: R$${novo_sal}`)
                break

            case 2: sal = Number(prompt(`Informe o salário:`))
            alert(`As férias serão R$${sal + sal/3}`)
                break 

            case 3: sal = Number(prompt(`Informe o salário:`))
            let meses = Number(prompt(`Informe quantos meses foram trabalhados:`))
            alert(`Décimo terceiro R$${sal * meses/12}`)
                break

            case 4: alert(`O programa será encerrado!!`)
                break
            default: alert(`Opção Inválida!!`)
        }
    }
    while (opc != 4)
}