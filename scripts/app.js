const addForm = document.querySelector('.add');
const moviesList = document.querySelector('.movies');
const searchInput = document.querySelector('.search input');

const createHtml = (movie) => {
  const html = `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        ${movie}
        <i class="fas fa-trash delete"></i>
      </li>
    `;
    moviesList.innerHTML += html;
  }
  
  addForm.addEventListener('submit', e => {
    e.preventDefault();
    const movie = addForm.movie.value.trim();
    if(movie){
      createHtml(movie);
      addForm.reset();
    }
});

//delete movies
moviesList.addEventListener('click', e => {
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }
});

const filterMovies = keyword => {
  Array.from(moviesList.children)
       .filter( movie => !movie.textContent.includes(keyword))
       .forEach(movie => movie.classList.add('filtered')
       );

  Array.from(moviesList.children)
      .filter( movie => movie.textContent.includes(keyword))
      .forEach(movie => movie.classList.remove('filtered')
      );
}

//search functionality
searchInput.addEventListener('keyup', e=>{
  const keyword = searchInput.value.trim();
  filterMovies(keyword);
})