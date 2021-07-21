/**
 * Main Page Component
 * It Displays Different shelves of books
 * Each shelve contains a list of books
 * User can Change/remove any book from a shelve
 */

import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from '../BookShelf';
import {
  getAll, update,
} from '../../BooksAPI';
import { BookType, OrderedBooksType } from '../types/type';

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


const Home: () => JSX.Element = () => {
  const [orderedBooks, setOrderedBooks] = useState<OrderedBooksType | undefined>(undefined);

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

  const onShelfChange: (e: ChangeEvent<HTMLInputElement>, book: BookType) => Promise<void> = useCallback(async (e, book) => {
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
            books={orderedBooks && (orderedBooks.currentlyReading || [])}
            onShelfChange={onShelfChange}
          />

          <BookShelf
            title="Want to Read"
            books={orderedBooks && (orderedBooks.wantToRead || [])}
            onShelfChange={onShelfChange}
          />

          <BookShelf
            title="Read"
            books={orderedBooks && (orderedBooks.read || [])}
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
