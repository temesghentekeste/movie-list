const addForm = document.querySelector('.add');
const moviesList = document.querySelector('.movies');

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