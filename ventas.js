const VENTAS_BASE = 5;

function calcularComision(numeroDeVenta, precioProducto) {
    let comision = 0;
    if (numeroDeVenta > VENTAS_BASE) {
        let ventasExtras = numeroDeVenta - VENTAS_BASE;
        comision = ventasExtras * (precioProducto * 0.1);
    }
    return comision;
}

function calcular() {
    let sueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarFloat("txtVentas"); 
    let precioProducto = recuperarFloat("txtPrecio");

    let comision = calcularComision(numeroVentas, precioProducto);
    let total = comision + sueldoBase;

    mostrarEnSpan("spSueldoBase", sueldoBase);
    mostrarEnSpan("spComision", comision);
    mostrarEnSpan("spTotal", total);
}