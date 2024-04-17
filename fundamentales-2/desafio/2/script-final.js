let movies = [];

document.getElementById('reviewForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let movieName = document.getElementById('movieName').value;
    let review = document.getElementById('review').value;
    let rating = document.getElementById('rating').value;

    let errorMessage = '';

    if (!movieName) {
        errorMessage += 'El nombre de la película es obligatorio.\n';
    }

    if (!review) {
        errorMessage += 'La reseña es obligatoria.\n';
    }

    if (!rating) {
        errorMessage += 'La calificación es obligatoria.\n';
    } else if (rating < 1 || rating > 5) {
        errorMessage += 'La calificación debe estar entre 1 y 5.\n';
    }

    if (errorMessage) {
        document.getElementById('errorMessage').innerText = errorMessage;
    } else {
        movies.push({
            name: movieName,
            review: review,
            rating: rating
        });

        document.getElementById('reviewForm').reset();
        document.getElementById('errorMessage').innerText = '';

        displayMovies();
    }
});

function displayMovies() {
    let movieList = document.getElementById('movies');
    movieList.innerHTML = '';

    for (let i = 0; i < movies.length; i++) {
        let movieItem = document.createElement('li');
        movieItem.innerText = `${movies[i].name} - ${movies[i].review} - Calificación: ${movies[i].rating}`;
        movieList.appendChild(movieItem);
    }
}
