const movies = [
    {
        title: "The Midnight Gospel",
        description: "Traversing trippy worlds inside his universe simulator, Clancy the space caster explores existential questions about life, death and everything in between.",
        image: "img/gospel.jpg",
        stars: 4.5,
        mode: "banner", // Modo banner
    },
    {
        title: "Bojack Horseman",
        description: "Meet the most beloved sitcom horse of the 90s - 20 years later. BoJack Horseman was the star of the hit TV show 'Horsin' Around,' but today he's washed up, living in Hollywood, complaining about everything, and wearing colorful sweaters.",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6JFWzlChcGgLiIUo2COgNlWGFKy.jpg",
        stars: 3.8,
        mode: "card", // Modo tarjeta
    },
    {
        title: "Cowboy Bebop",
        description: "In 2071, roughly fifty years after an accident with a hyperspace gateway made the Earth almost uninhabitable, humanity has colonized most of the rocky planets and moons of the Solar System. Amid a rising crime rate, the Inter Solar System Police (ISSP) set up a legalized contract system, in which registered bounty hunters, also referred to as Cowboys, chase criminals and bring them in alive in return for a reward.",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kxQ4zL78uscdiIvb4XuBsOfHNRi.jpg",
        stars: 3.8,
        mode: "card", // Modo tarjeta
    },
    {
        title: "One Piece",
        description: "Years ago, the fearsome Pirate King, Gol D. Roger was executed leaving a huge pile of treasure and the famous One Piece behind. Whoever claims the One Piece will be named the new King of the Pirates.",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fcXdJlbSdUEeMSJFsXKsznGwwok.jpg",
        stars: 3.8,
        mode: "card", // Modo tarjeta
    },
    {
        title: "Breaking Bad",
        description: "When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime.",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3xnWaLQjelJDDF7LT1WBo6f4BRe.jpg",
        stars: 3.8,
        mode: "card", // Modo tarjeta
    },
    {
        title: "Peaky Blinders",
        description: "A gangster family epic set in 1919 Birmingham, England and centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby, who means to move up in the world.",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tNjutGgaJpP30xUhfHihbcDgQUu.jpg",
        stars: 3.8,
        mode: "card", // Modo tarjeta
    },
    {
        title: "Squid Game",
        description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games—with high stakes. But, a tempting prize awaits the victor.",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yvW9VuHiwfAaTNYjALROI8evNIT.jpg",
        stars: 3.8,
        mode: "card", // Modo tarjeta
    },
    {
        title: "Better Call Saul",
        description: "Six years before Saul Goodman meets Walter White. We meet him when the man who will become Saul Goodman is known as Jimmy McGill, a small-time lawyer searching for his destiny, and, more immediately, hustling to make ends meet. Working alongside, and, often, against Jimmy, is “fixer” Mike Ehrmantraut. The series tracks Jimmy’s transformation into Saul Goodman, the man who puts “criminal” in 'criminal lawyer'.",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fC2HDm5t0kHl7mTm7jxMR31b7by.jpg",
        stars: 3.8,
        mode: "card", // Modo tarjeta
    },
    {
        title: "Arcane",
        description: "Amid the stark discord of twin cities Piltover and Zaun, two sisters fight on rival sides of a war between magic technologies and clashing convictions.",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg",
        stars: 3.8,
        mode: "card", // Modo tarjeta
    },
];

function createStarsElement(stars) {
    const starsElement = document.createElement("div");
    starsElement.className = "stars";

    const integerPart = Math.floor(stars);
    const decimalPart = stars - integerPart;

    for (let i = 0; i < integerPart; i++) {
        const starIcon = document.createElement("i");
        starIcon.className = "fas fa-star star-icon"; // Clase para una estrella sólida
        starsElement.appendChild(starIcon);
    }

    if (decimalPart > 0) {
        const halfStarIcon = document.createElement("i");
        halfStarIcon.className = "fas fa-star-half-alt half-star-icon"; // Clase para media estrella
        starsElement.appendChild(halfStarIcon);
    }

    return starsElement;
}

function createMovieElement(movie) {
    const movieElement = document.createElement("div");

    if (movie.mode === "card") {
        const img = document.createElement("img");
        img.src = movie.image;
        img.className = "card-movie";
        const title = document.createElement("h2");
        title.textContent = movie.title;
        const description = document.createElement("p");
        description.textContent = movie.description;
        description.className = "movie-description"
        const stars = createStarsElement(movie.stars);

        movieElement.appendChild(img);
        movieElement.appendChild(title);
        movieElement.appendChild(description);
        movieElement.appendChild(stars);
    } else if (movie.mode === "banner") {
        const img = document.createElement("img");
        img.src = movie.image;
        img.className = "banner-movie";
        const title = document.createElement("h2");
        title.textContent = movie.title;
        title.className = "movie-title"

        movieElement.appendChild(img);
        movieElement.appendChild(title);
    }

    return movieElement;
}

function renderMovies(sectionClass, mode) {
    const section = document.querySelector(`.${sectionClass}`);
    const carrusel = section.querySelector(".carrusel");

    movies.forEach((movie) => {
        if (movie.mode === mode) {
            const movieElement = createMovieElement(movie);
            carrusel.appendChild(movieElement);
        }
    });
}

// Llama a las funciones para generar el contenido de las secciones
renderMovies("banner-contenedor", "banner");
renderMovies("recomendado-contenedor", "card");
renderMovies("tendencias-contenedor", "card");