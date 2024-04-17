let movies = [];

/*
// También podemos deshacernos del código en html (onsubmit="funcionFormulario(event);")
// y añadir el eventListener aquí, de la siguiente manera.
document.querySelector('#reviewForm').addEventListener('submit', function (event) {
    event.preventDefault();
    funcionFormulario(event);
});
*/

function funcionFormulario(event) {
    event.preventDefault();
    /**
     * Utilizamos preventDefault para evitar que el formulario se envíe,
     * ya que queremos controlar el envío del formulario con JavaScript.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event#javascript
     */

    let movieName = document.getElementById('movieName').value;
    let review = document.getElementById('review').value;
    let rating = document.getElementById('rating').value;

    console.log(movieName, review, rating)

    // movieName, review, rating ahora contienen el valor de los campos del formulario.
    // Se pueden usar por tanto, para añadir una nueva película a la lista.
    // Pero también se pueden usar para controlar si los campos están vacíos o si la calificación no es válida.

    let errorMessage = '';

    // if (/*?????*/) {
    //     errorMessage += 'El nombre de la película es obligatorio.\n';
    // }

    // if (/*?????*/) {
    //     errorMessage += 'La reseña es obligatoria.\n';
    // }

    // if (/*?????*/) {
    //     errorMessage += 'La calificación es obligatoria.\n';
    // } else if (rating < 1 || rating > 5) {
    //     errorMessage += 'La calificación debe estar entre 1 y 5.\n';
    // }

    // Si ha habido algún error, se muestra en el elemento con id errorMessage y no se añade la película a la lista.
    if (errorMessage) {
        document.getElementById('errorMessage').innerText = errorMessage;

    // Si no ha habido errores, se añade la película a la lista y se limpian los campos del formulario.
    } else {
        movies.push({ // push añade un elemento al FINAL del array. (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
            name: movieName,
            review: review,
            rating: rating
        });

        // Una vez añadida la película, se limpian los campos del formulario y se reinicia el mensaje de error.
        // - Se reinicia reviewForm con reset() (https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset)
        // - Se reinicia el mensaje de error con innerText = ''. (https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText)

        // Llamamos a la función displayMovies para que muestre las películas añadidas en el momento.
        displayMovies();
    }
}

function displayMovies() {
    let movieList = document.getElementById('movies');
    movieList.innerHTML = '';

    for (let i = 0; i < movies.length; i++) {
        let movieItem = document.createElement('li');
        movieItem.innerText = `Inserta datos de la película añadida aquí.`;
        // console.log(movies[i])
        movieList.appendChild(movieItem);
    }
}
