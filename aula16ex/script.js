/*
    numero (numero adicionado)
    nadd (tabela)
    result (dados detalhados)
*/

let numbers = []

function addnumber() {
    let number = Number(document.getElementById('numero').value)
    let tabela = document.getElementById('nadd')

    function exist(valor) {
        if (numbers.indexOf(valor) == -1){
            return false
        } else {
            return true
        }
    }

    if (number == 0) {
        window.alert('Insira um numero no campo vazio!!!')
    } else if (exist(number) == true) {
            window.alert('Numero ja existente!!!')
        } else if (exist(number) == false) {
            numbers.push(number)
            let item = document.createElement('option')
            item.text = `Valor ${number} foi adicionado`
            tabela.appendChild(item)
        }
}

function totalresult() {
    let div = document.getElementById('result')
    numbers.sort

    let total = document.createElement('p')
    total.innerHTML = `Foram adicionados ${numbers.length} numeros`
    div.appendChild(total)

    let big = document.createElement('p')
    big.innerHTML = `O maior numero foi ${numbers[numbers.length - 1]}`
    div.appendChild(big)

    let small = document.createElement('p')
    small.innerHTML = `O menor numero foi ${numbers[0]}`

    let soma = document.createElement('p')
    let sfinal = 0
    for (pos in numbers) {
        sfinal = sfinal + Number(numbers[pos])
    }
    soma.innerHTML = `A soma dos numeros foi de ${sfinal}`
    div.appendChild(soma)

    let media = document.createElement('p')
    let divisao = sfinal / numbers.length
    media.innerHTML = `A media dos numeros sao de ${divisao}`
    div.appendChild(media)

}