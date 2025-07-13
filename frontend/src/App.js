import React, { useEffect, useState } from "react";
import axios from "axios";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import ConfirmModal from "./components/ConfirmModal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const fetchBooks = async () => {
    const { data } = await axios.get("http://localhost:5000/api/books");
    setBooks(data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleSave = async (book) => {
    if (book.b_id) {
      await axios.put(`http://localhost:5000/api/books/${book.b_id}`, book);
      toast.success("Book updated successfully!");
    } else {
      await axios.post("http://localhost:5000/api/books", book);
      toast.success("Book added successfully!");
    }
    fetchBooks();
    setEditingBook(null);
  };

  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/api/books/${deleteId}`);
    toast.success("Book deleted successfully!");
    fetchBooks();
    setShowModal(false);
  };

  return (
    <div className="container">
      <h1>📚 Book Management System</h1>
      <button onClick={() => setEditingBook({})}>➕ Add New Book</button>
      <BookList
        books={books}
        onEdit={(book) => setEditingBook(book)}
        onDelete={(id) => {
          setDeleteId(id);
          setShowModal(true);
        }}
      />
      {editingBook && (
        <BookForm
          book={editingBook}
          onSave={handleSave}
          onCancel={() => setEditingBook(null)}
        />
      )}
      <ConfirmModal
        visible={showModal}
        onConfirm={handleDelete}
        onCancel={() => setShowModal(false)}
      />
      <ToastContainer />
    </div>
  );
}

export default App;
