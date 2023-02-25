const rangePrice = document.getElementById("range-price");
const views = document.getElementById("views");
const price = document.getElementById("price");
const discount = document.getElementById("discount");
let pricing = 4;

// price.innerText = `$${100}.00`;
// views.innerText = `${100}K`;

function priceHandle(priceValue) {
  if (priceValue >= 4 && priceValue <= 8) {
    views.innerText = `${20}K`;
    pricing = 8;
  }

  if (priceValue >= 9 && priceValue <= 12) {
    views.innerText = `${40}K`;
    pricing = 12;
  }

  if (priceValue >= 13 && priceValue <= 16) {
    views.innerText = `${80}K`;
    pricing = 16;
  }

  if (priceValue >= 17 && priceValue <= 20) {
    views.innerText = `${100}K`;
    pricing = 20;
  }

  if (priceValue >= 21 && priceValue <= 24) {
    views.innerText = `${140}K`;
    pricing = 24;
  }

  if (priceValue >= 25 && priceValue <= 28) {
    views.innerText = `${160}K`;
    pricing = 28;
  }

  if (priceValue >= 29 && priceValue <= 32) {
    views.innerText = `${200}K`;
    pricing = 32;
  }

  if (discount.checked) {
    const discountValue = pricing - pricing * 0.25;
    price.innerText = `$${discountValue}.00`;
  } else {
    price.innerText = `$${pricing}.00`;
  }
}
// priceHandle(pricing);
rangePrice.addEventListener("input", (event) => {
  const rangeValue = rangePrice.value;
  priceHandle(rangeValue);
});

discount.addEventListener("input", (event) => {
  const discountValue = rangePrice.value;
  priceHandle(discountValue);
});
