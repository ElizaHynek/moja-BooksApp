{
  'use strict';

  const select = {
    bookTemplate: '#template-book',
    booksList: '.books-list',
    bookImage: '.book__image',
  };
  const classNames = {
    favorite: 'favorite',
  };
  const templates = {
    books: Handlebars.compile(document.querySelector(select.bookTemplate).innerHTML),
  };


  function render() {
    for (let book of dataSource.books) {
      const generatedHTML = templates.books(book);
      const generatedDOM = utils.createDOMFromHTML(generatedHTML);
      const booksContainer = document.querySelector(select.booksList);
      booksContainer.appendChild(generatedDOM);
    } 
  }
  render();

  const favoriteBooks = [];

  function initActions() {
    const images = document.querySelectorAll(select.bookImage);
    for (let image of images) {
      image.addEventListener('dblclick', function(event){
        event.preventDefault();
        const bookId = image.getAttribute('data-id');
        if (!favoriteBooks.includes(bookId)) {
          image.classList.add(classNames.favorite);
          favoriteBooks.push(bookId);
        } else {
          image.classList.remove(classNames.favorite);
          favoriteBooks.pop(bookId);
        } 
      });
    }
  }
  
  
  initActions();
  console.log(favoriteBooks);
}
  


