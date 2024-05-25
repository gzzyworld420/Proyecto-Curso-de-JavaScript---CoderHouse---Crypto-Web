  // Proyecto: Curso de JavaScript - CoderHouse - Crypto Web
// Autor: Ignacio Aracena - 2024
// Variables Globales
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

/* ========================= */
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


/*=============== SCROLL REVEAL ANIMATION ===============*/
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