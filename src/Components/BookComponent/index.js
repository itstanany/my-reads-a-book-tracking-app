const Book = (props) => {
  const {
    shelf, title, authors, imageLinks,
  } = props.book;
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{
          width: 128,
          height: 193,
          backgroundImage: `url("${imageLinks.smallThumbnail}")`
        }}></div>
        <div className="book-shelf-changer">
          <select value={shelf}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">
        {title}
      </div>
      {authors
        && authors.map((author) => (
          <div className="book-authors">
            {author}
          </div>
        ))}
    </div>)
}

export default Book;
