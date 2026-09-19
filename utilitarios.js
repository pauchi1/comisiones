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

function recuperarEntero(idDelComponente) {
    let valorTexto = recuperarText(idDelComponente);
    let valorEntero = parseInt(valorTexto);
    return valorEntero;
}

function mostrarEnSpan(idDelComponente, valor) {
    let cmp = document.getElementById(idDelComponente);
    cmp.textContent = valor;
}