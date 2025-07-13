import React, { useState } from "react";

const BookForm = ({ book, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    ...book,
    title: book.title || "",
    author: book.author || "",
    genre: book.genre || "",
    publication_year: book.publication_year || "",
    price: book.price || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const { title, author, genre, publication_year, price } = formData;
    if (!title || !author || !genre) return false;
    if (
      !Number.isInteger(+publication_year) ||
      +publication_year > new Date().getFullYear()
    )
      return false;
    if (isNaN(price) || price < 0) return false;
    return true;
  };

  return (
    <div className="modal">
      <h2>{book.b_id ? "Edit Book" : "Add Book"}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (validate()) onSave(formData);
        }}
      >
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <input
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Author"
        />
        <input
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          placeholder="Genre"
        />
        <input
          name="publication_year"
          value={formData.publication_year}
          onChange={handleChange}
          placeholder="Year"
        />
        <input
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
        />
        <button type="submit">Save</button>
        <button onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default BookForm;
