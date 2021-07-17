/**
 * Search component from the library
 * User can add books to his library
 */

import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAll, search, update } from '../../BooksAPI';
import Book from '../BookComponent';


const searchTerms = ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
];

const updateResultSearch = async (result) => {
  /**
   * Update the search results with the books in the user collection
   */
  let updated = result;
  const shelves = await getAll();
  shelves.forEach((book, index) => {
    result.forEach((rowBook, index2) => {
      if (rowBook.id === book.id) updated[index2] = shelves[index];
    })
  });
  return updated;
}

const Search = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);


  useEffect(() => {
    /**
     * Get search results whenever user enter new search term
     */
    let didCancel = false;

    const getSearchResults = async (query) => {
      if (query) {
        const result = await search(query);
        if (!didCancel) {
          if (result.error) {
            setResult([]);
            return;
          }
          let updated = await updateResultSearch(result);
          setResult(updated);
        }
      } else {
        setResult([]);
      }
    }
    getSearchResults(query)
    return () => { didCancel = true; }; // Remember if we start fetching something else
  }, [query])

  const onUserInput = useCallback(async (e) => {
    /**
     * Update query state variable as user hits a stroke
     */
    setQuery(e.target.value || '');
  }, []);

  const onShelfChange = useCallback(async (e, book, index) => {
    /**
     * Send user update to back-end
     * update current search results to reflect user change
     */
    const value = e.target.value;
    await update(book, value);
    setResult((prevResult) => {
      const updatedResult = [...prevResult]
      updatedResult[index].shelf = value;
      return updatedResult;
    });
  }, []);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={onUserInput}
          />

        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {
            result && result.length > 0
              ? result.map((book, index) => {
                return <Book key={book.id} book={book} onShelfChange={onShelfChange} index={index} />
              })
              : (<>
                <h1>
                  No search result! What about searching for one of the following terms?
                </h1>
                <div className="break"></div>
                {searchTerms.map((term) => <li key={term}>{term}</li>)}
              </>
              )
          }
        </ol>
      </div>
      <div className="open-search">
        <Link
          to="/"
        >
          Back to Main Page
        </Link>
      </div>
    </div>)
}

export default Search;
