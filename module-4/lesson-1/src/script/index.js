"use strict";

let wrapper = document.querySelector(".wrapper");

let products = [
  {
    id: 1,
    title: "290 000 so’m",
    subTitle: "Apple Airpods Pro simsiz quloqchin , Oq rangda",
    orderInfo: 1380,
    sales: true,
    img: "./images/image 15.png",
  },

  {
    id: 2,
    title: "295 000 so’m",
    subTitle: "Apple Airpods Pro simsiz quloqchin , Oq rangda",
    orderInfo: 1380,
    sales: false,
    img: "https://picsum.photos/id/321/230/220",
  },
  {
    id: 3,
    title: "290 000 so’m",
    subTitle: "Apple Airpods Pro simsiz quloqchin , Oq rangda",
    orderInfo: 1380,
    sales: true,
    img: "https://picsum.photos/id/341/230/220",
  },
  {
    id: 4,
    title: "290 000 so’m",
    subTitle: "Apple Airpods Pro simsiz quloqchin , Oq rangda",
    orderInfo: 1380,
    sales: true,
    img: "https://picsum.photos/id/521/230/220",
  },
  {
    id: 5,
    title: "1290 000 so’m",
    subTitle: "Apple Airpods Pro simsiz quloqchin , Oq rangda",
    orderInfo: 1380,
    sales: false,
    img: "https://picsum.photos/id/21/230/220",
  },
  {
    id: 6,
    title: "2390 000 so’m",
    subTitle: " Airpods Pro simsiz quloqchin , Oq rangda",
    orderInfo: 1380,
    sales: false,
    img: "./images/image 15.png",
  },
  {
    id: 7,
    title: "2930 000 so’m",
    subTitle: "Apple Airpods Pro simsiz quloqchin , Oq rangda",
    orderInfo: 1380,
    sales: true,
    img: "https://picsum.photos/id/621/230/220",
  },
  {
    id: 8,
    title: "290 000 so’m",
    subTitle: "Apple Airpods Pro simsiz quloqchin , Oq rangda",
    orderInfo: 1380,
    sales: false,
    img: "https://picsum.photos/id/121/230/220",
  },
];

for (let i = 0; i < products.length; i++) {


  console.log(products[i].title);

  let card = document.createElement("div");

  card.setAttribute(
    "class",
    "card shadow-lg border w-[230px] mt-3 min-h-[390px] rounded-[10px] px-[15px]"
  );

  card.innerHTML = ` 
             <img src="${
               products[i].img
             }" alt="macbook" class="card-img w-[180px] h-[180px] ml-[15px]" />

               <div class="card-body p-2">

                 <h1 class="card-title text-lg text-[#0D63F3] font-semibold mb-2">${
                   products[i].title
                 }</h1>

                 <p class="card-text mb-8"> ${products[i].subTitle} </p>

                 <small class="text-[#6C757D] mb-[25px] text-[14px]"> ${
                   products[i].orderInfo
                 } marta sotildi </small>

                  <div class="flex justify-between">
                    <button class="${
      
                      products[i].sales
                        ? "bg-[#0D63F3] "
                        : "bg-red-600 line-through"
                    }  text-white px-[24.5px] py-[10.5px] my-[23px] rounded-[10px]"> Sotib olish</button>
                    <img src="./images/shop.svg" alt="add-shop" />
                  </div>
               </div>
    `;

    wrapper.append(card);
    

}

// let btn = document.createElement('button');
// // btn.setAttribute('class', 'p-10 bg-green-300 text-white');
// btn.classList.add('btn','p-10','bg-green-300','text-white');

// console.log(btn)



let number = [{ok:"ok"}, 2, 3, 4, 5, 6, 7, 8, 9, 10];



for (let i = 0; i < number.length; i++){
  console.log(number[i]['ok'])
}