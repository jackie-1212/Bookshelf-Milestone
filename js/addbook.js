const newTitle = document.querySelector(".Title");
const newAuthor = document.querySelector(".Author");
const newSubject = document.querySelector(".Subject");
const newLanguage = document.querySelector(".Language");
const newSubmit = document.querySelector(".buttonSubmit");

//addevenlistener for submit button
newSubmit.addEventListener("click", function () {
  const newBook = new Book(
    newTitle.value,
    newAuthor.value,
    newSubject.value,
    newLanguage.value
  );
  bookshelf.addBook(newBook);
  bookhold.replaceChildren(bookshelf.render());

  //reseting value of each text input
  newTitle.value = "";
  newAuthor.value = "";
  newSubject.value = "";
  newLanguage.value = "";
});
