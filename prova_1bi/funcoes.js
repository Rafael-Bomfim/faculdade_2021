function exe1() {
    let val_base //valor base
    let acrescimo_andar
    let acrescimo_posicao
    let val_total //valor total


    let metragem = Number(prompt(`Qual a metragem do Ap. em m^2?`))
    let num_gar = Number(prompt(`Qual a quantidade de garagens do Ap? 1 a 3`)) //numero de garagens
    let andar = Number(prompt(`Qual o andar do Ap? 1 a 3`))
    let posicao = prompt(`Qual a posição do sol no Ap? 
                          Use M - Sol pela manhã, ou T - Sol pela tarde.`).toUpperCase()
    
    switch(num_gar) { //Valor base
        case 1 : 
            if (metragem <= 80) {
                val_base = 300000
            }
            else if ((metragem > 80) && (metragem <= 120)) {
                val_base = 400000
            }
            else if (metragem > 120) {
                val_base = 500000
            }
        break
        case 2 :
            if (metragem <= 80) {
                val_base = 320000
            }
            else if ((metragem > 80) && (metragem <= 120)) {
                val_base = 420000
            }
            else if (metragem > 120) {
                val_base = 520000
            }
        break
        case 3 :
            if (metragem <= 80) {
                val_base = 340000
            }
            else if ((metragem > 80) && (metragem <= 120)) {
                val_base = 440000
            }
            else if (metragem > 120) {
                val_base = 540000
            }
        break
        default: alert(`Número de garagens incorreto!!`)
    } //Acréscimo em função do andar 
    if (andar == 1) {
        acrescimo_andar = 10000
    }
    else if (andar == 2) {
        acrescimo_andar = 20000
    }
    else if (andar == 3) {
        acrescimo_andar = 30000
    }
    else {
        alert(`Número do andar incorreto!!`)
    } //Acréscimo em função da posição do sol (sobre o valor base)
    if (posicao == 'M') {
        acrescimo_posicao = (5*val_base)/100
    }
    else if (posicao == 'T') {
        acrescimo_posicao = (8*val_base)/100
    }
    else {
        alert(`Posição do sol incorreta!!`)
    } // Calculo do valor total
    val_total = val_base + acrescimo_posicao + acrescimo_andar

    alert(`O valor total do Apartamento é R$${val_total}`)
}

function exe2() {
    let opc
    let voto1 = 0; voto2 = 0; voto3 = 0; voto4 = 0; voto5 = 0
    let total_votos
    let porc_voto5 //porcentagem de votos 5
    let i = 0; aux = 0
    let opc01 = `Teams`; opc02 = `Papel`; opc03 = `WhatsApp`; opc04 = `E-mail`; opc05 = `Tanto faz`

    do {
        opc = Number(prompt(`
        Digite 1. Entrega apenas pelo Teams
        Digite 2. Entrega apenas em papel
        Digite 3. Entrega apenas pelo WhatsApp
        Digite 4. Entrega apenas por e-mail
        Digite 5. Tanto faz
        Digite 0. Sair`))

        if (opc == 1) {
            voto1++
        }
        else if (opc == 2) {
            voto2++
        }
        else if (opc == 3) {
            voto3++
        }
        else if (opc == 4) {
            voto4++
        }
        else if (opc == 5) {
            voto5++
        }
        else if (opc == 0) {
            alert(`A votação será finalizada!!`)
        }
        else {
            alert(`Código inválido`)
        }
    }
    while (opc != 0)

    total_votos = voto1 + voto2 + voto3 + voto4 + voto5
    porc_voto5 = ((voto5/total_votos)*100).toFixed(2)

    for(let cont = 1; cont <= 4; cont++){
        if (voto1 < voto2){
            i = voto1
            voto1 = voto2
            voto2 = i
            aux = opc01
            opc01 = opc02
            opc02 = aux
        }
        if (voto2 < voto3){
            i = voto2
            voto2 = voto3
            voto3 = i
            aux = opc02
            opc02 = opc03
            opc03 = aux
        }
        if (voto3 < voto4){
            i = voto3
            voto3 = voto4
            voto4 = i
            aux = opc03
            opc03 = opc04
            opc04 = aux
        }
        if (voto4 < voto5){
            i = voto4
            voto4 = voto5
            voto5 = i
            aux = opc04
            opc04 = opc05
            opc05 = aux
        }
    }   

    alert(` Contagem dos votos:
            Opção 1: ${voto1} votos
            Opção 2: ${voto2} votos
            Opção 3: ${voto3} votos
            Opção 4: ${voto4} votos
            Opção 5: ${voto5} votos
            
            Opção 5 teve ${porc_voto5}% dos votos.`)
    
    alert(`Classificação: 
                            ${opc01}: ${voto1} votos
                            ${opc02}: ${voto2} votos
                            ${opc03}: ${voto3} votos
                            ${opc04}: ${voto4} votos
                            ${opc05}: ${voto5} votos`)
}