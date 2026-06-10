import { useState } from "react";
function AddBook() {
  const [bookTitle, setBookTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(
      `Book Added Successfully:
       ${bookTitle} by ${author}`
    );
    setBookTitle("");
    setAuthor("");
    setIsbn("");
  };
  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Book Title:
        </label>
        <input
          id="title"
          type="text"
          value={bookTitle}
          onChange={(e) =>
            setBookTitle(e.target.value)
          }
          required
          aria-label="Book Title"
        />
        <br /><br />
        <label htmlFor="author">
          Author:
        </label>
        <input
          id="author"
          type="text"
          value={author}
          onChange={(e) =>
            setAuthor(e.target.value)
          }
          required aria-label="Author Name"
        />
        <br /><br />
        <label htmlFor="isbn">
          ISBN:
        </label>
        <input
          id="isbn"
          type="text"
          value={isbn}
          onChange={(e) =>
            setIsbn(e.target.value)
          }
          required
          aria-label="ISBN Number"
        />
        <br /><br />
        <button type="submit">
          Add Book
        </button>
      </form>
      <h3>{message}</h3>
    </div>
  );
}
export default AddBook;
