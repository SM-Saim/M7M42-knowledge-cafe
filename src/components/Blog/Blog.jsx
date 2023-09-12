import PropTypes from "prop-types";
const Blog = ({ Blogs }) => {
  console.log(Blogs);
  return <div></div>;
};

Blog.propTypes = {
  Blogs: PropTypes.object.isRequired,
};
export default Blog;
