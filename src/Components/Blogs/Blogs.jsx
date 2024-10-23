import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleBookMark, handleMarkAsRead }) => {
  const [blogsInfo, setBlogsInfo] = useState([]);
  useEffect(() => {
    fetch("Blog.json")
      .then((res) => res.json())
      .then((data) => setBlogsInfo(data));
  }, []);
  return (
    <div>
      {blogsInfo.map((blog, idx) => (
        <Blog
          key={idx}
          blog={blog}
          handleMarkAsRead={handleMarkAsRead}
          handleBookMark={handleBookMark}
        ></Blog>
      ))}
    </div>
  );
};
Blogs.propTypes = {
  handleBookMark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blogs;
