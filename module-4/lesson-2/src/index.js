"use strict";

let usd = 11350;
let month = 12;

let wrapper = document.querySelector(".wrapper"),
  brand = document.querySelector("#brand"),
  letter = document.querySelector("#letter");

// --------------------- DYNAMIC OPTION --------------------

function dynamicOption() {
  const sortBrand = [];

  products.forEach((item) => {
    if (!sortBrand.includes(item.brand)) {
      sortBrand.push(item.brand);
    }
  });

  // console.log(sortBrand);

  sortBrand.sort();
  sortBrand.forEach((item) => {
    const option = document.createElement("option");
    option.innerHTML = item;
    brand.append(option);
  });
}

dynamicOption();

// --------------------- DYNAMIC OPTION END --------------------

// --------------------- CARD RENDER  --------------------

// const sortProduct = products.sort((a, b) => a.name.localeCompare(b.name));

// console.log(sortProduct);

function cardRender() {
  products.forEach((e, i, a) => {
    let card = document.createElement("div");

    card.setAttribute(
      "class",
      "card shadow-2xl w-[300px] min-h-[500px] cursor-pointer"
    );

    card.innerHTML = `
  <img src="${e.img}" alt="apple iphone 14" class="w-full">
        <div class="card-body p-4">
          <p class="font-semibold text-lg pl-2">${e.brand}</p>
          <p class="font-medium pl-2">${e.name}</p>

          <h2 class="text-xl font-bold mt-5 pl-3 mb-2">
            ${e.price * usd} сум
          </h2>
          <p class="bg-yellow-200 p-1 rounded-full pl-3 text-sm">
            ${Math.ceil((e.price * usd) / month)} сум x ${month} мес
          </p>

          <div class="flex">
            <button  class="${
              e.isActive ? "bg-green-600" : "bg-red-600 line-through"
            } py-2 px-3 rounded-xl text-white w-full mt-6 focus:ring-4 focus:ring-cyan-200">Savtaga qo'shish</button>
          </div>
        </div>
`;
    wrapper.append(card);
  });
}

cardRender();

// --------------------- CARD RENDERING END --------------------

function renderCards(data) {
  wrapper.innerHTML = "";
  data.forEach((e, i, a) => {
    let card = document.createElement("div");

    card.setAttribute(
      "class",
      "card shadow-2xl w-[300px] min-h-[500px] cursor-pointer"
    );

    card.innerHTML = `
  <img src="${e.img}" alt="apple iphone 14" class="w-full">
        <div class="card-body p-4">
          <p class="font-semibold text-lg pl-2">${e.brand}</p>
          <p class="font-medium pl-2">${e.name}</p>

          <h2 class="text-xl font-bold mt-5 pl-3 mb-2">
            ${e.price * usd} сум
          </h2>
          <p class="bg-yellow-200 p-1 rounded-full pl-3 text-sm">
            ${Math.ceil((e.price * usd) / month)} сум x ${month} мес
          </p>

          <div class="flex">
            <button  class="${
              e.isActive ? "bg-green-600" : "bg-red-600 line-through"
            } py-2 px-3 rounded-xl text-white w-full mt-6 focus:ring-4 focus:ring-cyan-200">Savtaga qo'shish</button>
          </div>
        </div>
`;
    wrapper.append(card);
  });
}

// ======================= SORT BY LETTER =================

letter.addEventListener("change", (e) => {
  wrapper.innerHTML = `<span class="loader"></span>`;
  if (e.target.value === "A-z") {
    let sortProduct = products.sort((a, b) => {
      return a.brand.localeCompare(b.brand);
    });
    setTimeout(() => {
      renderCards(sortProduct);
    }, sortProduct.length * 100 )
  } else {
    let sortProduct = products.sort((a, b) => {
      return b.brand.localeCompare(a.brand);
    });
     setTimeout(() => {
       renderCards(sortProduct);
     }, sortProduct.length * 100 );
  }
});

// ========== sort by brand name =========

brand.addEventListener("change", (e) => {
    wrapper.innerHTML = `<span class="loader"></span>`;
  const sortBrand = products.filter((item) => {
    return item.brand === e.target.value;
  });

 
   setTimeout(() => {
     renderCards(sortBrand);
   }, sortBrand.length * 100);
});
