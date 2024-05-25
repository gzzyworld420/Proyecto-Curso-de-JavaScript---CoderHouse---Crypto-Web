  // Proyecto: Curso de JavaScript - CoderHouse - Crypto Web
// Autor: Ignacio Aracena - 2024
// Logica del Simulador Interactivo - Pre entrega 01
// Variables globales para el saldo y criptomonedas
const container = document.getElementById('container');
const sellBtn = document.getElementById('sell');
const buyBtn = document.getElementById('buy');

sellBtn.addEventListener('click', () => {
    container.classList.add("active");
});

buyBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

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

// Pre- entrega 03
/*=============== Mostrar Menu ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Mostrar menu */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Ocultar menu */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== Eliminar Menu Mobile ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== Cambiar el background del header ===============*/
const scrollHeader = () =>{
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('header-bg')
                     : header.classList.remove('header-bg')
}
window.addEventListener('scroll', scrollHeader)



// Pre-entrega 02 + 03
/*=============== NFTs + Buscador  ===============*/
// Recorro el array de productos para crear las cards
for (let product of products) {
    //Creo un div para la card
    let card = document.createElement("div");
    //La clase card se agrega a todos los elementos
    card.classList.add("card", product.category, "hide");
    //imagen div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //imagen tag
    let image = document.createElement("img");
    image.setAttribute("src", product.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("cardContainer");
    //nombre del nft
    let name = document.createElement("h2");
    name.classList.add("product-name");
    name.innerText = product.title.toUpperCase();
    container.appendChild(name);
    //precio
    let price = document.createElement("p");
    price.classList.add("price");
    price.innerText = "$" + product.price;
    container.appendChild(price);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
    // Descripcion
    let description = document.createElement("p");
    description.classList.add("description");
    description.innerText = product.description;
    container.appendChild(description);
    card.appendChild(container);
    //Agregar boton de compra
    let button = document.createElement("button");
    button.innerText = "Add to Cart";
    button.classList.add("btn-add-cart");
    card.appendChild(button);
}

// Fx para filtrar productos por categoria y nombre
const filtrarProductos = (value) => {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
        if (value == "all") {
            element.classList.remove("hide");
        } else {
            if (element.classList.contains(value)) {
                element.classList.remove("hide");
            } else {
                element.classList.add("hide");
            }
        }
    });
}
// Evento para filtrar productos por categoria y nombre
document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    elements.forEach((element, index) => {
        if (element.innerText.includes(searchInput.toUpperCase())) {
            cards[index].classList.remove("hide");
        } else {
            cards[index].classList.add("hide");
        }
    });
});

window.onload = () => {
    filtrarProductos("all");
};

// Carrito de Compras
const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector(
	'.container-cart-products'
);

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});

/* ============ Carrito de Compras ============= */
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

// Lista de todos los contenedores de productos
const productsList = document.querySelector('#products');

// Variable de arreglos de Productos
let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

productsList.addEventListener('click', e => {
	if (e.target.classList.contains('btn-add-cart')) {
		const product = e.target.parentElement;

		const infoProduct = {
			quantity: 1,
			title: product.querySelector('h2').textContent,
			price: product.querySelector('p').textContent,
		};

		const exits = allProducts.some(
			product => product.title === infoProduct.title
		);

		if (exits) {
			const products = allProducts.map(product => {
				if (product.title === infoProduct.title) {
					product.quantity++;
					return product;
				} else {
					return product;
				}
			});
			allProducts = [...products];
		} else {
			allProducts = [...allProducts, infoProduct];
		}

		showHTML();
	}
});

rowProduct.addEventListener('click', e => {
	if (e.target.classList.contains('icon-close')) {
		const product = e.target.parentElement;
		const title = product.querySelector('p').textContent;

		allProducts = allProducts.filter(
			product => product.title !== title
		);

		console.log(allProducts);

		showHTML();
	}
});

// Funcion para mostrar  HTML
const showHTML = () => {
	if (!allProducts.length) {
		cartEmpty.classList.remove('hidden');
		rowProduct.classList.add('hidden');
		cartTotal.classList.add('hidden');
	} else {
		cartEmpty.classList.add('hidden');
		rowProduct.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
	}

	// Limpiar HTML
	rowProduct.innerHTML = '';

	let total = 0;
	let totalOfProducts = 0;

	allProducts.forEach(product => {
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

		total =
			total + parseInt(product.quantity * product.price.slice(1));
		totalOfProducts = totalOfProducts + product.quantity;
	});

	valorTotal.innerText = `$${total}`;
	countProducts.innerText = totalOfProducts;
};


/*=============== Animacion scrollear ===============*/
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 2500,
  });

  sr.reveal(`.home__images`, {distance:'120px', delay: 400});
  sr.reveal(`.home__title`, {delay: 1000});
  sr.reveal(`.home__description`, {delay: 1200});
  sr.reveal(`.home__button`, {delay: 1400});
  sr.reveal(`.home__footer`, {delay: 1600});
  sr.reveal(`.home__data div`, { origin:'right', interval: 100,delay: 1800});
  sr.reveal(`#search-container`, {origin: 'left', interval: 100});
  sr.reveal(`#buttons`, {origin: 'right', interval: 100});