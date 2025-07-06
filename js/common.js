document.querySelector('.burger-btn').addEventListener('click', () => {
    const navBarList = document.querySelector('nav ul');

    if (navBarList.classList.contains('menu-active')) {
        navBarList.classList.remove('menu-active');
    }
    else {
        navBarList.classList.add('menu-active');
    }
});