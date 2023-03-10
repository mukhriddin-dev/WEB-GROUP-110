"use strict";

let search = $("#search");
let region = $("#region");
let wrapper = $(".wrapper");

let BASE_URL = "https://restcountries.com/v2";

// --------------------- ALL COUNTRIES FETCHING FUNCTION ---------------- //

async function AllCountries() {
  wrapper.innerHTML = "<span class='loader'></span>";

  try {
    const response = await fetch(`${BASE_URL}/all`);
    const result = await response.json();

    if (response.status === 200) {
      console.log(result);
      renderCountries(result);
    } else {
      alert(response.status);
    }
  } catch (err) {
    console.log(err);
  }
}

AllCountries();

// -------------------- COUNTRY RENDER FUNCTION  ---------------- ////

function renderCountries(data) {
  if (data) {
    wrapper.innerHTML = "";
    data?.forEach((item) => {
      const card = createElement(
        "div",
        "card w-[267px] h-[336px] bg-white shadow-lg m-2",
        `

                <img src="${item?.flag}" alt="uzb" class="w-full" />
                 <div class="card-body p-6">

                    <h3 class="text-xl font-bold">${item?.name}</h3>

                  <ul class="mt-2">
                     <li><strong>Population:</strong> ${item?.population}</li>
                     <li> <strong>Region:</strong> ${item?.region}</li>
                     <li> <strong>Capital:</strong> ${item?.capital}</li>
                  </ul>
                </div>
            `
      );

      wrapper.append(card);
    });
  }
}
