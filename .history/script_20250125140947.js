const movies = [
    {
        title: "Scarface",
        cover: "./images/scarface.jpg",
        description: "En mai 1980, Fidel Castro autorise les opposants qui le souhaitent à quitter Cuba. Il en profite pour envoyer vers les Etats-Unis les malfrats devenus indésirables dans l'île. C'est ainsi que Tony Montana, un tueur mégalomane, se met à vivre son rêve américain."
    },
    {
        title: "Jackie Brown",
        cover: "./images/jackie_brown.jpg",
        description: "Der Braten ist geil"
    },
    {
        title: "",
        cover: "./images/jackie_brown.jpg",
        description: "Der Braten ist geil"
    },
    {
        title: "Jackie Brown",
        cover: "./images/jackie_brown.jpg",
        description: "Der Braten ist geil"
    },
    {
        title: "Jackie Brown",
        cover: "./images/jackie_brown.jpg",
        description: "Der Braten ist geil"
    },
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
    imageContainer.appendChild(movieCover);

    const movieDescription = document.createElement("p");
    card.appendChild(movieDescription);

    movieName.textContent = movie.title;
    movieCover.src = movie.cover;
    movieDescription.textContent = movie.description;

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    card.appendChild(buttonContainer);

    const watchMovie = document.createElement("button");
    watchMovie.classList.add("card-button");
    watchMovie.textContent = "Regarder le film";
    buttonContainer.appendChild(watchMovie);

})

