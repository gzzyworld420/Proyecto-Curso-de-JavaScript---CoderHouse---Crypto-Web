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

// Variables globales
let saldo = 1000; // Saldo inicial en la wallet
const precioBitcoin = 50000; // Precio inicial del Bitcoin
const precioEther = 3000; // Precio inicial del Ether

// Función para comprar criptomonedas
const comprarCriptomoneda = (monto, criptomoneda) => {
  const precio = obtenerPrecioCriptomoneda(criptomoneda);
  const cantidad = monto / precio;

  if (saldo >= monto) {
    saldo -= monto;
    console.log(`Has comprado ${cantidad.toFixed(2)} ${criptomoneda}.`);
  } else {
    console.log("Saldo insuficiente para realizar la compra.");
  }
}

// Función para vender criptomonedas
const venderCriptomoneda = (cantidad, criptomoneda) => {
  const precio = obtenerPrecioCriptomoneda(criptomoneda);
  const monto = cantidad * precio;

  if (cantidad <= obtenerCantidadCriptomoneda(criptomoneda)) {
    saldo += monto;
    console.log(`Has vendido ${cantidad.toFixed(2)} ${criptomoneda}.`);
  } else {
    console.log("No tienes suficiente cantidad para vender.");
  }
}

// Función para obtener el precio de una criptomoneda
const obtenerPrecioCriptomoneda = (criptomoneda) => {
  switch (criptomoneda) {
    case "Bitcoin":
      return precioBitcoin;
    case "Ether":
      return precioEther;
    default:
      return 0;
  }
}

// Función para obtener la cantidad de una criptomoneda
const obtenerCantidadCriptomoneda = (criptomoneda) => {
  // Lógica para obtener la cantidad de la criptomoneda en la wallet
  return 0;
}

// Ejemplo de uso
comprarCriptomoneda(500, "Bitcoin"); // Comprar 500 dólares de Bitcoin
venderCriptomoneda(0.5, "Ether"); // Vender 0.5 Ether




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
