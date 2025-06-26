function walk() {
    var start = document.getElementById('inicio')
    var finish = document.getElementById('condicao')
    var walking = document.getElementById('incr')
    var print = document.getElementById('passos')


    for (var con = Number(start.value); con <= Number(finish.value); con = con + Number(walking.value) ) {
        print.innerHTML = con
    }
}