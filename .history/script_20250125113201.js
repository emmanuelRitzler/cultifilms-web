const movies = [
    {
        title: "Scarface",
        cover: "./images/scarface.jpg",
        description: "sasas"
    }
]



movies.forEach(movie => {
    movieName.textContent = movie.title;
    movieCover.src = movie.cover;
    movieDescription.textContent = movie.description;

})

