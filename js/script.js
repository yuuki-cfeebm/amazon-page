const carousel = document.querySelector('.categoria-carousel');

function btnAvancar() {
  carousel.scrollBy({ left: 440, behavior: 'smooth' });
}

function btnVoltar() {
  carousel.scrollBy({ left: -440, behavior: 'smooth' });
}

