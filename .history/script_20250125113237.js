const movies = [
    {
        title: "Scarface",
        cover: "./images/scarface.jpg",
        description: "sasas"
    }
]

movies.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("card");
    cardContainer.appendChild(card);

    const movieName = document.createElement("h3");
    card.appendChild(movieName)

    const movieCover = document.createElement("img");
    card.appendChild(movieCover);

    const movieDescription = document.createElement("p");
    card.appendChild(movieDescription);
    movieName.textContent = movie.title;
        movieCover.src = movie.cover;
        movieDescription.textContent = movie.description;

})

