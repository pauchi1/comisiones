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

    // recuperamos propiedades de las cajas de texto
    //let cmpSueldoBase = document.getElementById("txtSueldoBase");
    //let cmpVenta = document.getElementById("txtVentas");
    //let cmpPrecio = document.getElementById("txtPrecio");

    // recuperamos el valor de las cajas de texto
    
    //let sueldoBasestr = cmpSueldoBase.value;
    let sueldoBasestr = recuperarText("txtSueldoBase");
    //let numeroVentastr = cmpVenta.value;
    let numeroVentastr = recuperarText("txtVentas");
    //let precioProductostr = cmpPrecio.value;
    let precioProductostr = recuperarText("txtPrecio");

    // convertimos el texto a números

    let sueldoBase = parseFloat(sueldoBasestr);
    let numeroVentas = parseFloat(numeroVentastr);
    let precioProducto = parseFloat(precioProductostr);

    let comision = calcularComision(numeroVentas, precioProducto);

    let total = comision + sueldoBase;

    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");

    spSueldoBase.textContent = sueldoBase;
    spComision.textContent = comision;
    spTotal.textContent = total;
}