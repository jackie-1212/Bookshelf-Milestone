//sets parameters for class book
class Book {
  constructor(title, author, subject, language) {
    this.title = title;
    this.author = author;
    this.subject = subject;
    this.language = language;
    this.comment = [];
  }
  render() {
    //set parameters to certain elements
    const newCommentButton = document.createElement("button");
    const mainbook = document.createElement("li");
    const newAuthor = document.createElement("p");
    const newLanguage = document.createElement("p");
    const newSubject = document.createElement("p");
    const newTitle = document.createElement("p");
    const commentTag = document.createElement("div");
    //set the text content of certain elements
    newAuthor.textContent = this.author;
    newLanguage.textContent = this.language;
    newSubject.textContent = this.subject;
    newTitle.textContent = this.title;
    newCommentButton.textContent = "Comment";
    //add each elements to books
    mainbook.append(
      newAuthor,
      newLanguage,
      newSubject,
      newTitle,
      newCommentButton
    );

    //creates input fields to add comments to books
    newCommentButton.addEventListener("click", () => {
      commentTag.innerHTML = "";
      const commentInput = document.createElement("input");
      const commentButton = document.createElement("button");
      commentButton.textContent = "Send";
      //adding the comment to the books
      commentButton.addEventListener("click", () => {
        const something = commentInput.value;
        const comment = document.createElement("p");
        comment.textContent = commentInput.value;
        if (something.length < 280 && something.length > 0) {
          mainbook.appendChild(comment);
          mainbook.removeChild(commentTag);
        }
      });
      commentTag.append(commentInput, commentButton);
      mainbook.append(commentTag);
    });
    return mainbook;
  }
}
