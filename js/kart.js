/* -------------------------------------------------------------------------- */
/*                                  FUNCIONES                                 */
/* -------------------------------------------------------------------------- */

function createCardItem(kartItem){
    const newCardItem = document.createElement('div');
    newCardItem.classList.add('kart-item-container');

    newCardItem.innerHTML = `
        <div class="kart-item-img-container">
            <img src=${kartItem.product.images[0]} alt=${kartItem.product.title}>
        </div>
        <div class="kart-item-description">
            <span>${kartItem.product.title}</span>
        </div>
        <div class="kart-item-price">
            <span>$${kartItem.product.price}</span>
        </div>
        <div class="kart-item-quantity">
            <span>x${kartItem.quantity}</span>
        </div>
        <div class="kart-item-subtotal">
            <span>$${kartItem.quantity * kartItem.product.price}</span>
        </div>`;

    return newCardItem
}

function createCardTotalAmount(kart){

    const calculateAmount = (total, item) => total += item.product.price * item.quantity;
    const amount = kart.reduce(calculateAmount, 0);

    const newCard = document.createElement('div');
    newCard.classList.add('kart-total-amount-container');

    newCard.innerHTML = `
    <span id="kart-total-title">TOTAL</span>
    <span id="kart-total-amount">$${amount.toFixed(2)}</span>`;

    return newCard;
}

function getkart(){
    return JSON.parse(localStorage.getItem('kart')) || [];      
}

function emptyKart(){
    localStorage.removeItem('kart');
    const kartCount = document.getElementById('kart-count');
    if(kartCount)
        kartCount.remove();
}

function renderActionButtons(){
    const btnContainer = document.querySelector('.kart-btn-container');

    if(getkart().length){
        btnContainer.style.display = 'flex';        
    }
    else{
        btnContainer.style.display = 'none';   
    }
}

function renderKart(){
    let kart = getkart();    

    const kartItemsContainer = document.querySelector('.kart-data-container');
    kartItemsContainer.innerHTML = '';

    if(kart.length){
        kart.forEach(item => {
            kartItemsContainer.appendChild(createCardItem(item));
        });

        kartItemsContainer.appendChild(createCardTotalAmount(kart));
    }

    renderActionButtons();
}

function actionsBtnKartEventSuscribe(){

    document.getElementById('empty-kart-btn').addEventListener('click', () => {
        emptyKart();
        renderKart();
    });

    document.getElementById('buy-btn').addEventListener('click', () => {
        emptyKart();
        renderKart();
        alert('La compra se ha procesado con exito, en breve recibira un mail de nuestro equipo.\n¡¡¡Muchas gracias por su compra!!!');
    });
}


/* -------------------------------------------------------------------------- */
/*                               INICIALIZACION                               */
/* -------------------------------------------------------------------------- */

addEventListener('DOMContentLoaded', () =>{
    renderKart();
    actionsBtnKartEventSuscribe();
});