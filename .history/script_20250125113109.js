const movies = [
    {
        title: "Scarface",
        cover: "./images/scarface.jpg",
        description: "sasas"
    }
]

const card = document.createElement("div");
card.classList.add("card");
cardContainer.appendChild(card);

card.appendChild(movieName)

const movieCover = document.createElement("img");
card.appendChild(movieCover);

const movieDescription = document.createElement("p");
card.appendChild(movieDescription);

movies.forEach(movie => {
    movieName.textContent = movie.title;
    movieCover.src = movie.cover;
    movieDescription.textContent = movie.description;

})

