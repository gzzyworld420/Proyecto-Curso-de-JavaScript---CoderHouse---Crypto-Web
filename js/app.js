// Proyecto: Curso de JavaScript - CoderHouse - Crypto Web
// Autor: Ignacio Aracena - 2024

// Logica para el cambio de la vista de compra y venta
const container = document.getElementById('container');
const sellBtn = document.getElementById('sell');
const buyBtn = document.getElementById('buy');

sellBtn.addEventListener('click', () => {
    container.classList.add("active");
});

buyBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Logica del Simulador Interactivo - Pre entrega 01
// Variables globales para el saldo y criptomonedas
let saldo = 10000;
let bitcoin = 2;
let ethereum = 5;

// Función para comprar criptomonedas
const comprarCriptomoneda = () => {
    let criptomoneda = prompt("Ingrese la criptomoneda que desea comprar (Bitcoin/Ethereum):");
    let cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar:"));

    let costoTotal = 0;
    if (criptomoneda === "Bitcoin") {
        const precioBitcoin = 5000;
        costoTotal = precioBitcoin * cantidad;
    } else if (criptomoneda === "Ethereum") {
        const precioEthereum = 3000;
        costoTotal = precioEthereum * cantidad;
    } else {
        console.log("Criptomoneda no válida.");
        return;
    }

    if (saldo >= costoTotal) {
        saldo -= costoTotal;
        if (criptomoneda === "Bitcoin") {
            bitcoin += cantidad;
        } else {
            ethereum += cantidad;
        }
        console.log(`Has comprado ${cantidad} ${criptomoneda}(s) por un total de $${costoTotal}.`);
    } else {
        console.log("Saldo insuficiente para realizar la compra.");
    }
};

// Función para vender criptomonedas
const venderCriptomoneda = () => {
    let criptomoneda = prompt("Ingrese la criptomoneda que desea vender (Bitcoin/Ethereum):");
    let cantidad = parseInt(prompt("Ingrese la cantidad que desea vender:"));

    let ingresoTotal = 0;
    if (criptomoneda === "Bitcoin") {
        const precioBitcoin = 50000;
        ingresoTotal = precioBitcoin * cantidad;
    } else if (criptomoneda === "Ethereum") {
        const precioEthereum = 3000;
        ingresoTotal = precioEthereum * cantidad;
    } else {
        console.log("Criptomoneda no válida.");
        return;
    }

    if (criptomoneda === "Bitcoin") {
        if (bitcoin >= cantidad) {
            saldo += ingresoTotal;
            bitcoin -= cantidad;
            console.log(`Has vendido ${cantidad} ${criptomoneda}(s) por un total de $${ingresoTotal}.`);
        } else {
            console.log("No tienes suficientes criptomonedas para vender.");
        }
    } else if (criptomoneda === "Ethereum") {
        if (ethereum >= cantidad) {
            saldo += ingresoTotal;
            ethereum -= cantidad;
            console.log(`Has vendido ${cantidad} ${criptomoneda}(s) por un total de $${ingresoTotal}.`);
        } else {
            console.log("No tienes suficientes criptomonedas para vender.");
        }
    }
};

// Función para transferir criptomonedas
const transferirCriptomoneda = () => {
    let criptomoneda = prompt("Ingrese la criptomoneda que desea transferir (Bitcoin/Ethereum):");
    let cantidad = parseInt(prompt("Ingrese la cantidad que desea transferir:"));

    if (criptomoneda === "Bitcoin") {
        if (bitcoin >= cantidad) {
            bitcoin -= cantidad;
            console.log(`Has transferido ${cantidad} ${criptomoneda}(s) con éxito.`);
        } else {
            console.log("No tienes suficientes criptomonedas para transferir.");
        }
    } else if (criptomoneda === "Ethereum") {
        if (ethereum >= cantidad) {
            ethereum -= cantidad;
            console.log(`Has transferido ${cantidad} ${criptomoneda}(s) con éxito.`);
        } else {
            console.log("No tienes suficientes criptomonedas para transferir.");
        }
    } else {
        console.log("Criptomoneda no válida.");
    }
};

// Función para ejecutar una acción seleccionada
const ejecutarAccion = (accion) => {
    switch (accion.trim()) {
        case "comprar":
            comprarCriptomoneda();
            break;
        case "vender":
            venderCriptomoneda();
            break;
        case "transferir":
            transferirCriptomoneda();
            break;
        default:
            console.log(`Acción "${accion}" no válida.`);
            break;
    }
};

// Función para ejecutar una acción seleccionada
const ejecutarAcciones = () => {
    let accion = prompt("¿Qué acción desea realizar? (comprar/vender/transferir)");
    ejecutarAccion(accion);
};

// Ejecutar la acción seleccionada
ejecutarAcciones();






// Criptomonedas
// class Cryptomonedas {
//   constructor(nombre, valor, cantidad = 0) {
//     this.nombre = nombre;
//     this.valor = valor;
//     this.cantidad = cantidad;
//   }
// }

// const bitcoin = new Cryptomonedas('Bitcoin', 50000);
// const ethereum = new Cryptomonedas('Ethereum', 3000);
// const litecoin = new Cryptomonedas('Litecoin', 200);
// const monero = new Cryptomonedas('Monero', 100);
