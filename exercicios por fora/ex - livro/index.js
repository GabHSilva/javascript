function log (list, number) {
    let baixo = 0
    let alto = list.length() - 1

    while (baixo <= alto) {
        let meio = (baixo + alto) / 2
        let chute = list[meio]
        if (chute == number) {
            return meio
        } else if (chute > number) {
            alto = meio - 1
        } else if (chute < number) {
            baixo = meio + 1
        } else {
            return NaN
        }
    } 
}

let lista = [0, 20, 10 , 50, 25]
lista.sort()

let search = log(lista, 10)

console.log(search)