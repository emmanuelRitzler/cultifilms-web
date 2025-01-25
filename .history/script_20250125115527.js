const movies = [
    {
        title: "Scarface",
        cover: "./images/scarface.jpg",
        description: "sasas"
    },
    {
        title: "Wilde Schweinehaxe",
        cover: "./images/scarface.jpg",
        description: "Der Braten ist geil"
    }
]

const cardContainer = document.querySelector(".card-container");

movies.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("card");
    cardContainer.appendChild(card);

    const movieName = document.createElement("h3");
    card.appendChild(movieName)

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container")
    card.appendChild(imageContainer);

    const movieCover = document.createElement("img");
    imageContainer.appendChild(imageContainer);

    const movieDescription = document.createElement("p");
    card.appendChild(movieDescription);

    movieName.textContent = movie.title;
    movieCover.src = movie.cover;
    movieDescription.textContent = movie.description;

})

