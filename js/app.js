// Proyecto: Curso de JavaScript - CoderHouse - Crypto Web
// Autor: Ignacio Aracena - 2024
const products = {
    data:[
    {id: 1, productName: 'ApeXplorer',image:'/img/ape-2.png', price: 500,category: 'Ape'},
    {id: 2, productName: 'CosmicApe',image:'/img/ape-2.png', price: 800,category: 'Ape'},
    {id: 3, productName: 'JungleApe',image:'/img/ape-3.png', price: 630,category: 'Ape'},
    {id: 4, productName: 'UrbanApe',image:'/img/ape-4.avif', price: 1360,category: 'Ape'},
    {id: 5, productName: 'CyberApe',image:'/img/ape-4.jpeg', price: 1420,category: 'Ape'},
    {id: 6, productName: 'MetaMonarch',image:'/img/metaverseKing-1.avif', price: 320,category: 'Metaverse'},
    {id: 7, productName: 'VirtualSovereign',image:'/img/metaverseKing-2.avif', price: 150,category: 'Metaverse'},
    {id: 8, productName: 'KingdomMeta',image:'/img/metaverseKing-3.jpeg', price: 3400,category: 'Metaverse'},
    {id: 9, productName: 'RulerOfRealms',image:'/img/metaverseKing-4.jpeg', price: 2200,category: 'Metaverse'},
    {id: 10, productName: 'MetaMajesty',image:'/img/metaverseKing-5.webp', price: 950,category: 'Metaverse'},
    {id: 11, productName: 'DivineEssence',image:'/img/godness-1.png', price: 560,category: 'Godness'},
    {id: 12, productName: 'EtherealDeity',image:'/img/godness-2.jpeg', price: 90,category: 'Godness'},
    {id: 13, productName: 'SacredSeraph',image:'/img/godness-3.jpeg', price: 4200,category: 'Godness'},
    {id: 14, productName: 'CelestialGoddess',image:'/img/godness-4.jpeg', price: 5500,category: 'Godness'},
    {id: 15, productName: 'MythicDivinity',image:'/img/godness-5.webp', price: 180,category: 'Godness'},
    {id: 16, productName: 'MocaVoyager',image:'/img/mocaverse-1.png', price: 920,category: 'Mocaverse'},
    {id: 17, productName: 'CosmoMoca',image:'/img/mocaverse-2.png', price: 710,category: 'Mocaverse'},
    {id: 18, productName: 'MocaRealm',image:'/img/mocaverse-3.webp', price: 4530,category: 'Mocaverse'},
    {id: 19, productName: 'StellarMoca',image:'/img/mocaverse-4.webp', price: 1820,category: 'Mocaverse'},
    {id: 20, productName: 'MocaOdyssey',image:'/img/mocaverse-5.avif', price: 490,category: 'Mocaverse'},
  ]};

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
// Función para ejecutar múltiples acciones
const ejecutarAcciones = () => {
  let continuar = true;
  while (continuar) {
      let accion = prompt("¿Qué acción desea realizar? (comprar/vender/transferir/terminar)");
      if (accion.toLowerCase() === "terminar") {
          continuar = false;
      } else {
          ejecutarAccion(accion);
      }
  }
}
// Ejecutar la acción seleccionada en DevTools
// ejecutarAcciones();


// Pre entrega 02
// Array de NFTs
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("cardContainer");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }

  //parameter passed from button (Parameter same as category)
  const filtrarProductos = (value) => {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });

    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }

  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });

  //Initially display all products
  window.onload = () => {
    filtrarProductos("all");
  };
