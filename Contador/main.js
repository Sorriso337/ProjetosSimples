function somar(){
    var valor = document.getElementById('valor')
    somado = $('#valor').text()
    somado = parseInt(somado, 10) + 1
    somado > 0 ? valor.style.color = "green" : null
    
    somado == 0 ? valor.style.color = "black" : null
    valor.innerHTML = somado;
}

function subtrair(){
    var valor = document.getElementById('valor')
    somado = $('#valor').text()
    somado = parseInt(somado, 10) -1
    somado < 0 ? valor.style.color = "red" : null
    somado == 0 ? valor.style.color = "black" : null
    valor.innerHTML = somado;
    
}

function zerar(){
    var valor = document.getElementById('valor')
    valor.style.color = "black"
    valor.innerHTML = "0";
}