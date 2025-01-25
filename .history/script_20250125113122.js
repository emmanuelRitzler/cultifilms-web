const movies = [
    {
        title: "Scarface",
        cover: "./images/scarface.jpg",
        description: "sasas"
    }
]

const card = document.createElement("div");
const movieName = document.createElement("h3");
const movieCover = document.createElement("img");
const movieDescription = document.createElement("p");


card.classList.add("card");
cardContainer.appendChild(card);

card.appendChild(movieName)

card.appendChild(movieCover);

card.appendChild(movieDescription);

movies.forEach(movie => {
    movieName.textContent = movie.title;
    movieCover.src = movie.cover;
    movieDescription.textContent = movie.description;

})

