import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleBookMark }) => {
  const [blogsInfo, setBlogsInfo] = useState([]);
  useEffect(() => {
    fetch("Blog.json")
      .then((res) => res.json())
      .then((data) => setBlogsInfo(data));
  }, []);
  return (
    <div className="mt-10">
      {blogsInfo.map((blog) => (
        <Blog key={blog.id} blog={blog} handleBookMark={handleBookMark}></Blog>
      ))}
    </div>
  );
};
Blogs.propTypes = {
  handleBookMark: PropTypes.func.isRequired,
};

export default Blogs;
