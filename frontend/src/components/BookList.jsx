import React from "react";

const BookList = ({ books, onEdit, onDelete }) => {
  const currentYear = new Date().getFullYear();
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Genre</th>
          <th>Publication Year</th>
          <th>Price</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => {
          const age = currentYear - book.publication_year;
          return (
            <tr key={book.b_id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.publication_year}</td>
              <td>${book.price}</td>
              <td>{age} years</td>
              <td>
                <button onClick={() => onEdit(book)}>Edit</button>
                <button onClick={() => onDelete(book.b_id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BookList;
