function ConfirmarCompra() {
    let CVV = document.getElementById("CVV").value
    let Ncartao = document.getElementById("Ncartao").value

    if (CVV.lenght < 3){
        alert("CVV invalido")
    }else if (Ncartao < 16) {
        alert("Número de cartão inválido")
    }
}