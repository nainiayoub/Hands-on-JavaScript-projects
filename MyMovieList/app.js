// Movie class
class Movie{
    constructor(title, director, poster, genre){
        this.title = title;
        this.director = director;
        this.poster = poster;
        this.genre = genre;
    }
}

// UI class
class UI{
    static displayMovieList(){
        const movies = Store.getMovies();

        movies.forEach((movie) => UI.addMovieToList(movie));
    }

    static addMovieToList(movie){
        const movieList = document.getElementById('movie-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${movie.title}</td>
        <td>${movie.director}</td>
        <td><img src="${movie.poster}" width="60px" height="100px"></td>
        <td>${movie.genre}</td>
        <td class="text-center"><a href="#" class="btn btn-danger btn-sm delete">delete</a></td>
        `;
        //Appending the row to the list
        movieList.appendChild(row);
    }

    static deleteBook(targetElement){
        if(targetElement.classList.contains = 'delete'){
            targetElement.parentElement.parentElement.remove();
            
        }
    }

    static showAlert(message, className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');
        const form = document.querySelector('#movie-form');
        container.insertBefore(div, form);
        //Vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }

    static clearFields(){
        document.getElementById('title').value = '';
        document.getElementById('director').value = '';
        document.getElementById('genre').value = '';
        document.getElementById('poster').value = '';
    }

}

// Store class
class Store{
    static getMovies(){
        let movies;
        if(localStorage.getItem('movies') === null){
            movies = [];
        }else{
            movies = JSON.parse(localStorage.getItem('movies'));
        }

        return movies;
    }

    static addMovie(movie){
        const movies = Store.getMovies();
        movies.push(movie);

        localStorage.setItem('movies', JSON.stringify(movies));
    }

    static removeMovie(title){
        const movies = Store.getMovies();
        movies.forEach((movie, index) => {
            if(movie.title === title){
                movies.splice(index, 1);
            }
        });

        localStorage.setItem('movies', JSON.stringify(movies));
    }
}

//Event: display book
document.addEventListener('DomContentLoaded', UI.displayMovieList());

//Event: add book (even propagation)
document.querySelector('#movie-form').addEventListener('submit', (event) => {
    //prevent actual submit
    event.preventDefault();

    const title = document.querySelector('#title').value;
    const director = document.querySelector('#director').value;
    const genre = document.querySelector('#genre').value;
    const poster = document.querySelector('#poster').value;

    if(title === '' || director === '' || genre === '')
    {
        UI.showAlert('Please fill in all input fields.', 'danger');
    }
    else
    {
        //instantiate movie
        const movie = new Movie(title, director, poster, genre);
        //Add movie
        UI.addMovieToList(movie);

        //Add movie to store
        Store.addMovie(movie);

        UI.showAlert('Your movie was successfuly added.', 'success');



        //clear fields
        UI.clearFields();       
    }
});

//Event: remove a book
document.getElementById('movie-list').addEventListener('click', (event) => {
    UI.deleteBook(event.target);
    //Remove from store
    Store.removeMovie(event.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
    
    UI.showAlert('Book removed.', 'success');
    

});