import PropTypes from "prop-types";

const Blog = ({ blog, handleBookMark, handleMarkAsRead }) => {
  const {
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    title,
    hashtags,
  } = blog;
  return (
    <div>
      <img className="w-full rounded-lg lg:h-[500px]" src={cover} alt="" />
      <div className="flex justify-between items-center">
        <div className="flex gap-6 my-6 items-center">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <p className="text-2xl font-bold">{author}</p>
            <p>
              <small className="font-semibold text-[#707070]">
                {posted_date}
              </small>
            </p>
          </div>
        </div>
        <div>
          <h4 className="flex justify-center items-center gap-4">
            <span className="font-medium text-[#707070]">
              {reading_time} minute to read
            </span>
            <button onClick={() => handleBookMark(blog)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
              </svg>
            </button>
          </h4>
        </div>
      </div>
      <h2 className="font-bold text-4xl my-4">{title}</h2>
      <div className="flex gap-2 my-4">
        {hashtags.map((hashtag, idx) => (
          <span key={idx} className="font-medium text-xl text-[#707070]">
            {hashtag}
          </span>
        ))}
      </div>
      <button
        onClick={() => handleMarkAsRead(reading_time)}
        className="mb-6 font-bold text-xl text-[#6047EC] border-b-2 border-b-[#6047EC]"
      >
        Mark as read
      </button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookMark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};
export default Blog;
