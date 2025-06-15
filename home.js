document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-box').value.trim();
    const apiKey = 'f780d662'; 
    const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(query)}`;
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    if (query === "") {
        alert("Please enter a movie name.");
        return;
    }

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                data.Search.forEach(movie => {
                    const movieItem = document.createElement('div');
                    movieItem.classList.add('movie-item');
                    movieItem.textContent = movie.Title;
                    movieItem.setAttribute('data-movie-id', movie.imdbID);
                    movieItem.addEventListener('click', () => {
                        localStorage.setItem('selectedMovieID', movie.imdbID);
                        window.location.href = 'index.html';
                    });
                    resultsContainer.appendChild(movieItem);
                });
            } else {
                alert("Movie not found.");
            }
        })
        .catch(error => console.error('Error searching for movies:', error));
});
