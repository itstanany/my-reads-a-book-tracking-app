/**
 * Main Page Component
 * It Displays Different shelves of books
 * Each shelve contains a list of books
 * User can Change/remove any book from a shelve
 */

import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from '../BookShelf';
import {
  getAll, update,
} from '../../BooksAPI';

const getAllBooks = async () => {
  /**
   * Get All User books from the back-end
   * return => Object of properties:
   *    currentlyReading: Array of Objects,
   *       each object represents a book object with shelf property "currentlyReading"
   *    wantToRead: Array of Object,
   *       each object represents a book object with shelf property "wantToRead"
   *    read: Array of Object,
   *       each object represents a book object with shelf property "read"
   */
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
    /**
     * Method of updating state variable with current boocks collection
     */
    const ordBooks = await getAllBooks();
    setOrderedBooks(ordBooks);
  }, []);

  useEffect(() => {
    /**
     * Get initial data and update state variable
     */
    updateBookCollections();
  }, [updateBookCollections]);

  const onShelfChange = useCallback(async (e, book) => {
    /**
     * Send update to Back-end
     * get up-tp-date book collection
     */
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
