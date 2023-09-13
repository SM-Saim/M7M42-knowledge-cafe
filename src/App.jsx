import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddToBookmark = (blog) => {
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks);
  };

  const [readingTime, setReadingTime] = useState(0);
  const handleMarkAsRead = (id, time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

    // remove the read item from bookmark
    // console.log("removing", id);
    const remainingBookMarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBookMarks);
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 my-5">
        <Header></Header>
        <div className="md:flex">
          <Blogs
            handleMarkAsRead={handleMarkAsRead}
            handleAddToBookmark={handleAddToBookmark}
          ></Blogs>
          <Bookmarks
            bookmarks={bookmarks}
            readingTime={readingTime}
          ></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
