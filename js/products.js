/* -------------------------------------------------------------------------- */
/*                                  FUNCIONES                                 */
/* -------------------------------------------------------------------------- */
async function getAllProducts(limit, skip) {

    try {
        const response = await fetch(`https://dummyjson.com/products/category/smartphones?limit=${limit}&skip=${skip}`)

        if (!response.ok)
            throw new Error(`[ERROR] - Error al intentar obtener los productos - Status Code: ${response.status}`);

        const data = await response.json();

        return data.products.map(x => toViewModel(x));
    }
    catch (error) {
        console.error(error.message);
        return null;
    }
}

async function getProductById(id) {
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);

        if (!response.ok)
            throw new Error(`[ERROR] - El producto no esta disponible - Status Code: ${response.status}`);

        const data = await response.json();

        return toViewModel(data);
    }
    catch (error) {
        console.error(error.message);
        return null;
    }
}

function getkart() {
    return JSON.parse(localStorage.getItem('kart')) || [];
}

function addToKart(productItem) {
    let kart = JSON.parse(localStorage.getItem('kart')) || [];

    const existProduct = kart.some(x => x.product.id == productItem.product.id);

    if (!existProduct) {
        kart.push(productItem);
    }
    else {
        const existingItem = kart.find(x => x.product.id === productItem.product.id);
        existingItem.quantity += productItem.quantity;
    }

    localStorage.setItem('kart', JSON.stringify(kart));
}

async function renderProducts(numberPage) {
    const products = await getAllProducts(12, numberPage);

    const productsGrid = document.querySelector('.grid-products');

    products.forEach(product => {
        productsGrid.appendChild(createProductCard(product))
    });
}

function toViewModel({ id, title, brand, price, images, description }) {
    return {
        id,
        title,
        brand,
        price,
        images,
        description
    };
}

function productCardEventSuscribe(productCard) {
    const quantity = productCard.querySelector('.kart-options-container input');

    productCard.querySelector('.min-btn').addEventListener('click', () => {
        if (Number(quantity.value) > 1)
            quantity.value = Number(quantity.value) - 1;
    });

    productCard.querySelector('.max-btn').addEventListener('click', () => {
        if (Number(quantity.value) < 10)
            quantity.value = Number(quantity.value) + 1;
    });

    productCard.querySelector('.kart-btn-container button').addEventListener('click', async () => {
        const id = productCard.closest('.product-card').dataset.productId;

        const productItem = {
            product: await getProductById(id),
            quantity: Number(quantity.value)
        }

        addToKart(productItem);        
    });


}

function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.dataset.productId = product.id;

    productCard.innerHTML = `
        <div class="img-container">
            <img src=${product.images[0]} alt="">
        </div>
        <div class="description-container">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <span>$${product.price}</span>
        </div>
        <div class="kart-options-container">
           <button class="min-btn">-</button>
           <input type="text" value="1" disabled>
           <button class="max-btn">+</button>
        </div> 
        <div class="kart-btn-container">
            <button>Agregar al carrito</button>
        </div>`;

    productCardEventSuscribe(productCard);

    return productCard;
}


addEventListener('DOMContentLoaded', () => {

    renderProducts(1);
});


