function updateKartQuantity() {
    const kartContainer = document.querySelector('.kart-container');

    const kart = JSON.parse(localStorage.getItem('kart')) || [];

    if (kart.length) {
        const quantityContainer = document.createElement('span');
        quantityContainer.id = 'kart-count';
        quantityContainer.innerText = kart.length;
        kartContainer.appendChild(quantityContainer);
    }
}


addEventListener('DOMContentLoaded', () => {
    updateKartQuantity();

    document.querySelector('.burger-btn').addEventListener('click', () => {
        const navBarList = document.querySelector('nav ul');

        if (navBarList.classList.contains('menu-active')) {
            navBarList.classList.remove('menu-active');
        }
        else {
            navBarList.classList.add('menu-active');
        }
    });
});