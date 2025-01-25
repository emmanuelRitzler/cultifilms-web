const movies = [
    {
        title: "Scarface",
        cover: "./images/scarface.jpg",
        description: "En mai 1980, Fidel Castro autorise les opposants qui le souhaitent à quitter Cuba. Il en profite pour envoyer vers les Etats-Unis les malfrats devenus indésirables dans l'île. C'est ainsi que Tony Montana, un tueur mégalomane, se met à vivre son rêve américain.",
        link: "https://www.amazon.com/Scarface-Al-Pacino/dp/B000I543T6"
    },
    {
        title: "Jackie Brown",
        cover: "./images/jackie_brown.jpg",
        description: "Der Braten ist geil",
        link: "https://www.amazon.com/-/de/dp/B0DJHB11ZZ/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=HGSIQ9UGL2MN&dib=eyJ2IjoiMSJ9.1mdtd7F5Id25iQQO04eM_xgINBcw-2sQ1pEI32BdDUz9SyEXNqvkt2EnrbOAViHSa4QOGngSK2WPC_jKGGWS3ExI2juCBwrLtrVWpXig0l3Y8UlNvujUliI62y4UaAG7Iko1G5zVDOanL6c-e4myjsgdiHW2HtHSqsDHaJ5SXQxQaI4rSmyyJD2WLpNuArnJeLVj2CYKcq6GCzl9rPHOONX9rseZVjOmUZS1dZzuPA0.GfnDXyr6ckAkqB_vhMDaNPoTwu3N1RBzOy1dMYcT6bU&dib_tag=se&keywords=jackie+brown&qid=1737811033&s=instant-video&sprefix=jackie+brown%2Cinstant-video%2C176&sr=1-1"
    },
    {
        title: "American Gangster",
        cover: "./images/american_gangster.png",
        description: "Der Braten ist geil",
        link: "https://www.amazon.com/Scarface-Al-Pacino/dp/B000I543T6"
    },
    {
        title: "Pulp Fiction",
        cover: "./images/pulp_fiction.webp",
        description: "Der Braten ist geil",
        link: "https://www.amazon.com/Scarface-Al-Pacino/dp/B000I543T6"
    },
    {
        title: "Falling Down",
        cover: "./images/falling_down.jpg",
        description: "Der Braten ist geil",
        link: "https://www.amazon.com/Scarface-Al-Pacino/dp/B000I543T6"
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

    const linkToMovie = document.createElement("a");
    linkToMovie.href = "";
    buttonContainer.appendChild(linkToMovie);

})

