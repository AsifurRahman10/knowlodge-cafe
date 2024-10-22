import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookMarks }) => {
  return (
    <div className="bg-[#f3f3f3] rounded-lg">
      <h2 className="my-8 pt-7 px-7 font-bold text-2xl">
        Bookmarked Blogs : {bookMarks.length}
      </h2>
      <div className="flex flex-col gap-y-6 my-8 px-7 pb-4">
        {bookMarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookMarks: PropTypes.array.isRequired,
};

export default Bookmarks;
