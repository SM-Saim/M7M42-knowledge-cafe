import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 ml-4 mt-4  bg-blue-100 rounded-lg">
      <div>
        <h2 className="text-2xl text-blue-600 text-center py-4 font-semibold  bg-blue-50 mb-2 rounded-lg m-4">
          Reading Time:{readingTime} min
        </h2>
      </div>

      <h2 className="text-2xl text-center font-semibold py-4  bg-blue-100 rounded-lg mx-4 mt-4">
        Total Bookmark:{bookmarks.length}
      </h2>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default Bookmarks;
