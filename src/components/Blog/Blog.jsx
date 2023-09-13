import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    id,
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className=" mb-20 mt-4">
      <img
        className="w-full h-[450px] rounded-lg"
        src={cover}
        alt={`Cover of the title ${title}`}
      />
      <div className="md:flex justify-between my-4">
        <div className="flex">
          <img className="w-12" src={author_img} alt="" />
          <div className=" ml-3">
            <h3 className="text-xl font-semibold">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="ml-2 text-xl text-blue-800"
          >
            <FaRegBookmark></FaRegBookmark>
          </button>
        </div>
      </div>

      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="mb-4">
        {hashtags.map((hash, idx) => (
          <span key={idx} className="mr-2">
            <a href=""> #{hash}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(id, reading_time)}
        className="text-blue-600 underline font-semibold "
      >
        Mark as Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func,
};
export default Blog;
