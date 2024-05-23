// Proyecto: Curso de JavaScript - CoderHouse - Crypto Web
// Autor: Ignacio Aracena - 2024

const container = document.getElementById('container');
const sellBtn = document.getElementById('sell');
const buyBtn = document.getElementById('buy');
// Carrito de compras
const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector('.container-cart-products');
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');
const productsList = document.querySelector('#products');
const valorTotal = document.querySelector('.total-pagar');
const countProducts = document.querySelector('#contador-productos');
const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');
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
// Array de objetos de NFTs + Filtrado de busqueda por nombre y categoria

// Recorro el array de productos para crear las cards
for (let product of products) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", product.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", product.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("cardContainer");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = product.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("p");
    price.innerText = "$" + product.price;
    container.appendChild(price);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
    //Add to cart button
    let button = document.createElement("button");
    button.innerText = "Add to Cart";
    button.classList.add("btn-add-cart");
    card.appendChild(button);
}

// Fx para filtrar productos por categoria y nombre
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

window.onload = () => {
    filtrarProductos("all");
};

// Carrito de compras
let carrito = [];

// Evento para abrir y cerrar el carrito
btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart');
});

// Evento para agregar productos al carrito + Mostrar productos en el carrito
productsList.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-add-cart')) {
        const product = e.target.parentElement;

        const infoProduct = {
            quantity: 1,
            title: product.querySelector('h5').textContent,
            price: product.querySelector('p').textContent,
        };
        // console.log(infoProduct);
        const exists = carrito.some(product => product.title === infoProduct.title);

        if (exists) {
            const products = carrito.map(product => {
                if (product.title === infoProduct.title) {
                    product.quantity++;
                    return product;
                } else {
                    return product;
                }
            });
            carrito = [...products];
        } else {
            carrito = [...carrito, infoProduct];
        }
        showHTML();
    }
});

// Evento para eliminar productos del carrito + metodo filter para comparar los productos y eliminarlos
rowProduct.addEventListener('click', (e) => {
    if (e.target.classList.contains('icon-close')) {
        const product = e.target.parentElement;
        const title = product.querySelector('p').textContent;

        carrito = carrito.filter(
            product => product.title !== title
        );
        console.log(carrito);

        showHTML();
    }
});

// Mostrar HTML del carrito + Total de productos y valor total de la compra
const showHTML = () => {
    if (!carrito.length) {
        cartEmpty.classList.remove('hiddenCart');
        rowProduct.classList.add('hiddenCart');
        cartTotal.classList.add('hiddenCart');
    } else {
        cartEmpty.classList.add('hiddenCart');
        rowProduct.classList.remove('hiddenCart');
        cartTotal.classList.remove('hiddenCart');
    }
    // Limpiar HTML
    rowProduct.innerHTML = '';

    let total = 0;
    let totalOfProducts = 0;

    carrito.forEach(product => {
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cart-product');
        containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;
        rowProduct.append(containerProduct);

        total = total + parseInt(product.quantity * product.price.slice(1));
        totalOfProducts = totalOfProducts + product.quantity;
    });
    valorTotal.innerText = `$${total}`;
    countProducts.innerText = totalOfProducts;
};