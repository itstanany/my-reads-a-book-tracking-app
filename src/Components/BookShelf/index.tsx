/**
 * Static BookShelf Component
 */
// import PropTypes from 'prop-types';
import Book from '../BookComponent';
import { BookShelfPropsTypes } from '../types/type';

const Shelf: (props: BookShelfPropsTypes) => JSX.Element = (props: BookShelfPropsTypes) => {
  const {
    title, books, onShelfChange,
  } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">
        {title}
      </h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            books
            && books.map((book, index: number) => (
              <li key={book.id}>
                <Book book={book} key={book.id} onShelfChange={onShelfChange} index={index} />
              </li>))
          }
        </ol>
      </div>
    </div>)
}

export default Shelf;

