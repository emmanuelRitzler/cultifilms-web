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
        link: "https://www.amazon.com/-/de/dp/B001390BWO/ref=sr_1_1?crid=1EFJJDOFQZN0S&dib=eyJ2IjoiMSJ9.1jZTOytpIif4NuzRDjMjR4vWZbWH1B9fFigtGwG5jJ3QAqCx2q1ak0SVTSdMWGolDQ09gqTSN5yPZd9r5GuWr-fT1TeDL1pijwHoUlYp3iaYkX3p_z0NVm5mgLw-g_1NTwJzjjNV6MREda-K-nEEGkol5vgoQcI1_eREwtKQh3Nvn0orbSnTGeb_M279vP75tXMQ4OkKxGauI2ajpu9W1lw8sZzjNqbW-7D1LFWU3v4.EwCDnACTj9NsOKLeg6teadGzBWse-ew0Yw4BVL6V5Y4&dib_tag=se&keywords=american+gangster&qid=1737811072&s=instant-video&sprefix=american+ga%2Cinstant-video%2C151&sr=1-1"
    },
    {
        title: "Pulp Fiction",
        cover: "./images/pulp_fiction.webp",
        description: "Der Braten ist geil",
        link: "https://www.amazon.com/-/de/dp/B0B6QM3DS7/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2W26166X9S26O&dib=eyJ2IjoiMSJ9.-IZg95D9I04vqH2eUwGNm4lAsCCVfgOtoBAdkRPZwLNYGIe9IhxuGKWVTGHKIi5UnI5-kfaBy01BIL0ITFZPH4IwMUzTiRmvlqTKCYdhq3SsaB2CfnSCM4WewkYNqSWfJikaEzAlzy5OdgolYle5wgJj0J83_tbD555j3cjtnVAFrgTB1v8tdcVKN5KJLlHGPU8MSuN2P9BELmBZpcuWGlWNsIMcOtlMJXEqICHRDuw.6C3y_sOwxD2Pg4sKRRhgxuZNarYLh5vRhojDoe4-krw&dib_tag=se&keywords=pulp+fiction&qid=1737811115&s=instant-video&sprefix=pulp+fiction%2Cinstant-video%2C144&sr=1-1"
    },
    {
        title: "Falling Down",
        cover: "./images/falling_down.jpg",
        description: "Der Braten ist geil",
        link: "https://www.amazon.com/-/de/dp/B004VFMCWE/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1YPEO1D66KQOM&dib=eyJ2IjoiMSJ9.OWTyHFSooJj68b54VrPZY5rziAc8Mq9QQW85CQ05S10jAaTr1IoqDIe2mqe_qCfJZOTj_lwb-HSDsnaMXO51WV1r7jYcG7y8L6hfJ7oaFCaQ71CZsoYz52iE5eb4NRtio2uaWW3H5zA2v0XyEmX68MmxUBe8DdJp2ZrACmKCGZKwKQRRlTXOejOw6WpBtXqR3Gwl4Qk9AUPdbyrE_9S-llAk_A8spccmGjzV_FP2Ioc.18YmcyPzWHkvGPztGVvaoOPQR5Po1IQ3GOf8hC5xwnE&dib_tag=se&keywords=falling+down&qid=1737811141&s=instant-video&sprefix=falling+down%2Cinstant-video%2C144&sr=1-1"
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

    const linkToMovie = document.createElement("a");
    linkToMovie.href = movie.link;
    linkToMovie.classList.add("movie-link");
    buttonContainer.appendChild(linkToMovie);

    // Create a button for each movie
    const watchMovie = document.createElement("button");
    watchMovie.classList.add("card-button");
    linkToMovie.appendChild(watchMovie);

    const spanButton = document.createElement("span");
    spanButton.textContent = "Regarder le film";
    watchMovie.appendChild(spanButton);

    const svg = document.createElement("svg");
    svg.width = 15px
})

