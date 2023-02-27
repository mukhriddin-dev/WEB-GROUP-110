movies.splice(200);

let mainContent = document.querySelector(".main-content");

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
    language: item.language
  };
});

db.forEach((item) => {
  const card = document.createElement("div");
  card.setAttribute(
    "class",
    "card w-[300px] bg-white h-[500px] rounded-lg shadow-2xl border"
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
                    <li><strong>Category:</strong> ${item.category} </li>
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
});
