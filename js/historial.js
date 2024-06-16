const buttonRegresar = document.querySelector("button")
const tableBody = document.querySelector("table tbody")
const historialTransacciones = JSON.parse(localStorage.getItem("ultimaCotizacion")) || []

function armarFilaTransacciones(transaccion) {
    return `<tr>
                <td>${transaccion.fecha}</td>
                <td>${transaccion.moneda}</td>
                <td>${transaccion.criptomoneda}</td>
                <td>${transaccion.cantidadComprada}</td>
                <td>$ ${transaccion.valorPoliza.toLocaleString()}</td>
            </tr>`
}

function cargarHistorial() {
    if (historialTransacciones.length > 0) {
        historialTransacciones.forEach((transaccion)=> {
            tableBody.innerHTML += armarFilaTransacciones(transaccion)
        })
    } else {
        alert("⛔️ No hay un historial de transacciones para mostrar.")
    }
}
cargarHistorial()

// EVENTOS
buttonRegresar.addEventListener("click", ()=> location.href = "index.html" )