import { useCallback, useState } from 'react';
import { search, update } from '../../BooksAPI';
import Book from '../BookComponent';

const Search = () => {
  // const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);


  /**
   * get() of each search result and replace it to contain "SHELF" property
   *    ~= 20 Ajax calls after initial search query
   * getAll() and compare with search results
   *    ~= n of shelves' books "filtering process"
   */

  // const find = useCallback(async (query) => {
  //   const result = await search(query);
  //   setResult(result);
  // }, []);

  const onUserInput = useCallback(async (e) => {
    if (e.target.value) {
      const result = await search(e.target.value);
      // alert(JSON.stringify(result));
      setResult(result.error ? [] : result);
    } else {
      setResult([]);
    }
  }, []);

  const onShelfChange = useCallback(async (e, book) => {
    await update(book, e.target.value);
    // await updateBookCollections();
  }, [])

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
        <div className="search-books-input-wrapper">
          {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
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
            result
            && result.map((book) => {
              console.log(book);
              console.log(book.imageLinks);
              return <Book book={book} onShelfChange={onShelfChange} />
            })
          }
        </ol>
      </div>
    </div>)
}

export default Search;
