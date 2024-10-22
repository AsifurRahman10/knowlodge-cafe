import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmars/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const handleBookMark = (blog) => {
    const newBookmarks = [...bookMarks, blog];
    setBookMarks(newBookmarks);
  };
  return (
    <div className="w-10/12 mx-auto">
      <Header></Header>
      <div className="md:flex gap-6">
        <div className="md:w-2/3">
          <Blogs handleBookMark={handleBookMark}></Blogs>
        </div>
        <div className="md:w-1/3">
          <Bookmarks bookMarks={bookMarks}></Bookmarks>
        </div>
      </div>
    </div>
  );
}

export default App;
