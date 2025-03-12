let movieList = [];

const user_movie_input = document.getElementById('userinput_movie');
const add_movie_to_screen = document.getElementById('add_movie');
const movie_list = document.getElementById('movie_list');
const total_movies_entered = document.getElementById('total_movies_entered');
const clear_the_list = document.getElementById('clear_the_list');

function updateMovieList() {
  movie_list.innerHTML = '';

  movieList.forEach((movie, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = movie;
    for(let i=0;i<listItem.length();i++){
      console.log(listItem[i]);
    }
    /*listItem.addEventListener('click', () => {
      removeMovie(index);
    });*/

    movie_list.appendChild(listItem);
  });

  total_movies_entered.textContent = `Total Movies: ${movieList.length}`;
}

function addMovie() {
  const movieName = user_movie_input.value.trim();

  if (movieName === '') {
    alert('Please enter a movie name');
    return;
  }

  movieList.push(movieName);
  user_movie_input.value = '';
  updateMovieList();
}

function removeMovie(index) {
  movieList.splice(index, 1);
  updateMovieList();
}

function clearList() {
  movieList = [];
  updateMovieList();
}

add_movie_to_screen.addEventListener('click', addMovie);
clear_the_list.addEventListener('click', clearList);
