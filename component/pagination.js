function pagination(props) {
  return (
    <div>
      <nav className="blog-pagination" aria-label="Pagination">
        <a className="btn btn-outline-primary" href="#">
          Older
        </a>
        <a
          className="btn btn-outline-secondary disabled"
          href="#"
          tabIndex="-1"
          aria-disabled="true"
        >
          Newer
        </a>
      </nav>
    </div>
  );
}

export default pagination;
