import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmars/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [makeAsRead, setMakeAsRead] = useState(0);
  const handleBookMark = (blog) => {
    const newBookmarks = [...bookMarks, blog];
    setBookMarks(newBookmarks);
  };
  const handleMarkAsRead = (time) => {
    setMakeAsRead(makeAsRead + time);
  };
  return (
    <div className="w-10/12 mx-auto">
      <Header></Header>
      <div className="md:flex gap-6 mt-8">
        <div className="md:w-2/3">
          <Blogs
            handleMarkAsRead={handleMarkAsRead}
            handleBookMark={handleBookMark}
          ></Blogs>
        </div>
        <div className="md:w-1/3">
          <Bookmarks makeAsRead={makeAsRead} bookMarks={bookMarks}></Bookmarks>
        </div>
      </div>
    </div>
  );
}

export default App;
