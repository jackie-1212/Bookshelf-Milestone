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

    for (let i = 0; i < this.comment.length; i++) {
      const commentWord = document.createElement("p");
      commentWord.textContent = this.comment[i];
      mainbook.appendChild(commentWord);
    }

    //creates input fields to add comments to books
    newCommentButton.addEventListener("click", () => {
      commentTag.innerHTML = "";
      const commentInput = document.createElement("input");
      const commentButton = document.createElement("button");
      commentButton.textContent = "Send";
      //adding the comment to the books
      commentButton.addEventListener("click", () => {
        const commentString = commentInput.value;
        const comment = document.createElement("p");
        comment.textContent = commentInput.value;
        if (commentString.length < 280 && commentString.length > 0) {
          //pushing string into comment array
          this.addComment(commentString);
          //display new comment into screen
          mainbook.appendChild(comment);
          mainbook.removeChild(commentTag);
        }
      });
      commentTag.append(commentInput, commentButton);
      mainbook.append(commentTag);
    });
    return mainbook;
  }

  addComment(newComment) {
    this.comment.push(newComment);
  }
}
