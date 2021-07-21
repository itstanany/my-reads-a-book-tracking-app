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
import { BookType, OnShelfChangeType, OrderedBooksType } from '../types/type';

const getAllBooks: () => Promise<OrderedBooksType> = async () => {
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

  const books: BookType[] = await getAll();
  const orderedBooks = {
    currentlyReading: books.filter((book: BookType) => book.shelf === 'currentlyReading'),
    wantToRead: books.filter((book: BookType) => book.shelf === 'wantToRead'),
    read: books.filter((book: BookType) => book.shelf === 'read')
  };
  return orderedBooks;
}


const initialOrderedBook: OrderedBooksType = {
  wantToRead: [],
  read: [],
  currentlyReading: [],
};

const Home: () => JSX.Element = () => {
  const [orderedBooks, setOrderedBooks] = useState<OrderedBooksType>(initialOrderedBook);

  const updateBookCollections: () => Promise<void> = useCallback(async () => {
    /**
     * Method of updating state variable with current books collection
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

  const onShelfChange: OnShelfChangeType = useCallback(async (e, book) => {
    /**
     * Send update to Back-end
     * get up-tp-date book collection
     */
    const value: string = e.target.value;
    await update(book, value);
    await updateBookCollections();
  }, [updateBookCollections]);


  return (
    <div className="list-books" >
      <div className="list-books-content" >
        <div>
          <BookShelf
            title="Currently Reading"
            books={orderedBooks.currentlyReading}
            onShelfChange={onShelfChange}
          />

          <BookShelf
            title="Want to Read"
            books={orderedBooks.wantToRead}
            onShelfChange={onShelfChange}
          />

          <BookShelf
            title="Read"
            books={orderedBooks.read}
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
    </div>)
}

export default Home;
