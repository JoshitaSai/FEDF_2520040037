import { useState } from "react";

function BookDeletion() {

  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Java Programming"
    },
    {
      id: 2,
      title: "Python Fundamentals"
    },
    {
      id: 3,
      title: "React Development"
    }
  ]);

  const [loading, setLoading] = useState(false);

  const deleteBook = async (id) => {

    setLoading(true);

    // Simulating API Call
    await new Promise(resolve =>
      setTimeout(resolve, 2000)
    );

    setBooks(
      books.filter(book => book.id !== id)
    );

    setLoading(false);
  };

  return (
    <div>

      <h2>Book Deletion System</h2>

      {loading && (
        <h3>Deleting Book...</h3>
      )}

      <ul>
        {books.map(book => (
          <li key={book.id}>

            {book.title}

            <button
              onClick={() =>
                deleteBook(book.id)
              }
            >
              Delete
            </button>

          </li>
        ))}
      </ul>

    </div>
  );
}

export default BookDeletion;
