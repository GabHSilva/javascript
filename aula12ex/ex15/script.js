function resultado() {
    var ano = new Date().getFullYear()
    var fano = document.getElementById('idade')
    var res = document.getElementById('resul')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] ano invalido!!!')
    } else {
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 14) {
                img.setAttribute('src', 'img/crianca-homem.jpg')
            } else if (idade < 18) {
                img.setAttribute('src', 'img/adolescente-homem.jpg')
            } else if (idade > 60) {
                img.setAttribute('src', 'img/adulto-homem.avif')
            } else {
                img.setAttribute('src', 'img/idoso-homem.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 14) {
                img.setAttribute('src', 'img/crianca-mulher.jpg')
            } else if (idade < 18) {
                img.setAttribute('src', 'img/adolescente-mulher.jpg')
            } else if (idade > 60) {
                img.setAttribute('src', 'img/adulto-mulher.jpg')
            } else {
                img.setAttribute('src', 'img/idoso-mulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}