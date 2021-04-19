import parse from "html-react-parser";
function article({ post }) {
  return (
    <div>
      <article className="blog-post">
        <h2 className="blog-post-title">{post.title}</h2>
        <p className="blog-post-meta">
          January 1, 2014 by <a href="#">Mark</a>
        </p>
        {parse(post.body)}
      </article>
    </div>
  );
}

export default article;
