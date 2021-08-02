/**
 * Header component
 * It represents static header with title
 */

const Header: () => JSX.Element = () => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
    </div>
  )
}

export default Header;
