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
const bookhold = document.querySelector(".bookhold");
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
bookhold.append(bookshelf.render());

console.log(bookshelf);
