import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from '../BookShelf';
import {
  getAll, update,
} from '../../BooksAPI';

const getAllBooks = async () => {
  const books = await getAll();
  const orderedBooks = {
    currentlyReading: books.filter((book) => book.shelf === 'currentlyReading'),
    wantToRead: books.filter((book) => book.shelf === 'wantToRead'),
    read: books.filter((book) => book.shelf === 'read')
  };
  return orderedBooks;
}

const Home = () => {
  const [orderedBooks, setOrderedBooks] = useState({});
  const updateBookCollections = useCallback(async () => {
    const ordBooks = await getAllBooks();
    setOrderedBooks(ordBooks);
  }, []);

  useEffect(() => {
    updateBookCollections();
  }, [updateBookCollections]);

  const onShelfChange = useCallback(async (e, book) => {
    const value = e.target.value;
    await update(book, value);
    await updateBookCollections();
  }, [updateBookCollections])


  return (
    <div className="list-books">
      <div className="list-books-content">
        <div>
          <BookShelf
            title="Currently Reading"
            books={orderedBooks.currentlyReading || []}
            onShelfChange={onShelfChange}
          />

          <BookShelf
            title="Want to Read"
            books={orderedBooks.wantToRead || []}
            onShelfChange={onShelfChange}
          />

          <BookShelf
            title="Read"
            books={orderedBooks.read || []}
            onShelfChange={onShelfChange}
          />
        </div>
      </div>
      <div className="open-search">
        <Link
          to="/search"
        >
          Add a Book
        </Link>
      </div>
    </div>

  )
}

export default Home;
