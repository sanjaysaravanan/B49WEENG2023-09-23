
const formElement = document.querySelector('form');

const createMovie = async (movieData) => {

  const response = await fetch(
    'https://650e6d5754d18aabfe9926a0.mockapi.io/movies',
    {
      method: 'POST',
      body: JSON.stringify(movieData),
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'batch': 'B49WEENG'
      }
    }
  );

  const movieCreated = await response.json();

  console.log(movieCreated);
}


const deleteMovie = async (movieId) => {
  const response = await fetch(
    `https://650e6d5754d18aabfe9926a0.mockapi.io/movies/${movieId}`,
    {
      method: 'DELETE',
    }
  );

  const movieDeleted = await response.json();

  console.log(movieDeleted);
}

function createCard(data) {

  // Create card elements
  const card = document.createElement("div");
  card.className = "card";

  const titleElement = document.createElement("h2");
  titleElement.textContent = data.title;

  const leadElement = document.createElement("p");
  leadElement.textContent = data.lead;

  const imageElement = document.createElement("img");
  imageElement.src = data.imageUrl;
  imageElement.alt = data.title;

  const languageElement = document.createElement("p");
  languageElement.textContent = "Language: " + data.language;

  // Append elements to the card
  card.appendChild(titleElement);
  card.appendChild(leadElement);
  card.appendChild(imageElement);
  card.appendChild(languageElement);

  const deleteBtn = document.createElement("button");

  deleteBtn.addEventListener('click', () => {
    deleteMovie(data.id);
  });

  deleteBtn.innerText = "Delete";

  card.appendChild(deleteBtn);

  // Append the card to the container
  document.body.appendChild(card);
}

const getMovies = async () => {
  const response = await fetch(
    'https://650e6d5754d18aabfe9926a0.mockapi.io/movies',
  );

  const movies = await response.json();

  movies.forEach((movie) => {
    createCard(movie);
  });
}

formElement.addEventListener('submit', (e) => {

  e.preventDefault();

  const data = {};

  ['title', 'language', 'lead', 'imageUrl'].forEach((key) => {
    const element = document.getElementById(key);

    data[key] = element.value;
  })

  createMovie(data);
});


document.addEventListener('DOMContentLoaded', () => {

  getMovies();

})
