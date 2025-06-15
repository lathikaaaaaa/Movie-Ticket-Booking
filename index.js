document.addEventListener('DOMContentLoaded', () => {
    const movieID = localStorage.getItem('selectedMovieID');
    const apiKey = 'f780d662'; // Replace with your OMDb API key
    const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&i=${encodeURIComponent(movieID)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                document.getElementById('movie-title').textContent = data.Title;
                document.getElementById('movie-poster').src = `http://img.omdbapi.com/?i=${movieID}&apikey=${apiKey}`;
                document.getElementById('movie-poster').style.display = 'block';
                document.getElementById('movie-overview').textContent = data.Plot;
                document.getElementById('release-date').textContent = `Release Date: ${data.Released}`;
                document.getElementById('book-button').style.display = 'block';

                document.getElementById('book-button').addEventListener('click', () => {
                    window.location.href = 'seats.html';
                });
            } else {
                document.getElementById('movie-title').textContent = "Movie not found.";
            }
        })
        .catch(error => console.error('Error fetching movie details:', error));
});
