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

}

function exe4() {

}

function exe5() {
    
}