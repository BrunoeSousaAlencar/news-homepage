function menuShow(){

    let menuMobile = document.getElementById('mobile-menu');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else{
        menuMobile.classList.add('open');
    }
} 