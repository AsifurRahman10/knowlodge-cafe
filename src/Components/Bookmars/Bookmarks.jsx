import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookMarks, makeAsRead }) => {
  return (
    <div>
      <div className="bg-[#efedfd] py-5 px-11 rounded-lg border-2 border[#6047ec]">
        <h2 className="font-bold text-2xl text-[#6047EC]">
          {`Spent time on read : ${makeAsRead} min`}
        </h2>
      </div>
      <div className="bg-[#f3f3f3] rounded-lg">
        <h2 className="my-8 pt-6 px-7 font-bold text-2xl">
          Bookmarked Blogs : {bookMarks.length}
        </h2>
        <div className="flex flex-col gap-y-6 my-8 px-7 pb-4">
          {bookMarks.map((bookmark, idx) => (
            <Bookmark key={idx} bookmark={bookmark}></Bookmark>
          ))}
        </div>
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookMarks: PropTypes.array.isRequired,
  makeAsRead: PropTypes.number.isRequired,
};

export default Bookmarks;
