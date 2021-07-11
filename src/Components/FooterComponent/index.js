/**
 * Footer component
 * It represents static footer with a link to project repository
 */

const Footer = () => {
  return (
    <div className="footer">
      <small>
        Full Source Code of This Project Con be found at {' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/ahmedalima/my-reads-a-book-tracking-app">
          Here
        </a>
      </small>
    </div>
  );
}

export default Footer;
