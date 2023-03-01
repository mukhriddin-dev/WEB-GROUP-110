movies.splice(200);

let mainContent = document.querySelector(".main-content"),
  dynamicCategory = document.querySelector("#category"),
  isName = document.querySelector("#searchpanel"),
  rating = document.querySelector("#rating"),
  search = document.querySelector("#search");
nameSearch = document.querySelector("#isname");

// normalize data
let db = movies.map((item) => {
  return {
    title: item.title,
    year: item.year,
    category: item.categories,
    id: item.imdbId,
    rating: item.imdbRating,
    time: `${Math.trunc(item.runtime / 60)}H , ${item.runtime % 60}m`,
    summary: item.summary,
    youtube: `https://www.youtube.com/embed/${item.youtubeId}`,
    maxImg: item.bigThumbnail,
    minImg: item.smallThumbnail,
    language: item.language,
  };
});

//dynamic elememnts (cards)

function renderData(db) {
  mainContent.innerHTML = "";

  db.length !== 0
    ? db.forEach((item) => {
        const card = document.createElement("div");
        card.setAttribute(
          "class",
          "card w-[290px] bg-white h-[500px] rounded-lg shadow-2xl border"
        );

        card.innerHTML = `
    
    <img src="${item.minImg}" alt="image" class="w-full" />
              <div class="card-body px-5">
                <h1 class="text-green-700 text-lg font-bold uppercase">
                  ${item.title}
                </h1>
                <ul>
                  <li><strong>Year:</strong> ${item.year}</li>
                  <li><strong>Language:</strong> ${item.language}</li>
                    <li class="break-words"><strong>Category:</strong> ${item.category} </li>
                  <li><strong>Runtime:</strong> ${item.time}</li>
                  <li>
                    <strong>Rating:</strong>
                    <strong class="text-red-500">${item.rating}</strong>
                  </li>
                </ul>
                <div class="flex w-full justify-between mt-4">

                      <a href="${item.youtube}" target="_blank"
                    class="bg-red-500 px-2 py-2 rounded focus:ring-2 focus:ring-red-400">
                  Watch 
                  </a> 
                  
                  <button
                    class="bg-sky-600 px-2 py-2 rounded focus:ring-2 focus:ring-sky-400">
                    Read more
                  </button>


                  <button
                    class="bg-red-500 px-2 py-2 rounded focus:ring-2 focus:ring-red-400">
                   bookmark
                  </button>

                </div>
              </div>

    `;

        mainContent.append(card);
      })
    : (mainContent.innerHTML = `<h1 class="bg-red-100 py-4 px-5 rounded-lg text-xl text-center flex items-center justify-center h-[65px] mx-auto">MA'LUMOT TOPILMADI</h1>`);
}
renderData(db);

// find elements

const findFilm = (e, rating, filmType) => {
  return db.filter((item) => {
    return (
      item.title.toLowerCase().match(e) &&
      item.rating >= rating &&
      item.category.includes(filmType)
    );
  });
};

isName.addEventListener("keyup", (e) => {
  mainContent.innerHTML = '<span class="loader"></span>';

  let inputValue = e.target.value.toLowerCase();
  let regex = new RegExp(inputValue, "g");
  let result = findFilm(regex);
  setTimeout(() => {
    renderData(result);
  }, 900);
});

search.addEventListener("click", (e) => {
  mainContent.innerHTML = '<span class="loader"></span>';

  let inputValue = nameSearch.value.toLowerCase();
  let ratingValue = rating.value;
  let filmTyp = dynamicCategory.value;

  console.log(inputValue);
  console.log(ratingValue);
  let regex = new RegExp(inputValue, "g");
  let result = findFilm(regex, ratingValue, filmTyp);
  console.log(result);
  setTimeout(() => {
    renderData(result);
  }, 900);
});

// dynamic category

function categories(db) {
  const normalizeCategory = [];

  const category = db.forEach((item) => {
    item.category.forEach((el) => {
      if (!normalizeCategory.includes(el)) {
        normalizeCategory.push(el);
      }
    });
  });

  console.log(normalizeCategory);
  normalizeCategory.sort();
  normalizeCategory.forEach((el) => {
    let option = document.createElement("option");
    option.innerHTML = el;
    dynamicCategory.append(option);
  });
}
categories(db);

//
