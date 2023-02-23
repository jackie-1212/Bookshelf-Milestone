class Bookshelf {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }
  //looping through this.books and rendering the content
  render() {
    const mainbookshelf = document.createElement("ul");
    for (let i = 0; i < this.books.length; i++)
      mainbookshelf.append(this.books[i].render());
    return mainbookshelf;
  }
}
//sets parameters for class book
class Book {
  constructor(author, language, subject, title) {
    this.author = author;
    this.language = language;
    this.subject = subject;
    this.title = title;
  }
  //set parameters to certain elements
  render() {
    const mainbook = document.createElement("li");
    const newAuthor = document.createElement("p");
    const newLanguage = document.createElement("p");
    const newSubject = document.createElement("p");
    const newTitle = document.createElement("p");
    newAuthor.textContent = this.author;
    newLanguage.textContent = this.language;
    newSubject.textContent = this.subject;
    newTitle.textContent = this.title;
    mainbook.append(newAuthor, newLanguage, newSubject, newTitle);
    return mainbook;
  }
}

const bookshelf = new Bookshelf();
//loops through the end index of bookdata
for (let i = 0; i < bookData.length; i++) {
  let book = new Book(
    bookData[i].author,
    bookData[i].language,
    bookData[i].subject,
    bookData[i].title
  );
  bookshelf.addBook(book);
}
//adding rendered bookshelf to body
let body = document.querySelector("body");
body.append(bookshelf.render());

console.log(bookshelf);
