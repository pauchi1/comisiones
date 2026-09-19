function recuperarText(idDelComponente) {
    let cmp = document.getElementById(idDelComponente);
    let valor = cmp.value;
    return valor;
}

function recuperarFloat(idDelComponente) {
    let valorTexto = recuperarText(idDelComponente);
    let valorFloat = parseFloat(valorTexto);
    return valorFloat;
}