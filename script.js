const images = [
  'src/assets/product-main.jpg',
  'src/assets/product-main-2.jpg',
  'src/assets/product-main-3.jpg'
];
let currentImg = 0;

const carouselImg = document.getElementById('carousel-img');
const indicators = document.querySelectorAll('.indicator');
const prevBtn = document.getElementById('prev-img');
const nextBtn = document.getElementById('next-img');

function updateCarousel() {
  carouselImg.src = images[currentImg];
  indicators.forEach((el, idx) => {
    el.classList.toggle('active', idx === currentImg);
  });
}

prevBtn.onclick = function() {
  currentImg = (currentImg === 0) ? images.length - 1 : currentImg - 1;
  updateCarousel();
};
nextBtn.onclick = function() {
  currentImg = (currentImg === images.length - 1) ? 0 : currentImg + 1;
  updateCarousel();
};
indicators.forEach((el, idx) => {
  el.onclick = function() {
    currentImg = idx;
    updateCarousel();
  };
});

// Quantidade e preço
let quantity = 1;
const quantityValue = document.getElementById('quantity-value');
const decrementBtn = document.getElementById('decrement');
const incrementBtn = document.getElementById('increment');
const finalPrice = document.querySelector('.final');
const installment = document.querySelector('.installment');

function updatePrice() {
  const price = 187.00 * quantity;
  finalPrice.textContent = `R$ ${price.toFixed(2).replace('.', ',')}`;
  installment.textContent = `em até 12x de R$ ${(price/12).toFixed(2).replace('.', ',')}`;
}

decrementBtn.onclick = function() {
  if (quantity > 1) {
    quantity--;
    quantityValue.textContent = quantity;
    updatePrice();
  }
};
incrementBtn.onclick = function() {
  if (quantity < 10) {
    quantity++;
    quantityValue.textContent = quantity;
    updatePrice();
  }
};

// Redirecionamento dos botões
const buyNowBtn = document.getElementById('buy-now');
const addCartBtn = document.getElementById('add-cart');

function redirectToCheckout() {
  const amount = (187.00 * quantity).toFixed(2);
  window.location.href = `https://checkout.com?amount=${amount}&quantity=${quantity}`;
}

buyNowBtn.onclick = redirectToCheckout;
addCartBtn.onclick = redirectToCheckout;

// Inicialização
updateCarousel();
updatePrice();
