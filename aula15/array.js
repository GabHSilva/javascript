let num = [0,5,2]
num.push(6)
num.sort()
let pos = num.indexOf(8)
console.log(num)
console.log(num.length)
console.log(`A variavel escolhida é ${num[1]}`)

if (pos == -1) {
    console.log(`Vetor nao encontrado!!!`)
} else {
    console.log(`O valor 5 está no vetor ${pos}`)
}