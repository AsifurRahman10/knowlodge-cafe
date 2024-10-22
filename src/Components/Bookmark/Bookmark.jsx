import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-white p-5 rounded-lg">
      <h3 className="text-xl font-semibold text-[#111111]">{title}</h3>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};

export default Bookmark;
