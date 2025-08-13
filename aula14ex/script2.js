function tabuada() {
    var number = document.getElementById('number')
    var text = document.getElementById('nt')

    for (var ni = 1; ni <= 10; ni++) {
        item.innerHTML = ''
        var mult = Number(number.value) * ni
        var item = document.createElement('option')
        item.text = `${Number(number.value)} x ${ni} = ${mult} `
        text.appendChild(item)
    }
}

