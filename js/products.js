let cart = [];

function ToViewModel({ id, title, brand, price, images, description }) {
    return {
        id,
        title,
        brand,
        price,
        images,
        description
    };
}

function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

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
           <button>-</button>
           <input type="text" value="1" disabled>
           <button>+</button>
        </div> 
        <div class="kart-btn-container">
            <button>Agregar al carrito</button>
        </div>`;

    return productCard;
}

async function getAllProducts(limit, skip) {

    try {
        const response = await fetch(`https://dummyjson.com/products/category/smartphones?limit=${limit}&skip=${skip}`)

        if (!response.ok)
            throw new Error(`Error al intentar obtener los productos - Status Code: ${response.status}`);

        const data = await response.json();
        console.log(data);
        return data.products.map(x => ToViewModel(x));
    }
    catch (error) {
        console.error(error.message);
        return null;
    }
}

addEventListener('DOMContentLoaded', async () => {
    const products = await getAllProducts(12, 0);

    const productsGrid = document.querySelector('.grid-products');

    products.forEach(product => {
        productsGrid.appendChild(createProductCard(product))
    });

    console.log(products)
});


