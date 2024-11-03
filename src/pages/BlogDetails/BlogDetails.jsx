import { Link } from "react-router-dom";

const BlogDetails = ({ blog }) => {
  const { thumbnail_url, title, date, id, author, content_snippet, tags } =
    blog;
  return (
    <div className="card bg-base-100 rounded-none shadow-xl">
      <figure>
        <img className="h-[14rem]" src={blog.thumbnail_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{blog.date}</h2>
        <p>{blog.title}</p>
        <div className="card-actions justify-end">
          <Link to={`/singleblog/${blog.id}`} state={{blog:blog}}>
            <button className="btn btn-md bg-black text-white rounded-sm">
              Read more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
