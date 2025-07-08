function tabuada() {
    var number = document.getElementById('number')
    var text = document.getElementById('nt')

    for (var ni = 1; ni <= 10; ni++) {
        var mult = Number(number.value) * ni

        text.innerHTML += `${Number(number.value)} x ${ni} = ${mult} `
    }
}

